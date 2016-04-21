console.log('in logins controller')

store_app.controller('loginsController', function($scope, loginFactory, $location){
	$scope.user = {};

	$scope.login = function(user, data){
		loginFactory.login(user, function(data){
			$scope.user = data;
			$location.url('/customers')
		})
	}

	var getUser = function(){
		loginFactory.getUser(function(data){
			if (data){
				$scope.user = data
			}else{
				$location.url('/')
			}
		})
	}
	getUser()

	$scope.logout = function(){
		console.log('wakka wakka')
	}
})
