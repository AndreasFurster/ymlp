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

    	var authenticated = Authentication.isAuthenticated();

    	if (authenticated && $location.path() == '/login') {
    		event.preventDefault();
            $location.path('/start');
    	}

        if (!authenticated) {
            event.preventDefault();
            $location.path('/login');
        }
    });

    $rootScope.$on('$routeChangeSuccess', function (event) {
    	
    });
}])

.factory('Authentication', 
	function($http){
		return {
			authenticate : function(username, key){
				if (this.ping(username, key)) {
					window.sessionStorage.setItem("username", username);
					window.sessionStorage.setItem("apiKey", key);

					return true;
				}
			},
			isAuthenticated : function(){
				if (window.sessionStorage.getItem('username') == null || window.sessionStorage.getItem('apiKey') == null)
					return false;

				return this.ping(window.sessionStorage.getItem('username'), window.sessionStorage.getItem('apiKey'));
			},
			ping : function(username, key){
				$http.get('inc/cors-proxy.php', {
					params : {
						csurl : 'https://www.ymlp.com/api/Ping',
						username : username,
						key : key,
						output : 'json'
					}
				})
				.success(function(data){
					console.log(data);
				});

				return username == key;
			}
		}
	}
)

