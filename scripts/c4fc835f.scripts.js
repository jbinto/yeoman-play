"use strict";angular.module("projectfooApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]);var app=angular.module("projectfooApp");app.directive("evil",function(){return{restrict:"A",template:"<div>At the end of the day, it's their own fault. -Rob Ford</div>"}}),app.factory("BusRoutes",function(){var a={};return a.routes=[{number:1,name:"Yonge-University-Spadina"},{number:7,name:"Bathurst"},{number:14,name:"Glencairn"},{number:28,name:"Davisville"},{number:32,name:"Eglinton West"},{number:34,name:"Eglinton East"},{number:310,name:"Vomit Comet"},{number:501,name:"Queen"},{number:503,name:"Downtowner"},{number:504,name:"King"},{number:505,name:"Dundas"},{number:510,name:"St. Clair"}],a}),app.controller("BusRoutesCtrl",["$scope","BusRoutes",function(a,b){a.busroutes=b}]),app.controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);