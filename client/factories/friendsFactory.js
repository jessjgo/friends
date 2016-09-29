/*console.log('Friends Factory');*/

/***********TESTING TO SEE IF FACTORY CONNECTS TO CONTROLLERS************
friendsApp.factory('friendFactory', function() {
	var factory = {};
	factory.friends = [
		{firstname: 'John', lastname: 'John'}, 
		{firstname: 'Jane', lastname: 'Jane'}
	]
	return factory;
})*/

friendsApp.factory('friendsFactory', function($http) {
	var factory = {};
	// CREATE
	factory.create = function(newfriend, callback) {
		$http.post('/friends', newfriend).then(function(data) {
			console.log('*****data:', data);
			if(typeof(callback) == 'function') {
				callback(data.data.friend);
			} // end of if statement
		}) // end of function with data param
	} // end of create function
	factory.index = function(callback) {
		$http.get('/friends').then(function(data) {
			console.log('*****data:', data);
			callback(data.data.friends);
		})
	} // end of index function
	factory.update = function(updatefriend, callback) {
		console.log('*****update:', updatefriend);
		$http.put('/friends/' + updatefriend._id, updatefriend).then(function(data) {
			console.log('*****updated data:', data);
			callback(data.data.friend);
		})
	} // end of update function
	factory.delete = function(id, callback) {
		console.log('*****delete:', id);
		$http.delete('/friends/' + id).then(function(data) {
			console.log('delete???', data);
			callback(data.data.friend);
		})
	} // end of delete function
	factory.show = function(id, callback) {
		$http.get('/friends/' + id).then(function(data) {
			callback(data.data.friend);
		})
	} // end of show function
	return factory;
})