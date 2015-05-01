<?php

// All languages :
// https://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx

$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

$supportedLanguages = array(
	'nl'
);

// Set default
if (!in_array($lang, $supportedLanguages)) {
	$lang = 'nl';
}

?>

<!doctype html>
<html ng-app="ymlp">
	<head>
		<title>Ylmp</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="//bootswatch.com/superhero/bootstrap.min.css">
		<link rel="stylesheet" href="/css/style.css">
		<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-route.min.js"></script>
		<script src="/js/app.js"></script>
		<script src="/js/controllers.js"></script>
	</head>
	<body>
		<div ng-view></div>
	</body>
</html>