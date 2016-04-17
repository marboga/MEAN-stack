console.log('in controllers/customers.js')

var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
	get_all: function(req, res){
		Customer.find({}, function(err, customers){
			if (err){
				res.json(err)
			}else{
				res.json(customers);
			}
		})
	},

	create: function(req, res){
		console.log('in server controller, data= ',req.body);
		var customer = new Customer({
			name: req.body.name,
			orders: [],
		 });
		 console.log('customer = ', customer)
		customer.save(function(err){
			if (err){
				console.log('error occurred in DB entry! beep beep', err);
				res.json('index', {err: err});
			}else{
				res.json(customer);
			}
		})
	},

	destroy: function(req, res){
		Customer.findOneAndRemove({_id: req.params.id}, function(err){
			if (err){
				res.json(err);
			}else{
				res.redirect('/customers')
			}
		})
	},

	get_one_customer: function(req, res){
		Customer.findOne({name: req.params.name}, function(err, customer){
			if (err){
				res.json(err);
			}else{
				res.json('index', {customer : customer})
			}
		})
	}
}
