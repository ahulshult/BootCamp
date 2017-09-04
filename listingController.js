angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.searchText = "d";
    //console.log($scope.searchText);
    $scope.sortType = "code";
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      var arr = ['', '', '', '', '', ''];
        var myForm = document.forms[0];
        for(i=0; i<5; i++){
          arr[i] = myForm.elements[i].value;
          console.log(arr);
        }
      if (arr[0] !== "" && arr[1] !== ""){
        $scope.listings.push({'code': arr[0], 'name':arr[1], 'coordinates': {'latitude': arr[2], 'longitude': arr[3]}, 'address': arr[4]});
        console.log($scope.listings);
      }
      else{
        $scope.searchItem = "";
      }
    };
    $scope.deleteListing = function(index) {};
    $scope.showDetails = function(index) {};
  }
]);
