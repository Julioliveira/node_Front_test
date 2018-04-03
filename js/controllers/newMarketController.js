angular.module("catwalk").controller("newMarketCtrl", function($scope, superMarketsHttpService, $location){
    $scope.title = "New Market";
    $scope.save = function(){
        var dados = $scope.supermarket ? {
            name: $scope.supermarket.name,
            description: $scope.supermarket.description,
            location: $scope.supermarket.location,
            marketImage: $scope.supermarket.file
        } : null;
        superMarketsHttpService.criar(dados).then(function (response) {
            alert('salvo com sucesso');    
            $location.path('/');
                
        }).catch(error => {
            $scope.error = error;
            console.log(error);
        });
    };
})