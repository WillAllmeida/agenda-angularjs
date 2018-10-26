(function (app) {

    var scheduleService = function ($http, scheduleApiUrl) {

        var getSchedules = function () {
            return $http.get(scheduleApiUrl);
        };

        var getScheduleById = function (id) {
            return $http.get(scheduleApiUrl + id);
        };

        var updateSchedule = function (schedule) {
            return $http.put(scheduleApiUrl + schedule.ID, schedule);
        };

        var createSchedule = function (schedule) {
            return $http.post(scheduleApiUrl, schedule);
        };

        var deleteSchedule = function (schedule) {
            return $http.delete(scheduleApiUrl + schedule.ID);
        };

        return {
            getSchedules: getSchedules,
            getScheduleById: getScheduleById,
            updateSchedule: updateSchedule,
            createSchedule: createSchedule,
            deleteSchedule: deleteSchedule
        };
    };

    app.factory("scheduleService", scheduleService);

}(angular.module("schedule")))