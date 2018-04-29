angular.module('app')
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/list");
        $stateProvider
            .state('list', {
                url: '/list',
                controller: 'MusicListController',
                templateUrl: '../../js/app/template/music-list.html'
            })
            .state('new', {
                url: '/new',
                controller: 'NewMusicController',
                templateUrl: '../../js/app/template/new-music.html'
            })
            .state('edit', {
                url: '/edit/:id',
                controller: 'NewMusicController',
                templateUrl: '../../js/app/template/new-music.html'
            });
    }])
    .run(function () {

    });
