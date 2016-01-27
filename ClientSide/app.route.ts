module SES{
    "use strict";

    function routes($urlRouterProvider: ng.ui.IUrlRouterProvider, $stateProvider: ng.ui.IStateProvider){
        $urlRouterProvider.otherwise("/grid");
        $stateProvider
        .state("search", {
            url: "/search",
            templateUrl:  "/clientside/views/_search.html",
            controller: "SearchController",
            controllerAs: "vm"
        })
        .state("grid", {
            url: "/grid",
            templateUrl: "/clientside/views/_grid.html",
            controller: "GridController",
            controllerAs: "grid"
        })
        
    }

    routes.$inject = ["$urlRouterProvider", "$stateProvider"];

    angular.module("session01").config(routes);
}
