console.log('in model');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new mongoose.Schema({
	name: { type: String, required: true },
})

mongoose.model('Person', personSchema);
