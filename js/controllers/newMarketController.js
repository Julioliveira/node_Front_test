angular.module("catwalk").controller("newMarketCtrl", function($scope, superMarketsHttpService){
    $scope.title = "Julio";
    

    superMarketsHttpService.pesquisar().then(function(response) {
        console.log(response);
        $scope.retorno = response && response.data && response.data.markets ? response.data.markets : [] ;
    });
});