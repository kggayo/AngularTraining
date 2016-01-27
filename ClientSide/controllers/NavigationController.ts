module SES.Controllers {
    class NavigationController {
        public menu: SES.Model.NavigationModel[];
        constructor() {
            this.getMenu();
        }
        getMenu() {
             this.menu = [];
             this.menu.push(new SES.Model.NavigationModel());
             this.menu[0].name = "Session 01 - UI Grid";
             this.menu[0].link = "grid";
             
             this.menu.push(new SES.Model.NavigationModel());
             this.menu[1].name = "Session 02 - Security";
             this.menu[1].link = "search";
        }
    }

    angular.module("session01").controller("NavigationController", NavigationController);
}
