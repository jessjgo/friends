friendsApp.controller('onefriendController', function($scope, friendsFactory, $routeParams, $location) {
	friendsFactory.show($routeParams.id, function(friend) {
		$scope.friendInfo = friend;
		$scope.friendInfo.birthday = new Date(friend.birthday);
		$scope.friendInfo.created_at = new Date(friend.created_at);
		console.log('*****Friend info:', friend)
	});
	$scope.goHome = function() {
		$location.url('/');
	}
})