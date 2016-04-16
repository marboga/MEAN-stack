console.log('in model');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var orderSchema = new mongoose.Schema({
	name: { type: String, required: true },
	product: {type: String, required: true },
	quantity: {type: Number, required: true },
	date: { type: Date, default: Date.now }
})

mongoose.model('Order', orderSchema);
