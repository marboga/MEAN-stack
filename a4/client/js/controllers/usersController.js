console.log('in usersController');

MyApp.controller('usersController', function($scope, userFactory, $location){
	$scope.user = {};

	$scope.login = function(user){
		userFactory.login(user, function(data){
			$scope.user = data;
			$location.url('/dashboard');
		})
	}

	$scope.getUser = function(){
		userFactory.getUser(function(data){
			if(data){
				$scope.user = data;
			}
		})
	}
})
