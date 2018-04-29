angular.module('app.sample', ['ui.router'])
    .config([ '$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('sample', {
                url: '/home',
                templateUrl: 'views/main.html',
                controller: function () {
                    console.log("ah ha, in controller.");
                }
            }
        );
    }
]);
