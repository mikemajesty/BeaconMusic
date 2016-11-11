app.controller("SongCtrl", ["$scope", "$ionicSideMenuDelegate", function($scope, $ionicSideMenuDelegate) {

  $scope.songs = [
    {
      name: "Wish you were here",
      artist: "Pink Floyd",
      url: "",
      image: "https://i.scdn.co/image/4e9c7731373ba52446f4de7f5d0af6c51007f6fc"
    },
    {
      name: "Wish you were here",
      artist: "Pink Floyd",
      url: "",
      image: "https://i.scdn.co/image/4e9c7731373ba52446f4de7f5d0af6c51007f6fc"
    },
    {
      name: "Wish you were here",
      artist: "Pink Floyd",
      url: "",
      image: "https://i.scdn.co/image/4e9c7731373ba52446f4de7f5d0af6c51007f6fc"
    }
  ];
  //Can swipe any song right to reveal delete button
  $scope.listCanSwipe = true;
  $scope.addSong = function(song) {
    console.log(song);
    //$scope.songs.$add(song);
  };
  //Show right side menu
  $scope.rightMenu = function() {
    $ionicSideMenuDelegate.toggleRight();
  };
}]);
