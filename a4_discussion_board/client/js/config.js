var myApp = angular.module('myApp', ['ngRoute', 'ngStorage'])

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'static/partials/login.html',
		controller: 'loginsController',
		controllerAs: 'LC'
	})
	.when('/dashboard', {
		templateUrl: 'static/partials/dashboard/html',
		controller: 'dashboardsController',
		controllerAs: 'DC'
	})
	.otherwise({redirectTo: '/'})
})
