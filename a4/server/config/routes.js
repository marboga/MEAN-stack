console.log('server routes')

var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');
var posts = require('../controllers/posts.js');

module.exports = function(app){
	app.post('/login', function(req, res){
		users.login(req, res);
	})
	app.post('/topics', function(req, res){
		topics.index(req, res);
	})
	app.post('/topics/new', function(req, res){
		// console.log('attempting to create new topic,', req.body)
		topics.create(req, res);
	})
	app.post('/posts', function(req, res){
		posts.index(req, res);
	})
	app.post('/posts/new', function(req, res){
		console.log('attempting to create new post,', req.body)
		posts.create(req, res);
	})
	app.get('/topic/:id', function(req, res){
		topics.find(req, res);
	})

}
