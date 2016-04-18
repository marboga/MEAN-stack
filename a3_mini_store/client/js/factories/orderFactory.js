console.log('in order factory')

store_app.factory('orderFactory', function($http){
	var factory = {};
	var orders = [];
	var customers = [];
	var products = [];

	factory.index = function(callback){
		$http.get('/orders').success(function(orders){
			console.log('orders retrieved')
			callback(orders);
		})
	}

	factory.get_customers = function(callback){
		$http.get('/customers').success(function(customers){
			console.log('customers retrieved')
			callback(customers);
		})
	}
	factory.get_products = function(callback){
		$http.get('/products').success(function(products){
			callback(products);
		})
	}

	factory.create = function(info, callback){
		console.log(info, "this is data passing through orders factory");
		$http.post('/orders/new', info).success(function(info){
			callback(info);
		})
	}
	factory.delete = function(info, callback){
		console.log('info:', info);
		$http.get('/remove/'+info.name).success(function(info){
			console.log('sent data to server');
			callback(info);
		})
	}

	return factory;
})
