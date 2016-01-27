module SES.Directive{
    export class LeafDirective implements ng.IDirective{
        restrict = "E";
        replace = true;
        scope = { leaf: "="};
        templateUrl = "template/navbar-li.html";
        
        constructor(private $compile: ng.ICompileService){
            
        }
        
        link($scope: ng.IScope, elem: Element, attr: SES.Interface.ILeafAttribute) : void{
            var element = angular.element(elem);
             if(angular.isArray(attr.leaf.subtree)){
                 element.append('<tree tree=\"leaf.subtree\"></tree>');
                 var parent = element.parent();
                 var classFound = false;
                 
                 while(parent.length > 0 && !classFound) {
                      if(parent.hasClass('navbar-right')) {
                        classFound = true;
                      }
                      parent = parent.parent();
                    }
                    
                    if(classFound) {
                      element.addClass('dropdown-submenu-right');
                    } else {
                     element.addClass('dropdown-submenu');
                    }
                    
                    this.$compile(element.contents())($scope);
             }
        }
        
        static instance() : ng.IDirective{
            var directive = ($compile : ng.ICompileService) => new LeafDirective($compile);
            directive.$inject = ["$compile"];
            return directive;
        }
    }
    
    angular.module("ui.navbar").directive("leaf", LeafDirective.instance);
}