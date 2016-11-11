app.controller("SongCtrl", ["$scope", "$ionicSideMenuDelegate","$http", function($scope, $ionicSideMenuDelegate, $http) {
  $http.get("/api/song")
    .then(function(response) {
        $scope.songs = response.data;
    });

  $scope.listCanSwipe = true;

  $scope.addSong = function(song) {
    console.log(song);
    $http.post("/api/playlist", song).then(successCallback, errorCallback);
  };
  //Show right side menu
  $scope.rightMenu = function() {
    $ionicSideMenuDelegate.toggleRight();
  };
}]);
