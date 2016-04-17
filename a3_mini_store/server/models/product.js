console.log('in product model')

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
	name: {type: String, required: true},
	image: { type: String },
	description: { type: String, required: true },
	quantity: { type: Number, required: true },
	date: { type: Date, default: Date.now }
})

mongoose.model('Product', productSchema);
