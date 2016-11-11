var app = angular.module('MusicApp', ['ionic','angucomplete-alt']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/songs');

  $stateProvider.state('home', {
    url: '/songs',
    templateUrl: '/mobile/partials/song-list.html',
    controller: 'SongCtrl'
  });
});
