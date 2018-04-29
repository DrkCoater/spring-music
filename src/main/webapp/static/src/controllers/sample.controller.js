angular.module('app.sample')
    .controller('SampleController', ['$scope', '$state',
        function ($scope, $state) {
            console.log('in controller');
        }
    ]);