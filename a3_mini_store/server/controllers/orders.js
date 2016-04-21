console.log('in controllers/orders.js')

var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

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
			creator: req.body.creator,
			quantity: req.body.quantity,
			product: req.body.product,
		});
		order.save(function(err, order){
			if (err){
				console.log(err)
				res.json(err)
			}else{
				console.log('subtracting from product', req.body)
				Product.findByIdAndUpdate({_id: req.body.product}, {$inc: {quantity: -req.body.quantity}}, function(err){
					if (err){
						console.log(err)
					}else{
						res.redirect('/orders')
					}
				})
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
