app.controller('postHousingController', 
    ["$scope", "$state", "Housing", "postHouse", "$window", "userIdFactory", "$ionicPopup",
function($scope, $state, Housing, postHouse, $window, userIdFactory, $ionicPopup) {
  $scope.items = Housing;
  $scope.postHousingClick = function(name, startDate, endDate, price, desc) {
    if(isNaN(price)) {
        var alertPopup = $ionicPopup.alert({
            title: 'Please put a number as price',
            template: 'Dollar sign will be added and is not necessary'
        });
    }
    else{
        postHouse.name = name;
        postHouse.startDate = startDate;
        postHouse.endDate = endDate;
        postHouse.price = price;
        postHouse.desc = desc;
        $scope.input = postHouse;
        $scope.items.$add({
           "title": $scope.input.name,
            "startDate": $scope.input.startDate,
            "endDate": $scope.input.endDate,
            "price": $scope.input.price,
            "desc": $scope.input.desc,
            "ID": userIdFactory.UserID.uid.substr(9),
            "username": userIdFactory.UserID.facebook.displayName,
            "facebookID": userIdFactory.UserID.facebook.id
        });
        $state.go('tabs.housing');
    }   
  };
}]);