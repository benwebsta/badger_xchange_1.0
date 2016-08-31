app.controller('viewHousingController', 
  ["$scope", "$state", "$stateParams", "$timeout", 
  function($scope, $state, $stateParams, $timeout ) {
    $timeout(function() {
        $scope.nameId = $stateParams.name;
        $scope.startDateId = $stateParams.startDate;
        $scope.endDateId = $stateParams.endDate;
        $scope.priceId = $stateParams.price;
        $scope.descId = $stateParams.desc;
  	    $scope.ID = $stateParams.ID;
        $scope.phoneNumber = $stateParams.phoneNumber;
  	    clickedID = $stateParams.ID;
  }, 0);

  $scope.message = function(){
      var tempFacebook = 'https://facebook.com/' + clickedID;
      inAppBrowserRef = window.open(tempFacebook, '_system', 'location=yes'); 
  };
}]);