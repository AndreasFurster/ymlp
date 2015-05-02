angular.module('controllers', [])

.controller('login', ['$scope', '$http',
	function ($scope, $http) {
		$scope.authenticate = function(){
			console.log($scope);

			var username = $scope.username;
			var key = $scope.apiKey;

			$scope.usernameError = typeof(username) == 'undefined' || username == '';
			$scope.apiKeyError = typeof(key) == 'undefined' || key == '';

			$scope.hasError = $scope.usernameError || $scope.apiKeyError;
			
			if ($scope.hasError){
				return;	
			}

			// Do ping to the API to check

			console.log($scope)
		}
	}])

.controller('start', ['$scope', '$http',
	function ($scope, $http) {

	}])

.controller('email', ['$scope', '$http',
	function ($scope, $http) {

	}])

