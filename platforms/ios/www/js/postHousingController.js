app.controller('postHousingController', 
    ["$scope", "$state", "Housing", "postHouse", "$window", "userIdFactory", "$ionicPopup",
function($scope, $state, Housing, postHouse, $window, userIdFactory, $ionicPopup) {
  $scope.items = Housing;
  $scope.postHousingClick = function(name, startDate, endDate, price, desc) {
    if(isNaN(price)) {
        var alertPopup = $ionicPopup.alert({
            title: 'Error processing form.',
            template: 'Please make sure your price is a number. No special characters; numbers only.'
        });
    }
    else{
        if(name == null || startDate == null || endDate == null || price == null || desc == null){
            $scope.formError = true;
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
    }
  };
}]);