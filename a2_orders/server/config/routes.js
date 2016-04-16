console.log('in config/routes.js')
var orders = require('../controllers/orders.js');

module.exports = function(app){
	app.get('/orders', function(req, res){
		orders.get_all(req, res)
	})
	app.get('/new/:name', function(req, res){
		orders.create(req, res)
	})
	app.get('/remove/:name', function(req, res){
		orders.destroy(req, res)
	})
	app.get('/:name', function(req, res){
		orders.get_one(req, res)
	})

}
