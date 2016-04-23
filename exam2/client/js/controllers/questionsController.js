console.log('in questionsController');

MyApp.controller('questionsController', function($scope, userFactory, questionFactory, $location){
	$scope.user = {};
	$scope.question = {}
	$scope.questions = {}
	$scope.messages = ""

	function getUser(){
		userFactory.index(function(data){
			if(data){
				$scope.user = data;
			}
			console.log("scope user", userFactory.user)
		})
	}
	getUser()

	$scope.addQuestion = function(data){
		if(data === undefined){
			$location.url('/new_question')
			var message = "Your answer must be at least 10 characters in length. "
			$scope.messages += message
			// console.log($scope.messages)
		}
		if(data.title.length < 10){
			$location.url('/new_question')
			var message = "Your answer must be at least 10 characters long."
			$scope.messages += message
			return false;
			// console.log($scope.messages)
		}
		$scope.new_question._user = $scope.user._id
		questionFactory.create($scope.new_question, function($scope, questionFactory){
			console.log('questionFactory create calledback');
			// getQuestions();
			$scope.new_question = {};
			$scope.messages = "You have added a new question."
			$location.url('/home')
			getQuestions()
		})
	}

	function getQuestions(){
		questionFactory.index(function(data){
			$scope.questions = data;
		})
	}
	getQuestions()

	//
	// function isThereAUser(){
	// 	if($scope.user.name === undefined){
	// 		var name = window.prompt('What is your name?')
	// 		console.log(name)
	// 		$scope.login = function(name){
	// 			userFactory.login(user, function(data){
	// 				$scope.user = data;
	// 				$location.url('/home');
	// 				return data;
	// 			})
	// 		}
	// 	}
	//
	// }
	// isThereAUser()
	//
	// $scope.logout = function(){
	// 	userFactory.logout()
	// }


})
