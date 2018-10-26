(function () {
    
    var app = angular.module("schedule", ["ngRoute"]);
    var config = function ($routeProvider) {
        $routeProvider
            .when("/",
            {
                templateUrl: "/App/client/Home/index.html",
                controller: "homeController"
            })
            .when("/schedule/details/:id",
            {
                templateUrl: "/App/client/Schedule/scheduleDetails.html",
                controller: "scheduleDetailsController"
            })
            .when("/schedule",
            {
                templateUrl: "/App/client/Schedule/index.html",
                controller: "scheduleController"
            })
            
            .otherwise({ redirecTo: "/" });
    };
    app.config(config);

    app.constant("scheduleApiUrl", "/api/Schedules/");

}());