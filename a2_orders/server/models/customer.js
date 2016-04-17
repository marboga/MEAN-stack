console.log('in customer model');

var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var customerSchema = new mongoose.Schema({
	name: { type: String, required: true },
	date: { type: Date, default: Date.now },
	orders: [],
})

mongoose.model('Customer', customerSchema);
