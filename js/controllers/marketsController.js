angular.module("catwalk").controller("marketsCtrl", function($scope, superMarketsHttpService){
    $scope.title = "Julio";
    

    superMarketsHttpService.pesquisar().then(function(response) {
        console.log(response);
        $scope.retorno = response && response.data && response.data.markets ? response.data.markets : [] ;
    });
    // superMarketsHttpService.obter("5abef835b06752801d7f2b2d").then(function(response) {
    //     console.log(response);
    //     $scope.retorno = response && response.data && response.data.doc ? response.data.doc : {} ;
    // });
});