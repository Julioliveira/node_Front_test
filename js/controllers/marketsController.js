angular.module("catwalk").controller("marketsCtrl", function ($scope, superMarketsHttpService, $location) {
    $scope.title = "Julio";

    var search = function () {
        superMarketsHttpService.pesquisar().then(function (response) {
            console.log(response);
            $scope.retorno = response && response.data && response.data.markets ? response.data.markets : [];
        });
    };

    $scope.searchName = function () {
        if ($scope.nameSearch)
            superMarketsHttpService.pesquisarNome($scope.nameSearch).then(function (response) {
                console.log(response);
                $scope.retorno = response && response.data && response.data.markets ? response.data.markets : [];
            });
        else
            search();
    };

    $scope.edit = (id) => {
        $location.path("/markets/" + id)
    }
    $scope.delete = function (supermarket) {
        var id = supermarket.image ? supermarket._id + '/' + supermarket.image.key : supermarket._id;
        superMarketsHttpService.deletar(id).then(function (response) {
            alert(supermarket.name + " deleted with success!");
            console.log(response);
            search();
        });
    }
    search();

});