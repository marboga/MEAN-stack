console.log('in client Posts controller')

MyApp.controller('postsController', function($scope, userFactory, postFactory, $routeParams){
	console.log('loading posts controller')
	$scope.user = {};
	$scope.posts = {};
	// $scope.new_post = {};
	$scope.topic = postFactory.topic;
	$scope.postings = {}
	// console.log($scope.topic)

	function getUser(){
		userFactory.index(function(data){
			$scope.user = data;
		})
	}
	getUser();

	function getTopic(){
		// console.log($routeParams.id)
		var topicId = $routeParams.id
		postFactory.index(topicId, function(data){
			$scope.topic = data[0];
			$scope.postings = data[0]._postings
			// console.log($scope.topic, "SCOPE TOPIC")
		})
	}
	getTopic();

	// $scope.getPosts = function(){
	// 	var topicId = $routeParams.id
	// 	postFactory.getPosts(topicId, function(data){
	// 		$scope.posts = data;
	// 	})
	// }

	$scope.addPost = function(data){
		$scope.new_post._user = $scope.user._id;
		$scope.new_post._topic = $routeParams.id;
		postFactory.create($scope.new_post, function($scope, postFactory){
			// console.log('bubbled back up')
			getTopic();
			$scope.new_post = {};
		})
	}


})
