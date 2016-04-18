console.log('in server model')

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {type: String, required: true},
	_topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}]

}, {timestamps: true})

var TopicSchema = new Schema({
	title: {type: String, required: true},
	description: String,
	category: String,
	_user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})

mongoose.model('User', UserSchema);
var User =
