angular.module('app')
    .controller('MusicListController', ['$scope', 'MusicService', function ($scope, MusicService) {
        $scope.songs = MusicService.list();
        $scope.refresh = function () {
            MusicService.list();
        };
    }]);
