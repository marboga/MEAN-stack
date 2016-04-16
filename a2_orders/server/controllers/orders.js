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
		console.log('this is data posted: ',req.params);
		var order = new Order({
			name: req.params.name,
		 });
		order.save(function(err){
			if (err){
				console.log('error occurred! beep beep');
				res.json('index', {err: err});
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
