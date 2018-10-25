'use strict';

angular.module('agendaAngular.Home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Home', {
    templateUrl: 'Home/Home.html',
      controller: 'HomeController'
  });
}])

.controller('HomeController', [function($scope) {
  $scope.title = "coisas acontecerão";
}]);