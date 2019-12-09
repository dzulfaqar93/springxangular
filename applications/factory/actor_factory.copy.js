app.factory('actorFactory', function ($http) {
    var actorParams = {};
    actorParams.getListActor = function () {
        return $http({
            url: 'http://localhost:8080/rec_api/actor',
            method: 'GET'
        });
    };

    actorParams.insertActor = function (actor) {
        return $http({
            url: 'http://localhost:8080/rec_api/actor',
            method: 'POST',
            data: actor
        });
    }

    actorParams.getOneActor = function (id) {
        return $http({
            url: 'http://localhost:8080/rec_api/actor/' + id,
            method: 'GET',
            data: id
        });

    }

    actorParams.editActor = function (actor) {
        return $http({
            url: 'http://localhost:8080/rec_api/actor/' + actor.actorId,
            method: 'PUT',
            data: actor
        });

    }

    actorParams.deleteActor = function (id) {
        return $http({
            url: 'http://localhost:8080/rec_api/actor/' + id,
            method: 'DELETE',
            data: id
        });

    }

    return {
        getListActor: actorParams.getListActor,
        getOneActor: actorParams.getOneActor,
        insertActor: actorParams.insertActor,
        editActor: actorParams.editActor,
        deleteActor: actorParams.deleteActor
    };

});