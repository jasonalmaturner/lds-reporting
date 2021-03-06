angular.module('lds-report')
	.service('userService', userService);

//ALL need testing

function userService($http){
	this.getOne = function(id){
		return $http({
			method: 'GET',
			url: '/api/users/' + id
		})
	}
	this.getAll = function(){
		return $http({
			method: 'GET',
			url: '/api/users'
		})
	}

	this.create = function(){
		return $http({
			method: 'POST',
			url: '/api/users'
		})
	}
	this.edit = function(id, change){
		return $http({
			method: 'PUT',
			url: '/api/users/' + id,
			data: change
		})
	}
	this.delete = function(id){
		return $http({
			method: 'DELETE',
			url: '/api/users/' + id
		})
	}
}