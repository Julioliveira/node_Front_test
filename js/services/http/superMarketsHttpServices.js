
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
        var _pesquisarNome = function (name) {
            return $http({
                method: 'GET',
                url: config.API_URL + 'markets/search/' + name,
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
            var fd = new FormData();
            for (var key in dados)
                fd.append(key,dados[key]);
            return $http.post(config.API_URL + 'markets/', fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined,
                },
            });
        };

        var _editar = function (dados, id) {
            var fd = new FormData();
            for (var key in dados)
                fd.append(key,dados[key]);
            return $http.patch(config.API_URL + 'markets/'+id, fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined,
                },
            });
            // return $http({
            //     method: 'PATCH',
            //     url: config.API_URL + 'markets/' + id,
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     data: dados
            // });
        };

        var _deletar = function (id) {
            return $http({
                method: 'DELETE',
                url: config.API_URL + 'markets/' + id,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        };

        return {
            pesquisar: _pesquisar,
            pesquisarNome: _pesquisarNome,
            obter: _obter,
            criar: _criar,
            editar: _editar,
            deletar: _deletar,
        };

    }]);
