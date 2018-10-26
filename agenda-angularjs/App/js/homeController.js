(function (app) {
   
    var homeController = function ($scope, scheduleService) {
        scheduleService 
            .getSchedules()
            .then(response => {
                $scope.schedules = response.data;
            });
    };

    app.controller('homeController', homeController);

}(angular.module("schedule")))