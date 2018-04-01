
angular.module('catwalk')
    .factory('superMarketsHttpService', ['$http', 'config', function ($http, config) {

        var _pesquisar = function () {
            return $http({
                method: 'GET',
                url: config.API_URL + 'markets',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        };

        var _obter = function (id) {
            return $http({
                method: 'GET',
                url: config.API_URL + 'markets/' + id,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        };

        var _criar = function (dados) {
            return $http({
                method: 'POST',
                url: config.API_URL + 'user/',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: dados
            });
        };

        var _editar = function (dados) {
            return $http({
                method: 'PATCH',
                url: config.API_URL + 'user',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: dados
            });
        };

        var _deletar = function (id) {
            return $http({
                method: 'DELETE',
                url: config.API_URL + 'user/' + id,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        };

        return {
            pesquisar: _pesquisar,
            obter: _obter,
            criar: _criar,
            editar: _editar,
            deletar: _deletar,
        };

    }]);
