app.controller('postHousingController', 
    ["$scope", "$state", "Housing", "postHouse", "$window", "userIdFactory", "$ionicPopup", "$filter",
function($scope, $state, Housing, postHouse, $window, userIdFactory, $ionicPopup, $filter) {
  $scope.items = Housing;
  $scope.phoneNumber = null;
  $scope.postHousingClick = function(name, startDate, endDate, price, desc, phoneNumber) {
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
            var date1 = $filter('date')(new Date(startDate), 'MM/dd/yyyy');
            var startDate = date1.toString();
            var date2 = $filter('date')(new Date(endDate), 'MM/dd/yyyy');
            var endDate = date2.toString();
            postHouse.name = name;
            postHouse.startDate = startDate;
            postHouse.endDate = endDate;
            postHouse.price = price;
            postHouse.desc = desc;
            $scope.input = postHouse;
            $scope.phoneNumber = phoneNumber;
            $scope.items.$add({
               "title": $scope.input.name,
                "startDate": $scope.input.startDate,
                "endDate": $scope.input.endDate,
                "price": $scope.input.price,
                "desc": $scope.input.desc,
                "ID": userIdFactory.UserID.uid.substr(9),
                "username": userIdFactory.UserID.facebook.displayName,
                "facebookID": userIdFactory.UserID.facebook.id,
                "phoneNumber": $scope.phoneNumber
            });
            $state.go('tabs.housing');
        }
    }
  };
}]);