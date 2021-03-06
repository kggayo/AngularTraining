module SES.Directive {
    export class EnterKeyPressDirective implements ng.IDirective {
        require = "?ngModel";
        restrict = "A";

        link($scope: ng.IScope, elm: Element, attr: SES.Interface.IEnterKeyPressAttributes, ngModel: ng.INgModelController): void {
            var element = angular.element(elm);
            element.bind("keydown keypress", (event: JQueryEventObject) => {

                if (event.which === 13) {
                    $scope.$apply(() => {
                        $scope.$eval(attr.ngEnter);
                    });

                    event.preventDefault();
                }

            });
        }

        static instance(): ng.IDirective {
            return new EnterKeyPressDirective();
        }
    }
    
    angular.module("session01").directive("ngEnter", EnterKeyPressDirective.instance);
}