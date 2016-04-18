console.log('in controllers/users.js')

var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
		login: function(req, res){
			console.log(req.body.name, "INSIDE LOGIN FUNXOON")
			User.findOne({name: req.body.name}, function(err, user){
				if (err){
					res.json(err)
				}else{
					if (user){
						res.json(user)
					}else{
						var user = new User(req.body)
						user.save(function(err, user){
							if (err){
								res.json(err)
							}else{
								res.json(user)
							}
						})
					}
				}
			})
		},
	}
