angular.module('app')
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('app', {
                url: '/',
                templateUrl: '../../js/app/template/app.html' // default view
            })
            .state('list', {
                url: '/list',
                controller: 'MusicListController',
                templateUrl: '../../js/app/template/music-list.html'
            })
            .state('new', {
                url: '/new',
                controller: 'NewMusicController',
                templateUrl: '../../js/app/template/new-music.html'
            });
    }])
    .run(function () {

    });
