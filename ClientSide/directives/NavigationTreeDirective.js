var SES;
(function (SES) {
    (function (Directive) {
        var TreeDirective = (function () {
            function TreeDirective() {
                this.restrict = "A";
                this.replace = true;
                this.templateUrl = "template/navbar-ul.html";
                this.scope = { tree: "=" };
            }
            TreeDirective.instance = function () {
                return new TreeDirective();
            };
            return TreeDirective;
        })();
        Directive.TreeDirective = TreeDirective;

        angular.module("ui.navbar").directive("tree", TreeDirective.instance);
    })(SES.Directive || (SES.Directive = {}));
    var Directive = SES.Directive;
})(SES || (SES = {}));
