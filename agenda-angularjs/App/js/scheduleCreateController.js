(function (app) {

    var scheduleCreateController = function ($scope) {
        $scope.shouldDisplay = function () {
            return !!$scope.task; // $scope.task? true: false;
        }

        $scope.send = function () {
            console.log("Send click handler");
        }

        $scope.cancel = function () {
            console.log('Cancel click handler');
        }

        // Loads a task from the parent scope.
        $scope.task = angular.copy($scope.task);
    };

    app.controller('scheduleCreateController', scheduleCreateController);

    }(angular.module("schedule")))