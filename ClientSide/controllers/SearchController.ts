module SES.Controllers{
    "use strict";
    
    class SearchController{
        static $inject = ["PwnedService"];
        private breachedAccounts : SES.Model.BreachedAccount[];
        
        constructor(private pwnedService: SES.Interface.IPwnedService){
            
        }
        
        submit(address: string){
            this.pwnedService.check(address)
            .then((result: ng.IHttpPromiseCallbackArg<SES.Model.BreachedAccount[]>) => 
            {
                this.breachedAccounts = result.data;
            })
            .catch((reason : any) => 
            {
                alert(reason.Message || reason.message);
            });
        }
    }
    
    angular.module("session01").controller("SearchController", SearchController);
}