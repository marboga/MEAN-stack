store_app.controller('productsController', function($scope, productFactory){
	$scope.products = [];

	function index(){
		productFactory.index(function(data){
			$scope.products = data;
			$scope.new_product = {};
		})
	}
	index();

	$scope.addProduct = function(){
		productFactory.create($scope.new_product, function($scope, productFactory){
			console.log('made it back to controller from factory');
			$scope.products = index();
			$scope.new_product = {};
		})
	}
})
