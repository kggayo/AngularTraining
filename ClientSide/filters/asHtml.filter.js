/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
var SES;
(function (SES) {
    (function (Filter) {
        "use strict";

        function asHtml($sce) {
            return function (text) {
                return $sce.trustAsHtml(text);
            };
        }
        Filter.asHtml = asHtml;

        angular.module("session01").filter("asHtml", asHtml);

        asHtml.$inject = ["$sce"];
    })(SES.Filter || (SES.Filter = {}));
    var Filter = SES.Filter;
})(SES || (SES = {}));
