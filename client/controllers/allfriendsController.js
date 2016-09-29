friendsApp.controller('allfriendsController', function($scope, friendsFactory, $location, $route) {
	friendsFactory.index(function(friends) {
		$scope.friends = friends;
		console.log('*****List of friends:', $scope.friends);
	})
	$scope.showFriend = function(id) {
		console.log('*****Show friend ID:', id);
		$location.url('/show/' + id);
	}
	$scope.updateFriend = function(id) {
		console.log('*****Updating friend ID:', id);
		$location.url('/edit/' + id);
	}
	$scope.deleteFriend = function(id) {
		friendsFactory.delete(id, function() {
			console.log('*****location');
			$route.reload();
		})
	}
	$scope.createFriend = function() {
		$location.url('/new');
	}
})