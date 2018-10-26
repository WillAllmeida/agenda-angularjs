(function (app) {

    var scheduleController = function ($scope, $http) {
        $http.get(window.BASE_URL+'/api/Schedules')
            .then(response => {
                $scope.schedules = response.data;
            });
    };

    app.controller('scheduleController', scheduleController);

}(angular.module("schedule")))