console.log('in config/routes.js')
var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');

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
		orders.create_order(req, res)
	})
}
