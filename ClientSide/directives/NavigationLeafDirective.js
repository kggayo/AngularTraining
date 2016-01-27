var SES;
(function (SES) {
    (function (Directive) {
        var LeafDirective = (function () {
            function LeafDirective($compile) {
                this.$compile = $compile;
                this.restrict = "E";
                this.replace = true;
                this.scope = { leaf: "=" };
                this.templateUrl = "template/navbar-li.html";
            }
            LeafDirective.prototype.link = function ($scope, elem, attr) {
                var element = angular.element(elem);
                if (angular.isArray(attr.leaf.subtree)) {
                    element.append('<tree tree=\"leaf.subtree\"></tree>');
                    var parent = element.parent();
                    var classFound = false;

                    while (parent.length > 0 && !classFound) {
                        if (parent.hasClass('navbar-right')) {
                            classFound = true;
                        }
                        parent = parent.parent();
                    }

                    if (classFound) {
                        element.addClass('dropdown-submenu-right');
                    } else {
                        element.addClass('dropdown-submenu');
                    }

                    this.$compile(element.contents())($scope);
                }
            };

            LeafDirective.instance = function () {
                var directive = function ($compile) {
                    return new LeafDirective($compile);
                };
                directive.$inject = ["$compile"];
                return directive;
            };
            return LeafDirective;
        })();
        Directive.LeafDirective = LeafDirective;

        angular.module("ui.navbar").directive("leaf", LeafDirective.instance);
    })(SES.Directive || (SES.Directive = {}));
    var Directive = SES.Directive;
})(SES || (SES = {}));
