var SES;
(function (SES) {
    (function (Service) {
        var PwnedService = (function () {
            function PwnedService($http) {
                this.$http = $http;
            }
            PwnedService.prototype.check = function (address) {
                return this.$http.get("https://haveibeenpwned.com/api/v2/breachedaccount/" + address);
            };
            PwnedService.$inject = ["$http"];
            return PwnedService;
        })();

        angular.module("session01").service("PwnedService", PwnedService);
    })(SES.Service || (SES.Service = {}));
    var Service = SES.Service;
})(SES || (SES = {}));
