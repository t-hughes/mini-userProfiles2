///Old controller///
// angular.module('userProfiles').controller('MainController', function($scope, mainService) {
//   $scope.getUsers = function() {
//     $scope.users = mainService.getUsers();
//   }
//
//   $scope.getUsers();
// });

angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
    mainService.getUsers().then(function(response) {
      $scope.users = response.data.data;
    });
  };
  $scope.getUsers();
});

//Here we are calling the mainService.getUsers function, and saying that once we finish that function, THEN define $scope.users.
//The response is a giant JSON object that contains a lot of information we don't necessarily need right now. That's why $scope.users is equal to response.data.data. Data is a child of response, and it has a child named data. The second child named data is where our user profile information lives.
