app.controller('postTicketController', 
  ["$scope", "$state", "Tickets", "postTicket", "$window", "userIdFactory", "$ionicPopup",
  function($scope, $state, Tickets, postTicket, $window, userIdFactory, $ionicPopup) {
  $scope.items = Tickets;
  $scope.postTicketClick = function(name, startDate, endDate, price, desc) {
    if(isNaN(price)) {
      var alertPopup = $ionicPopup.alert({
          title: 'Please put a number as price',
          template: 'Dollar sign will be added and is not necessary'
      });
    }
    else{
      postTicket.name = name;
      postTicket.startDate = startDate;
      postTicket.endDate = endDate;
      postTicket.price = price;
      postTicket.desc = desc;
      $scope.input = postTicket;
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
      $state.go('tabs.tickets');
    }
  };
}]);