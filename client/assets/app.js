var friendsApp = angular.module('friendsApp', ['ngRoute'])
// Routes to partial files NEW and EDIT pages. Create controllers for each and connect.
friendsApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/allfriends.html'
		})
		.when('/new', {
			templateUrl: 'partials/new.html'
		})
		.when('/edit/:id', {
			templateUrl: 'partials/edit.html'
		})
		.when('/show/:id', {
			templateUrl: 'partials/onefriend.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})