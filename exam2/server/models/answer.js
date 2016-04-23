console.log('in answer model')

var mongoose = require('mongoose');

var deepPopulate = require('mongoose-deep-populate')(mongoose)

var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
	text: {type: String, required: true},
	details: {type: String},
	likes: {type: Number, default: 0},
	_question: {type: Schema.Types.ObjectId, ref: 'Topic'},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true})

AnswerSchema.plugin(deepPopulate);
mongoose.model('Answer', AnswerSchema);
