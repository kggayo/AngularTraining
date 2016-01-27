module SES.Service{
    class ProductService implements SES.Interface.IProductService{
        
        constructor(private $http: ng.IHttpService){
            
        }
        fetch() : ng.IPromise<ng.IHttpPromiseCallbackArg<SES.Model.Product[]>>{
            
            return this.$http.get("http://localhost:5500/products");
        }
    }
    angular.module("session01").service("ProductService", ProductService);
}