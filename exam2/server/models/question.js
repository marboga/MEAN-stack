console.log('in question model')

var mongoose = require('mongoose');

var deepPopulate = require('mongoose-deep-populate')(mongoose)

var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
	title: {type: String, required: true, minlength: 10},
	description: {type: String},
	_answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
}, {timestamps: true})

QuestionSchema.plugin(deepPopulate);
mongoose.model('Question', QuestionSchema);
