app.controller('viewBooksController', 
  ["$scope", "$state", "$stateParams", "$timeout",
  function($scope, $state, $stateParams, $timeout) {
  $timeout(function() {
      $scope.nameId = $stateParams.name;
      $scope.startDateId = $stateParams.startDate;
      $scope.endDateId = $stateParams.endDate;
      $scope.priceId = $stateParams.price;
      $scope.descId = $stateParams.desc;
      $scope.ID = $stateParams.ID;
      clickedID = $stateParams.ID;
  }, 0);
  $scope.facebookMessage = function(){
    var tempFacebook = 'https://facebook.com/' + clickedID;
    inAppBrowserRef = window.open(tempFacebook);
  };
}]);