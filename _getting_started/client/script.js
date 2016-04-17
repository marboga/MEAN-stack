//Gotta initialize our module
var friends_app = angular.module('friends_app', [ngRoute]);

friends_app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html'
	})
	.otherwise({redirectTo: '/'})
})

//FACTORY
friends_app.factory('FriendFactory', function($http){
	//make our variables so we can use them
	var factory = {};
	var friends = [];
	//get all friends, restful naming conventions
	factory.index = function(callback){
		//send HTTP request to server/database
		$http.get('/friends').success(function(friends){
			console.log('got friends', friends)
			//return friends to controller
			callback(friends);
		})
	}

	//show only one friend, restfully. not yet implemented serverside.
	// factory.show = function(id, callback){
	// 	console.log(id);
	// 	$http.get('/friends/:id').success(function(friend){
	// 		console.log('got friend', friend)
	// 		callback(friend);
	// 	})
	// }

	//add a new friend to the database. info is passed in from controller's scope
	factory.create = function(info, callback){
		console.log(info.name, info.age)
		//send HTTP request to server
		$http.post('/friends', info).success(function(info){

			console.log('adding friend to friends', info)
			//return friends to controller
			callback(info);
		})
	}

	factory.delete = function(id, callback){
		console.log(id)
		//send HTTP request to server
		$http.delete('/friends/:id', info).success(function(id){

			console.log('removing friend from friends', id)
			//return friends to controller
			callback(id);
		})
	}
	return factory;
})
//CONTROLLER
friends_app.controller('FriendsController', function($scope, FriendFactory) {

	FriendFactory.index(function(data){
		$scope.friends = data;
	})
	$scope.addfriend = function() {
		FriendFactory.create($scope.new_friend, function($scope, FriendFactory){
			console.log(FriendFactory.index())
			$scope.friends = FriendFactory.index()
			$scope.new_friend = {};
		})
	}
	$scope.removeFriend = function(){
		req.params.id, FriendFactory.delete(function($scope, FriendFactory){
			$scope.friends = FriendFactory.delete()
		})
	}
})
