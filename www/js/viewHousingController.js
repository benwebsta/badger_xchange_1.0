app.controller('viewHousingController', 
  ["$scope", "$state", "$stateParams", "$timeout", "$cordovaSms", 
  function($scope, $state, $stateParams, $timeout, $cordovaSms) {
    $scope.sms={
      number: 7146421889,
      message: "suck it nerd"
    };
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


  // var options = {
  //   replaceLineBreaks: false, // true to replace \n by a new line, false by default
  //   android: {
  //     intent: 'INTENT'  // send SMS with the default SMS app
  //   //intent: ''        // send SMS without open any other app
  //   }
  // }
    // $scope.sms={
    //   number: 7146421889,
    //   message: "suck it nerd"
    // };
  //   var number = $scope.sms.number;
  //   var message = $scope.sms.message;
  //   console.log(number);
  //   console.log(message);
    
  //   document.addEventListener("deviceready", function () {
  //     console.log("test");
  //       $cordovaSms
  //           .send(number, message, options)
  //             .then(function() {
  //                 // Success! SMS was sent
  //                 console.log('Success');
  //             }, function(error) {
  //             // An error occurred
  //                 console.log(error);
  //           });//then
  //     });//sendSms

  $scope.message = function($cordovaSms){
    console.log("in click");
    if($scope.phoneNumber != 'No phone number provided.'){
      console.log("in text part");
      document.addEventListener("deviceready", init, false);
      function init() {
        document.querySelector("#sendMessage").addEventListener("touchend", function() {
          console.log($scope.sms.number);
          console.log($scope.sms.message);

          var number = $scope.sms.number;
          var message = $scope.sms.message;
          if(number === '' || message === '') return;

          var msg = {
              phoneNumber:number,
              textMessage:message
          };

      sms.sendMessage(msg, function(message) {
          console.log("success: " + message);
          navigator.notification.alert(
              'Message to ' + number + ' has been sent.',
              null,
              'Message Sent',
              'Done'
          );

      }, function(error) {
          console.log("error: " + error.code + " " + error.message);
          navigator.notification.alert(
              'Sorry, message not sent: ' + error.message,
              null,
              'Error',
              'Done'
          );
      });

        }, false);
      }


    }
    else{
      console.log($scope.phoneNumber);
      console.log(clickedID);
      var tempFacebook = 'https://facebook.com/' + clickedID;
      inAppBrowserRef = window.open(tempFacebook, '_system', 'location=yes');
    } 
  };
}]);