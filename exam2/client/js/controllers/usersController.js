console.log('in usersController');

MyApp.controller('usersController', function($scope, userFactory, $location){
	$scope.user = userFactory.user;
	console.log('curruser', $scope.user)


	$scope.login = function(name){
		console.log('in login function')
		userFactory.login(name, function(data){
			$scope.user = {name: data};
			$location.url('/');
		})
	}

	$scope.logout = function(){
		console.log('LOGGING OUT')
		userFactory.logout(function(data){
		})
			userFactory.data = "22"
			$scope.user = "22"
			var name = "22"
	}


	function getUser(){
		console.log('getting user'
		)
		userFactory.index(function(data){
			if (data !== undefined){
				$scope.user = data
			}
			if ($scope.user === undefined){
				var name = window.prompt('What is your name?')
				console.log('inputted name',name)
				$scope.login(name)
			}
		})
	}
	getUser()
})
