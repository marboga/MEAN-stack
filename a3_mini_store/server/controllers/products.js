console.log('in controllers/products.js')

var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
	get_all: function(req, res){
		Product.find({}, function(err, products){
			if (err){
				res.json(err)
			}else{
				res.json(products)
			}
		})
	}, //<<<<<<<<---- THAT COMMA IS NECESSARY. WE ARE INSIDE AN OBJECT
	create_product: function(req, res){
		console.log('req.body data coming in to server controller: ', req.body);
		var product = new Product({
			name: req.body.name,
			image: req.body.image,
			description: req.body.description,
			quantity: req.body.quantity,
		});
		product.save(function(err){
			if (err){
				console.log('error occurred in DB entry beep beep');
				res.json(err);
			}else{
				res.redirect('/')
			}
		});
	},
	update_count: function(req, res){
		console.log('subtracting from product', req.body.quantity, req.body.name)
		var qty = Product.quantity - req.body.quantity
		Product.save(req.body._id, {quantity: qty}, function(err, product){
			if (err){
				res.json(err)
			}else{
				res.json(product)
			}
		})
	}

}
