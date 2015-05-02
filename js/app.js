angular.module('ymlp', [
	'ngRoute',
	'autoActive',
	'controllers'
])

.config(['$routeProvider',
	function($routeProvider) {

		$routeProvider.simpleRoute = function (name) {
			return this.when('/' + name, {
				templateUrl: 'partials/' + name + '.html'
				//controller: name
			})
		}

		$routeProvider
			.simpleRoute('login')
			.simpleRoute('start')
			.simpleRoute('stats')
			.simpleRoute('email')
			.simpleRoute('settings')
			.when('/', {
				templateUrl: 'partials/login.html',
				controller: 'login'
			})
			.otherwise('/start');
	}
])


.run(['$rootScope', '$location', 'Authentication', function ($rootScope, $location, Authentication) {
    $rootScope.$on('$routeChangeStart', function (event) {
    	if($location.path() == '/login')
    		return;

        if (!Authentication.isAuthenticated()) {
            event.preventDefault();
            $location.path('/login');
        }
    });
}])

.factory('Authentication', function(){
	var user;

	return{
		setUser : function(aUser){
			user = aUser;
		},
		isAuthenticated : function(){
			if (window.sessionStorage.getItem('token') == null || window.sessionStorage.getItem('username') == null)
				return false;

			// Do ping to API

			return true;
		}
	}
})

