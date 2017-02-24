(function () {
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('myApp', ['ngRoute'])

		.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
			// use the HTML5 History API
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false 
			});

			$routeProvider
				.when('/', {
					templateUrl: 'views/home.html'
				})
				.when('/profile', {
					templateUrl: 'views/profile.html'
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);

})();