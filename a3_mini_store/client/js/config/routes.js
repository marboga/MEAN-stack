store_app.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'views/customers.html'
	})
	.when('/orders',{
		templateUrl: 'views/orders.html'
	})
	.when('/products',{
		templateUrl: 'views/products.html'
	})
	.otherwise('/')
})
