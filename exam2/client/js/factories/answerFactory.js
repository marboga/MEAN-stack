MyApp.factory('answerFactory', function($http){
	var factory = {};
	var user = {};
	factory.question = {};

	factory.index = function(id, callback){
		$http.get('/question/'+id).success(function(question){
			console.log('question retrieved', question)
			factory.question = question;
			callback(question);
		})
	}

	factory.create = function(info, callback){
		$http.post('/answers/new', info).success(function(info){
			callback(info);
		})
	}

	factory.update = function(info, callback){
		console.log('in factory adding like', info)
		$http.get('/answer/'+info._id+'/like').success(function(info){
			callback(info)
		})
	}

	return factory;
})
