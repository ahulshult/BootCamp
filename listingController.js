angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.name = "";
    $scope.code = "";
    $scope.text = ["345"];
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.addListing = function() {
    if ($scope.name !== "" && $scope.code !== ""){
      $scope.text.push($scope.name);
      $scope.text.push($scope.code);
      }
    }
    $scope.deleteListing = function(index) {}
  }
]);
