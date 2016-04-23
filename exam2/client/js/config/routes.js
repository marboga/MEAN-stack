MyApp.config(function($routeProvider){


	$routeProvider


	.when('/', {
		templateUrl: './../views/home.html',
		controller: 'usersController'
	})
	.when('/new_question', {
		templateUrl: './../views/new_question.html',
		controller: 'questionsController'
	})
	.when('/question/:id', {
		templateUrl: './../views/answers.html', controller: 'answersController'
	})
	.when('/question/:id/new_answer', {
		templateUrl: './../views/new_answer.html', controller: 'answersController'
	})
	.otherwise('/')
})
