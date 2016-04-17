console.log('in customerFactory')
var store_app = angular.module('store_app', 	['ngRoute']);

store_app.factory('customerFactory', function($http){
	var factory = {};
	var customers = [];

	factory.index = function(callback){
		$http.get('/customers').success(function(customers){
			console.log('customers retrieved')
			callback(customers);
		})
	}

	factory.create = function(info, callback){
		console.log("in factory, info.name = ",info.name);
		$http.post('/customers/new', info).success(function(info){
			console.log("posted to server")
			callback(info);
		})
	}

	factory.delete = function(info, callback){
		console.log('info:', info);
		$http.get('/customers/remove/'+info._id).success(function(info){
			console.log('sent data to server');
			callback(info);
		})
	}

	return factory;
})
