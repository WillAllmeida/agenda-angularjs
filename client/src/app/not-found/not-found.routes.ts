import { App } from './components/app/app.component';

export const routing = $routeProvider => {
    $routeProvider
        .when("*",
            {
                templateUrl: "/App/client/Home/index.html",
                controller: "homeController"
            })
        .when("/schedule/create",
            {
                templateUrl: "/App/client/Schedule/scheduleCreate.html",
                controller: "scheduleCreateController"
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
