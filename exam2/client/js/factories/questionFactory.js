MyApp.factory('questionFactory', function($http){
	var factory = {};
	var user = {};
	factory.question = {}

	factory.index = function(callback){
		$http.post('/questions').success(function(questions){
			console.log('questions = ', questions);
			callback(questions)
		})
	}
	factory.create = function(info, callback){
		console.log('in client questions factory, info=', info);
		$http.post('/questions/new', info).success(function(info){
			callback(info);
		})
	}

	return factory;
})
