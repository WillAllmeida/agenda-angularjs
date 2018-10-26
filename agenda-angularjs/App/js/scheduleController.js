(function (app) {

    var scheduleController = function ($scope, scheduleService) {
        scheduleService
            .getSchedules()
            .then(response => {
                $scope.schedules = response.data;
            });
    };

    app.controller('scheduleController', scheduleController);

}(angular.module("schedule")))