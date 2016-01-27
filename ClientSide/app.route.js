var SES;
(function (SES) {
    "use strict";

    function routes($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise("/grid");
        $stateProvider.state("search", {
            url: "/search",
            templateUrl: "/clientside/views/_search.html",
            controller: "SearchController",
            controllerAs: "vm"
        }).state("grid", {
            url: "/grid",
            templateUrl: "/clientside/views/_grid.html",
            controller: "GridController",
            controllerAs: "grid"
        });
    }

    routes.$inject = ["$urlRouterProvider", "$stateProvider"];

    angular.module("session01").config(routes);
})(SES || (SES = {}));
