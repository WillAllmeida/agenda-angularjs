﻿using System.Web;
using System.Web.Optimization;

namespace agenda_angularjs
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
            // dependencias do agular
            bundles.Add(new ScriptBundle("~/bundles/angularDependencies").Include(
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-route.js"));

            // dependecias do App
            bundles.Add(new ScriptBundle("~/bundles/angularApp").Include(
                        "~/App/js/index.js", 
                        "~/App/js/scheduleController.js",
                        "~/App/js/homeController.js",
                        "~/App/js/scheduleDetailsController.js",
                        "~/App/js/scheduleService.js"
                        ));

            
        }
    }
}
