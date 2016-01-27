module SES.Controllers{
    "use strict";
    class GridController{
        static $inject = ["ProductService"];
        private productsData : SES.Model.Product[];

        constructor(private pwnedService: SES.Interface.IProductService){
            this.fetchall();
        }

        fetchall(){
            this.pwnedService.fetch()
            .then((result: ng.IHttpPromiseCallbackArg<SES.Model.Product[]>) =>
            {
                this.productsData = result.data;
            })
            .catch((reason : any) =>
            {
                alert(reason.Message || reason.message);
            });
        }
    }

    angular.module("session01").controller("GridController", GridController);
}
