/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

module SES.Filter{
    "use strict";
    
    export function asHtml($sce : ng.ISCEService){
        return (text : string) => {
            return $sce.trustAsHtml(text);
        }
    }
    
    angular.module("session01").filter("asHtml", asHtml);
    
    asHtml.$inject = ["$sce"];  
}