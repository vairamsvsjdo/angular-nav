'use strict';

myApp.controller('view1Ctrl', function($scope, $filter) {

	$scope.dropdownOpen = false;

	$scope.navlist = [
		{"name":"Home"},
		{"name":"About"},
		{"name":"Contact"}   
	];

});