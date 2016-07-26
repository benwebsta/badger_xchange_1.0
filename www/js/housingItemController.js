app.controller('housingItemController', 
	["$scope", "$state", "Housing", "postHouse", "$window", "$firebaseArray", "$timeout", "$ionicPopup", "userIdFactory",
 function($scope, $state, Housing, postHouse, $window, $firebaseArray, $timeout, $ionicPopup, userIdFactory) {
  $scope.items = Housing;
  $scope.itemInfo = function(index) {
    var messagesRef = new Firebase("https://badger-xchange.firebaseio.com/housing");
    $scope.messages = $firebaseArray(messagesRef);
    var id = $scope.items[index].$id;
    var item;
    $scope.messages.$loaded()
    .then(function() {
      item = $scope.messages.$getRecord(id);
      $state.go('tabs.viewHousing', {'name': item.title, 'startDate': item.startDate, 
                              'endDate': item.endDate, 'price': item.price, 'desc': item.desc, 'ID':item.ID});
    })
    .catch(function(err) {
      console.error(err);
    });
  }
  $scope.facebooklogout = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Logout',
     template: 'Are you sure you want to log out?'
   });
   confirmPopup.then(function(res) {
     if(res) {
        ref.unauth();
        $scope.user = null;
        userIdFactory.UserID = null;
        $state.go('login');
     }
   });
  }
  $scope.priceCap = 0;
  $scope.$watch('priceCap',function(val){
    console.log("val: " + val);
    console.log("priceCap Changed");
    $scope.priceCap = parseInt(val);  
  });
  $scope.priceFilter = function(item) {
    //console.log("priceCap: " + $scope.priceCap);
    //console.log("item.price: " + item.price);
    //console.log(item.price > $scope.priceCap);
    return (item.price > $scope.priceCap);
  }
}]);