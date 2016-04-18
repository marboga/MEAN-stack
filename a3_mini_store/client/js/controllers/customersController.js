store_app.controller('customersController', function($scope, customerFactory, loginFactory, $location){
	$scope.customers = [];
	$scope.user
	$scope.dupe_message = "";

	function index(){
		customerFactory.index(function(data){
			$scope.customers = data;
			$scope.new_customer = {};
		})
	}
	index();

	$scope.addCustomer = function(){
		customerFactory.create($scope.new_customer, function($scope, customerFactory){
			console.log('returned from add customer factory')
			$scope.customers = index();
			$scope.new_customer = {};
		})
	}

	$scope.removeCustomer = function(customer){
		console.log('trying to remove', customer.name);
		customerFactory.delete(customer, function(customer, customerFactory){
			index();
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


	$scope.noDuplicateName = function(){
		if($scope.new_customer !== undefined){
			for (var i = 0; i < $scope.customers.length; i++){
				if ($scope.new_customer.name == $scope.customers[i].name) {
					console.log('used')
					$scope.dupe_message = "This name is already taken. Try another."
					return true;
				}
			}
		}
		return false;
	}
})
