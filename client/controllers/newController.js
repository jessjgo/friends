/*console.log('NEW Controller')*/



friendsApp.controller('newController', function($scope, friendsFactory, $location) {
	/*$scope.friends = ['John', 'Jane', 'Anne', 'Tim'];*/
	/*$scope.friends = friendsFactory.friends*/
	$scope.createFriend = function() {
	friendsFactory.create($scope.friendInfo, function() {
		$scope.friendInfo = {};
/*		console.log($scope.friendInfo);*/
		$location.url('/');
		});
	}
})