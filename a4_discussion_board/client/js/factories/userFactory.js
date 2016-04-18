myApp.factory('userFactory', function($http, $sessionStorage){
	var factory  = {}

	$sessionStorage.currUser;
	factory.checkUser = function(info, callback){
		$http.post('/checkUser', info).success(function(data){
			$sessionStorage.currUser = data;
			callback(data);
		})
	}
	factory.create = function(info, callback){
		$http.post('/createUser', info).success(function(data){
			$sessionStorage.currUser = data;
			callback(data);
		})
	}
	factory.user = function(info, callback){
		return $sessionStorage.currUser;
	}
})
