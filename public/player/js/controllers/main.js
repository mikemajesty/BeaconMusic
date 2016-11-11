angular.module('todoController', [])

	.controller('mainController', ['$scope','$http', '$timeout', function($scope, $http, $timeout) {
		var audio = null;

		$scope.playlist = [];
		$scope.currentSong = -1;
		$scope.loading = true;
		$scope.audio = {
			progress: 0,
			duration: 0,
			currentTime: 0
		};

		$scope.update = function() {
			$http.get('/api/playlist').then(function(res) {
				$scope.playlist = res.data;

				if (audio === null || audio.ended) {
					if ($scope.currentSong < ($scope.playlist.length - 1)) {
						$scope.currentSong++;

						audio = new Audio($scope.playlist[$scope.currentSong].url);
						audio.play();
					}
				} else {
					$scope.audio.currentTime = parseInt(audio.currentTime / 60) +  ":" + parseInt(audio.currentTime % 60);
					$scope.audio.duration = parseInt(audio.duration / 60) +  ":" + parseInt(audio.duration % 60);

					$scope.audio.progress = (audio.currentTime / audio.duration) * 100;
				}

				$timeout($scope.update, 1000);
			});

		};

		$scope.paused = false;
		$scope.pauseOrPlay = function(){
			if (!$scope.paused) {
				$scope.paused = true;
	      audio.play();
				document.getElementById("aplay").className = "ion-pause";
	    } else {
	       audio.pause();
				 $scope.paused = false;
				 document.getElementById("aplay").className = "ion-play";
	    }
		};

		$scope.init = function() {
			$timeout($scope.update, 2000);
		};
		$scope.init();
	}]);
