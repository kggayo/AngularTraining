var SES;
(function (SES) {
    (function (Controllers) {
        "use strict";
        var GridController = (function () {
            function GridController(pwnedService) {
                this.pwnedService = pwnedService;
                this.fetchall();
            }
            GridController.prototype.fetchall = function () {
                var _this = this;
                this.pwnedService.fetch().then(function (result) {
                    _this.productsData = result.data;
                }).catch(function (reason) {
                    alert(reason.Message || reason.message);
                });
            };
            GridController.$inject = ["ProductService"];
            return GridController;
        })();

        angular.module("session01").controller("GridController", GridController);
    })(SES.Controllers || (SES.Controllers = {}));
    var Controllers = SES.Controllers;
})(SES || (SES = {}));
