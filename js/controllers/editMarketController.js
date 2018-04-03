angular.module("catwalk").controller("editMarketCtrl", function ($scope, superMarketsHttpService, $routeParams, $location) {
    $scope.title = "Edit Market";
    $scope.edit = true;
    $scope.previewSource = null;
    var tempImage = null;
    var imgChanged = false;
    var imgDeleted = false;

    superMarketsHttpService.obter($routeParams.id).then(function (response) {
        var retorno = response && response.data && response.data.doc ? response.data.doc : {};
        $scope.supermarket = retorno;
        tempImage = $scope.supermarket.image;
        $scope.previewSource = $scope.supermarket.image.url;
    });

    $scope.deleteImage = function (supermarket) {
        imgChanged = false;
        imgDeleted = true;
        $scope.supermarket.image = {};
        $scope.previewSource = "/resources/no image available.jpeg";
    };
    $scope.resetImage = function () {
        imgDeleted = false;
        imgChanged = false;
        $scope.supermarket.image = tempImage;
        document.getElementById("image").src = $scope.supermarket.image.url;
    }

    document.getElementById('newFile').onchange = function (evt) {
        imgChanged = true;
        imgDeleted = false;
        var tgt = evt.target || window.event.srcElement,
            files = tgt.files;

        // FileReader support
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                document.getElementById("image").src = fr.result;

            }
            fr.readAsDataURL(files[0]);
        }

        // Not supported
        else {
            // fallback -- perhaps submit the input to an iframe and temporarily store
            // them on the server until the user's session ends.
        }
    };

    $scope.save = function () {
        var dados = $scope.supermarket ? {
            name: $scope.supermarket.name,
            description: $scope.supermarket.description,
            location: $scope.supermarket.location
        } : null;
        if (imgChanged) {
            dados.marketImage = $scope.supermarket.file;
            dados.imageId = tempImage.key;
        }
        else if (imgDeleted)
            dados.imageId = tempImage.key;
        superMarketsHttpService.editar(dados, $scope.supermarket._id).then(function (response) {
            alert('salvo com sucesso');
            $location.path('/');

        }).catch(error => {
            $scope.error = error;
            console.log(error);
        });
    };

});