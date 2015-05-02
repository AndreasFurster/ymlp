<?php {

	// All languages :
	// https://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx

	$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

	$supportedLanguages = array(
		'nl'
	);

	// Set default
	if (!in_array($lang, $supportedLanguages)) {
		$lang = 'nl';
	}} ?>

<!doctype html>
<html ng-app="ymlp">
	<head>
		<title>Ylmp</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="//bootswatch.com/cosmo/bootstrap.min.css">
		<link rel="stylesheet/less" type="text/css" href="//bootswatch.com/cosmo/variables.less" />
		<link rel="stylesheet/less" type="text/css" href="css/style.css">
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css">
		
		<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.5.0/less.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-cookies.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-route.min.js"></script>
		<script src="js/app.js"></script>
		<script src="js/controllers.js"></script>
		<script src="js/modules/auto-active.js"></script>
	</head>
	<body>
		<aside class="bg-primary">
			<h1>Ymlp</h1>
			<nav>
				<ul auto-active>
					<li><a href="#/start"><i class="fa fa-home"></i><span>Start</span></a></li>
					<li><a href="#/stats"><i class="fa fa-area-chart"></i><span>Stats</span></a></li>
					<li><a href="#/email"><i class="fa fa-envelope"></i><span>Email</span></a></li>
					<li><a href="#/settings"><i class="fa fa-cogs"></i><span>Settings</span></a></li>
				</ul>
			</nav>
		</aside>
		<main ng-view></main>
	</body>
</html>