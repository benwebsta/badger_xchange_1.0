app.controller('postBookController', 
  ["$scope", "$state", "Books", "postBook", "$window", "userIdFactory", "$ionicPopup",
  function($scope, $state, Books, postBook, $window, userIdFactory, $ionicPopup) {
  $scope.items = Books;
  $scope.postBookClick = function(name, startDate, endDate, price, desc) {
    if(isNaN(price)) {
      var alertPopup = $ionicPopup.alert({
          title: 'Please put a number as price',
          template: 'Dollar sign will be added and is not necessary'
      });
    }
    else{
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
  };
}]);