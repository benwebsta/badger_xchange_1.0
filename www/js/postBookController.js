app.controller('postBookController', 
  ["$scope", "$state", "Books", "postBook", "$window", "userIdFactory", "$ionicPopup", "$filter",
  function($scope, $state, Books, postBook, $window, userIdFactory, $ionicPopup, $filter) {
  $scope.items = Books;
  $scope.postBookClick = function(name, startDate, endDate, price, desc) {
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
        postBook.name = name;
        postBook.startDate = startDate;
        postBook.endDate = endDate;
        postBook.price = price;
        postBook.desc = desc;
        $scope.input = postBook;
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
        $state.go('tabs.books');
      }
    }
  };
}]);