angular.module('controllers', [])

.controller('login', ['$scope', '$location', 'Authentication',
	function ($scope, $location, Authentication) {
		$scope.authenticate = function(){
			var username = $scope.username;
			var key = $scope.apiKey;

			$scope.usernameError = typeof(username) == 'undefined' || username == '';
			$scope.apiKeyError = typeof(key) == 'undefined' || key == '';

			$scope.hasError = $scope.usernameError || $scope.apiKeyError;
			
			if ($scope.hasError){
				return;	
			}
			
			if (Authentication.authenticate(username, key)){
				$location.path('/start');
			}
			else{
				$scope.usernameError = $scope.apiKeyError = $scope.hasError = true;
			}
		}
	}])

.controller('start', ['$scope', '$http',
	function ($scope, $http) {

	}])

.controller('email', ['$scope', '$http',
	function ($scope, $http) {

	}])

