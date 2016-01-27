/// <reference path="../models/Products.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

module SES.Interface{
    export interface IProductService{
        fetch() :ng.IPromise<ng.IHttpPromiseCallbackArg<SES.Model.Product[]>>;
    }
}