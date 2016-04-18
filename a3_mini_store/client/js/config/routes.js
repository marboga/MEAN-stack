store_app.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: './../views/login.html',
		controller: 'loginsController'
	})
	.when('/dashboard', {
		templateUrl: './../views/dashboard.html',
		controller: 'dashboardsController'
	})
	.when('/customers', {
		templateUrl: './../views/customers.html',
		controller: 'customersController'
	})
	.when('/orders', {
		templateUrl: './../views/orders.html',
		controller: 'ordersController'
	})
	.when('/products', {
		templateUrl: './../views/products.html',
		controller: 'productsController'
	})
	.otherwise('/')
})
