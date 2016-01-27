module SES{
    "use strict";
    
   var app = angular.module("session01", ["ngRoute", "ui.grid", "ui.bootstrap","ui.router", "ui.navbar"]);
   
   app.controller('NavigationController', function($scope) {

        $scope.tree = [{
            name: "States",
            link: "#",
            subtree: [{
            name: "state 1",
            link: "state1",
            subtree: [{name: "state 1",
            link: "state1"}]
            }, {
            name: "state 2",
            link: "state2"
            }]
        }, {
            name: "No states",
            link: "#",
            subtree: [{
            name: "no state connected",
            link: "#"
            }]
        }, {
            name: "divider",
            link: "#"

        }, {
            name: "State has not been set up",
            link: "#"
        }, {
            name: "divider",
            link: "#"
        }, {
            name: "Here again no state set up",
            link: "#"
        }];
        });
        
        app.run(["$rootScope", "$state", function ($rootScope, $state) {
    $rootScope.$state = $state; // state to be accessed from view
}]);
}