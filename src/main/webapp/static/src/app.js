angular.module('app', [
		'ui.router',
		'templates-app'
	])
	.run(['$state', function ($state) {
		console.log('in run...');
	}]);
	