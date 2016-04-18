console.log('in config/routes.js')
var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');
var products = require('../controllers/products.js');
var users = require('../controllers/users.js');

module.exports = function(app){
	app.get('/customers', function(req, res){
		console.log('at routes serverside')
		customers.get_all(req, res)
	})
	app.post('/customers/new', function(req, res){
		console.log('posted data', req.body)
		customers.create(req, res)
	})
	app.get('/customers/remove/:id', function(req, res){
		customers.destroy(req, res)
	})
	app.get('/orders', function(req, res){
		orders.get_all(req, res)
	})
	app.post('/orders/new', function(req, res){
		console.log(req.body, "this came down the pipe")
		products.update_count(req, res)
		orders.create_order(req, res)
	})
	app.get('/products', function(req, res){
		console.log('at routes serverside')
		products.get_all(req, res)
	})
	app.post('/products/new', function(req, res){
		console.log('posted data', req.body)
		products.create_product(req, res)
	})
	app.post('/login', function(req, res){
		console.log('data', req.body)
		customers.login(req, res)

	})
}
