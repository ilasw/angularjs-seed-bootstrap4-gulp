(function () {
	'use strict';

	angular
		.module('myApp')
		.controller('homeController', homeController);

	// Dependencies
	homeController.$injects = ['$scope'];

	// Function
	function homeController($scope) {
		var vm = this;

		vm.location = 'Home located';
		console.log('Home loaded');
	}
})();