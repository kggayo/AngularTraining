var SES;
(function (SES) {
    (function (Service) {
        var ProductService = (function () {
            function ProductService($http) {
                this.$http = $http;
            }
            ProductService.prototype.fetch = function () {
                return this.$http.get("http://localhost:5500/products");
            };
            return ProductService;
        })();
        angular.module("session01").service("ProductService", ProductService);
    })(SES.Service || (SES.Service = {}));
    var Service = SES.Service;
})(SES || (SES = {}));
