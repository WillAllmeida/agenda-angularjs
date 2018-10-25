 angular.module('agendaAngular', [
    'agendaAngular.Home'
]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({ redirectTo: '/Home' });
    }]);