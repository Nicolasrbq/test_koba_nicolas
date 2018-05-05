angular.module('main', ['ui.router'])

.config(function($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/HomeView.html',
            controller: 'HomeController as HomeView',
        });
});