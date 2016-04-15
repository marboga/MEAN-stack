console.log('routes.js')
var friends = require('./../controllers/friends.js')

module.exports = function(app){
	app.get('/friends', function(req, res){
		friends.index(req, res);
	})
	app.post('/friends', function(req, res){
		console.log("req coming in as:", req.body)
		friends.create(req, res);
	})
}
