angular.module("catwalk").config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "view/listMarkets.html",
        controller: "marketsCtrl"
    })
    .when("/new", {
        templateUrl: "view/market.html",
        controller: "newMarketCtrl"
    })
    .when("/markets/:id", {
        templateUrl: "view/market.html",
        controller: "editMarketCtrl"
    })
    .otherwise({
        templateUrl: "view/listMarkets.html",
        controller: "marketsCtrl"
    })
});