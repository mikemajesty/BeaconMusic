angular.module('todoController', [])

	.controller('mainController', ['$scope','$http', function($scope, $http) {
		$scope.playlist = [
			{
				name: "Astronomy Domine",
				artist: "Pink Floyd",
				url: "/mp3/101-pink_floyd-astronomy_domine.mp3",
				image: "https://upload.wikimedia.org/wikipedia/pt/e/e1/Echoes_best_pink_floyd.jpeg"
			},
		];

		$scope.currentSong = -1;
		$scope.audio = null;
		$scope.loading = true;

		$scope.init = function() {
			console.log("init");
			if ($scope.currentSong < ($scope.playlist.length - 1)) {
				$scope.currentSong++;

				$scope.audio = new Audio($scope.playlist[$scope.currentSong].url);
				$scope.audio.play();
			}
		};
		$scope.init();
	}]);