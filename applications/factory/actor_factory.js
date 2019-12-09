(function () {

    'use strict';

    app.factory('actorFactory', function ($http) {
        return {
            getListActor: function () {
                return $http({
                    url: 'http://localhost:8080/rec_api/actor',
                    method: 'GET'
                });
            },

            insertActor: function (actor) {
                return $http({
                    url: 'http://localhost:8080/rec_api/actor',
                    method: 'POST',
                    data: actor
                });
            },

            getOneActor: function (id) {
                return $http({
                    url: 'http://localhost:8080/rec_api/actor/' + id,
                    method: 'GET',
                    data: id
                });

            },

            editActor: function (actor) {
                return $http({
                    url: 'http://localhost:8080/rec_api/actor/' + actor.actorId,
                    method: 'PUT',
                    data: actor
                });

            },

            deleteActor: function (id) {
                return $http({
                    url: 'http://localhost:8080/rec_api/actor/' + id,
                    method: 'DELETE',
                    data: id
                });

            },
        }
    })

})();