console.log('in answers server controller');

var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User');

module.exports = {
	create: function(req, res){
		console.log('inside answers create function.', req.body, "AAÀaaaaaaaaaaaaaaaaaaaaaaaAAAA")
		var answer = new Answer(req.body);
		answer.save(function(err, new_answer){
			if (err){
				console.log(err)
				res.json(err)
			}else{
				Question.findOne({_id: req.body._question}, function(err, found_question){
					if (err){
						console.log(err)
						res.json(err)
					}else{
						found_question._answers.push(new_answer._id)
						found_question.save()
						res.json(found_question)
					}
				})
			}
		})
	},
	like: function(req, res){
		console.log('adding like in server controller', req.params)
		Answer.findOneAndUpdate({_id: req.params.id}, {$inc:{likes: +1}}, function(err, answer){
			if(err){
				console.log(err)
				res.json(err)
			}else{
				res.json(answer)
			}
		})
	}
}
