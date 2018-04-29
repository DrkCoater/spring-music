angular.module('app.todo', ['ui.router'])
    .config([ '$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('todo', {
                url: '/todo',
                templateUrl: 'views/main.html',
                controller: function () {
                    console.log("ah ha, in controller.");
                }
            }
        );
    }
]);
