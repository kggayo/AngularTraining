module SES.Directive {
    export class TreeDirective implements ng.IDirective {
        restrict = "A";
        replace = true;
        templateUrl = "template/navbar-ul.html";
        scope = { tree: "=" };
         
         static instance() : ng.IDirective{
             return new TreeDirective();
         }
    }
    
    angular.module("ui.navbar").directive("tree", TreeDirective.instance);
}