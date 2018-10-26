(function (app) {

    var scheduleDetailsController = function ($scope, $http, $routeParams) {
        
        var id = $routeParams.id;
        $http.get(window.BASE_URL +'/api/Schedules/'+id)
            .then(response => {
                console.log('executei aqui');
                $scope.sch = response.data;
            });
        
    };

    app.controller('scheduleDetailsController', scheduleDetailsController);

}(angular.module("schedule")))