(function (app) {

    var scheduleController = function ($scope, scheduleService) {
        scheduleService
            .getSchedules()
            .then(response => {
                $scope.schedules = response.data;
            });

        $scope.createSchedule = function () {
            // Initializes a task object, being used to display the `scheduleCreate` form.
            $scope.task = {
                title: ""
            };
        };

        $scope.deleteSchedule = function (schedule) {
            scheduleService
                .deleteSchedule(schedule)
                .then(function() {
                    deleteScheduleById(schedule.ID);
                });

            var deleteScheduleById = function (id) {
                for (var i = 0; i < $scope.schedules.length; i++) {
                    if ($scope.schedules[i].ID == id) {
                        $scope.schedules.splice(i, 1);
                        break;
                    }
                }
            };
        };
    };

    app.controller('scheduleController', scheduleController);
 }(angular.module("schedule")))