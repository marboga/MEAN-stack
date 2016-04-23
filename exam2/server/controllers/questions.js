console.log('in server questions controller')

var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User');

module.exports = {
	index: function(req, res){
		console.log('inside questions index fn');
		Question.find({}).populate('_answers ').exec(function(err, data){
			if (err){
				res.json(err)
			}else{
					res.json(data)
			}
		})
	},
	create: function(req, res){
		console.log('inside question creation function, data going in = ', req.body);
		var question = new Question(req.body);
		question.save(function(err, new_question){
			if(err){
				console.log("ERR", err)
				res.json(err)
			}else{
				console.log('db push successful')
				res.json(new_question)
			}
		})
	},
	getOne: function(req, res){
		Question.find({_id: req.params.id}).deepPopulate('_answers _answers._user.name _answers._user').exec(function(err, data){
			if(err){
				console.log(err)
				res.json(err)
			}else{
				res.json(data)
			}
		})
	},
}
