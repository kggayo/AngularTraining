var SES;
(function (SES) {
    (function (Controllers) {
        var NavigationController = (function () {
            function NavigationController() {
                this.getMenu();
            }
            NavigationController.prototype.getMenu = function () {
                this.menu = [];
                this.menu.push(new SES.Model.NavigationModel());
                this.menu[0].name = "Session 01 - UI Grid";
                this.menu[0].link = "grid";

                this.menu.push(new SES.Model.NavigationModel());
                this.menu[1].name = "Session 02 - Security";
                this.menu[1].link = "search";
            };
            return NavigationController;
        })();

        angular.module("session01").controller("NavigationController", NavigationController);
    })(SES.Controllers || (SES.Controllers = {}));
    var Controllers = SES.Controllers;
})(SES || (SES = {}));
