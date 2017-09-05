angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    //$scope.detailedInfo =
    $scope.name = undefined;
    $scope.code = "Please select a row from the table to view more information";
    $scope.coordinates = undefined;
    $scope.address = undefined;
    $scope.searchText = "";
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
        }
      if (arr[0] !== "" && arr[1] !== ""){
        $scope.listings.push({'code': arr[0], 'name':arr[1], 'coordinates': {'latitude': arr[2], 'longitude': arr[3]}, 'address': arr[4]});
      }
      else{
        alert( "Please make sure 'Code' and 'Name' fields are complete." );
      }
      myForm.reset()
    };
    $scope.deleteListing = function(code) {
      var bool = -1;
		  var getArr = eval( $scope.listings );
		  for( var i = 0; i < getArr.length; i++ ) {
           if( getArr[i].code === code ) {
				         bool = i;
				         break;
			           }
  		}
  		if( bool === -1 ) {
  			alert( "Cannot Delete" );
  		}
  		$scope.listings.splice( bool, 1 );
      };
    $scope.showDetails = function(entry) {
      var str = '';
      str = "Code: " + entry.code;
      $scope.code = str;
      str = "Name: "+ entry.name;
      $scope.name = str;
      if (entry.coordinates !== undefined){
        str = "Coordinates: ";
        str = str + "Latitude: " + entry.coordinates.latitude + "\n";
        str = str + "Longitude: " + entry.coordinates.longitude + "\n";

      } else{
        str = 'Coordinates: Undefined';
      }
      $scope.coordinates = str;
      if (entry.address !== undefined){
        str = "Address: "+ entry.address + "\n";
      } else {
        str = 'Address: Undefined';
      }
      $scope.address = str;
      $scope.detailedInfo = '';
    };
  }
]);
