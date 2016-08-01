app.controller("loginController", 
  ["$scope", "$state", "$firebaseAuth", "$location", "$cordovaOauth", "Auth", "userIdFactory",
  function($scope, $state, $firebaseAuth, $location, $cordovaOauth, Auth, userIdFactory) {
    $scope.changeState=function(theState){
      $state.go(theState);
    }
    $scope.loginFacebook = function() {
      Auth.$authWithOAuthPopup('facebook').then(function(authData) {
        userIdFactory.UserID = authData;
        $state.go('tabs.housing');
        }).catch(function(error) {
          if (error.code === 'TRANSPORT_UNAVAILABLE') {
            console.log("transport unavail");
            console.log(error)
            Auth.$authWithOAuthPopup('facebook').then(function(authData) {
              $state.go('tabs.housing');
            });
          }
          else 
          {
            console.log(error);
          }
      });
    };
}]);