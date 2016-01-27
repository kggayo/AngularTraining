
module SES.Service{
    class PwnedService implements SES.Interface.IPwnedService{
        static $inject = ["$http"];
        
        constructor(private $http: ng.IHttpService){
        }
        
        check(address: string) : ng.IPromise<ng.IHttpPromiseCallbackArg<SES.Model.BreachedAccount[]>>{
            return this.$http.get("https://haveibeenpwned.com/api/v2/breachedaccount/" + address);
        }
    }
    
    angular.module("session01").service("PwnedService", PwnedService);
}