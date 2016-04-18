myApp.controller('loginsController', function($location, userFactory){
	var _this = this;

	this.login = function(){
		userFactory.checkUser(_this.user, function(data){
			if (data){
				console.log('checkuser data', data)
				$location.url('/dashboard')
			}else{
				userFactory.create(_this.user, function(data){
					console.log('create data', data)
					$locaton.url('/dashboard');
				})
			}
		})
	}
})
