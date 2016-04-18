var mongoose = require('mongoose');

var User = mongoose.model('User')

module.exports = {
	checkUser: function(req, res){
		User.findOne({name: req.body.name}, function(err, user){
			if (err){
				console.log(err)
			}else{
				console.log(user)
				res.json(user)
			}
		})
	}
	create: function(req, res){
		var user = new User(req.body)
		user.save(, function(err, user){
			if (err){
				console.log(err)
			}else{
				console.log(user)
				res.json(user)
			}
		})
	}
}
