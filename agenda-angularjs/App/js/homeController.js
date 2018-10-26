(function (app) {
   
    var homeController = function ($scope, $http) {
        $http.get(window.BASE_URL+'/api/Schedules')
            .then(response => {
                $scope.schedules = response.data;
            }).catch(err => {
                console.log(err);
            });
    };

    app.controller('homeController', homeController);

}(angular.module("schedule")))