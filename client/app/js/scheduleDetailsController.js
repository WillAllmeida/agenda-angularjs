(function (app) {

    var scheduleDetailsController = function ($scope, $routeParams, scheduleService) {
        
        var id = $routeParams.id;
        scheduleService
            .getScheduleById(id)
            .then(response => {
                $scope.schedule = response.data;
            });
        
    };

    app.controller('scheduleDetailsController', scheduleDetailsController);

}(angular.module("schedule")))