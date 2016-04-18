store_app.controller('ordersController', function($scope, orderFactory){
	function index(){
		orderFactory.index(function(data){
			$scope.orders = data;
			$scope.new_order = {};
		})
	}
	function getCust(){
		orderFactory.get_customers(function(data){
			$scope.customers = data;
		})
	}
	function getProd(){
		orderFactory.get_products(function(data){
			$scope.products = data;
		})
	}
	index()
	getCust()
	getProd()

	$scope.addOrder = function(){
		console.log($scope.new_order.number, "new order here")
		orderFactory.create($scope.new_order, function($scope, orderFactory){
			$scope.orders = index();
			$scope.new_order = {};
		})
	}

	$scope.removeOrder = function(order){
		console.log('trying to remove', order.name);
		orderFactory.delete(order, function(order, orderFactory){
			index();
		})
	}
})
