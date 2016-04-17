console.log('in controllers/orders.js')

var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = {
	get_all: function(req, res){
		Order.find({}, function(err, orders){
			if (err){
				res.json(err)
			}else{
				res.json(orders);
			}
		})
	},
	create_order: function(req, res){
		console.log('this is data posted: ',req.body);
		var order = new Order({
			name: req.body.name,
			number: req.body.number,
			product: req.body.product,
		});
		console.log('new order=', order)
		order.save(function(err){
			if (err){
				console.log('error occurred in DB entry beep beep');
				res.json(err);
			}else{
				res.redirect('/');
			}
		})
	},
	destroy_order: function(req, res){
		Order.findOneAndRemove({name: req.params.name}, function(err){
			if (err){
				res.json(err);
			}else{
				res.redirect('/')
			}
		})
	},
	get_one_order: function(req, res){
		Order.findOne({name: req.params.name}, function(err, order){
			if (err){
				res.json(err);
			}else{
				res.json('index', {order : order})
			}
		})
	}
}
