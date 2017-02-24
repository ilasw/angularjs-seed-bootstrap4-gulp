(function () {
	'use strict';

	angular
		.module('myApp')
		.controller('profileController', profileController);

	// Dependencies
	profileController.$injects = ['$scope'];

	// Function
	function profileController($scope) {
		var vm = this;

		vm.location = 'Profile located';
		console.log('Profile loaded');
	}
})();