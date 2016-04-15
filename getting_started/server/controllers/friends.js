console.log('controller: friends.js')


var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function(){
	return {
		index: function(req, res){
			Friend.find({}, function(err, results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			})
		},
		create: function(req, res){
			console.log(req.body.name)
			var friend = new Friend({
				name: req.body.name, age: req.body.age
			})
			friend.save(function(err, results){
				if(err){
					console.log("err!", err);
				}else{
					res.json(results);
				}
			})
		},
		delete: function(req, res){
			console.log("in controller, id=",req.params.id)
			var friend = Friend({_id: req.params.id})
			friend.remove({_id: req.params.id}, function(err, results){
				if(err){
					console.log("err!", err);
				}else{
					res.json(results);
				}
			})
		},
	}
})();
