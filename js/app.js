var app = angular.module('ymlp', [
	'ngRoute',
	'controllers'
]);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'login'
		})
		.when('/start', {
			templateUrl: 'partials/start.html',
			controller: 'start'
		})
		.when('/email/:send', {
			templateUrl: 'partials/email.html',
			controller: 'email'
		})
		.otherwise({
			redirectTo: '/start'
		});
	}]);