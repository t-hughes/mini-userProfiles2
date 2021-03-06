angular.module('userProfiles').service('mainService', function($http) {
	
// var data =
// 	[
// 	    {
// 	        "id": 1,
// 	        "first_name": "george",
// 	        "last_name": "bluth",
// 	        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
// 	    },
// 	    {
// 	        "id": 2,
// 	        "first_name": "lucille",
// 	        "last_name": "bluth",
// 	        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
// 	    },
// 	    {
// 	        "id": 3,
// 	        "first_name": "oscar",
// 	        "last_name": "bluth",
// 	        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
// 	    }
// 	  ];
//
// 		this.getUsers = function(){
// 			return data;
// 		};

	this.getUsers = function() {
    return $http({
			method: 'GET',
			url: 'http://reqres.in/api/users?page=1'
		});
  };
});


//The METHOD part tells the API we're hitting what kind of request we are making. There are a lot of different types of requests. Here we are getting data.
