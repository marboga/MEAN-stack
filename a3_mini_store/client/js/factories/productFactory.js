console.log('in product factory')

store_app.factory('productFactory', function($http){
	var factory = {};
	var products = [];
	factory.index = function(callback){
		console.log('in product factory index')
		$http.get('/products').success(function(products){
			console.log(products, "= products");
			callback(products);
		})
	}
	factory.create = function(info, callback){
		console.log('in factory, info=', info);
		$http.post('/products/new', info).success(function(info){
			callback(info);
		})
	}
	return factory;
})
