console.log('server routes');

var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js');

module.exports = function(app){
	app.post('/login', function(req, res){
		console.log('in login serverside, reqbod', req.body)
		users.login(req, res);
	})
	app.post('/questions', function(req, res){
		questions.index(req, res);
	})
	app.post('/questions/new', function(req, res){
		console.log('attempting to create new question:', req.body)
		questions.create(req, res);
	})
	app.get('/question/:id', function(req, res){
		console.log('attempting to retrieve specific question:', req.body)
		questions.getOne(req, res);
	})
	app.post('/answers/new', function(req, res){
		console.log('made it to routes')
		answers.create(req, res)
	})
	app.get('/answer/:id/like', function(req, res){
		answers.like(req, res);
	})
}
