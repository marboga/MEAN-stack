console.log('this is the controller')

module.exports = (function(){
	return {
		index: function(req, res){
			res.json([{name: 'Andrew', age: 24}, {name: "Michael", age: 34}, {name: "Ted", age: 32}]);
		}
	}
})();
