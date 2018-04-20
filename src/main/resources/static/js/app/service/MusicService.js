angular.module('app')
    .factory('MusicService', ['$resource', function($resource) {
        return $resource('/api/songs', {},
            {
                list: {
                    method: 'GET',
                    isArray: true
                },
                create: {
                    method: 'POST'
                }
            }
        );
    }]);
