/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../models/BreachedAccount.ts" />

module SES.Interface{
    export interface IPwnedService{
        check(address: string) : ng.IPromise<ng.IHttpPromiseCallbackArg<SES.Model.BreachedAccount[]>>;
    }
}