angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
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
    $scope.showDetails = function(index) {};
  }
]);
