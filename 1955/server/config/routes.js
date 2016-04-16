console.log('in config/routes.js')
var people = require('../controllers/people.js');

module.exports = function(app){
	app.get('/people', function(req, res){
		people.get_all(req, res)
	})
	app.get('/new/:name', function(req, res){
		people.create_person(req, res)
	})
	app.get('/remove/:name', function(req, res){
		people.destroy_person(req, res)
	})
	app.get('/:name', function(req, res){
		people.get_one_person(req, res)
	})

}
