console.log('in config/routes.js')
var User = require('./../controllers/usersController.js')
var Topic = require('./../controllers/topicsController.js')

module.exports = function(app){
	app.post('/checkUser', function(req, res){
		users.checkUser(req, res)
	})
	app.post('/createUser', function(req, res){
		users.create(req, res)
	})
}
