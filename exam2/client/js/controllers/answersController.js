console.log('in answers contrller');

MyApp.controller('answersController', function($scope, answerFactory, userFactory, questionFactory, $location, $routeParams){
	$scope.user = {};
	$scope.question = {}
	$scope.questions = {}
	$scope.answers = $scope.question._answers
	$scope.messages = ""
	var question = answerFactory.question;

	


	function getQuestion(){
		var questID = $routeParams.id;
		answerFactory.index(questID, function(data){
			$scope.question = data[0];
			$scope.answers = data[0]._answers
		})
	}
	getQuestion()


	function getUser(){
		userFactory.index(function(data){
			if(data){
				$scope.user = data;
			}
			console.log("scope user", userFactory.user)
		})
	}
	getUser()

	$scope.logout = function(){
		userFactory.logout()
	}

	$scope.addAnswer = function(new_answer, id){
		$routeParams
		if(new_answer === undefined){
			$location.url('/question/'+$scope.question._id+'/new_answer')
			var message = "Your answer must be at least 5 characters in length. "
			$scope.messages += message
			console.log($scope.messages)
		}
		if(new_answer.text.length < 5){
			$location.url('/question/'+$scope.question._id+'/new_answer')
			var message = "Your answer must be at least 5 characters long."
			$scope.messages += message
			console.log($scope.messages)
		}
		var currID = $scope.user._id
		console.log(currID)
		$scope.new_answer._user = currID
		$scope.new_answer._question = $routeParams.id;
		console.log($scope.new_answer, "HERE IS ANSWER GOING IN - does it have text details question user????")
		var questID = $scope.question._id;
		answerFactory.create($scope.new_answer, function($scope, answerFactory){
			console.log('returned to clientController')
			$scope.new_answer = {};
			$location.url('/question/'+ questID)
			$scope.messages = "You added a new answer"
		})
	}

	$scope.addLike = function(answer){
		console.log('attempting add like', answer)
		answerFactory.update(answer, function(answer, answerFactory){
			getQuestion();
		})
	}
})
