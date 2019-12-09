app.controller('actorController', function ($scope, actorFactory) {

    $scope.newActor = {
        firstName: " ",
        lastName: " "
    }

    $scope.addIsClicked = false;
    $scope.editIsClicked = false;
    $scope.readOnly = true;
    var editClicked = false;
    var addClicked = false;

    getList();

    // actorFactory.getListActor().then(function successCallback(response){
    //     $scope.actors = response.data.data;
    //     var date = new Date(1139952873000 * 1000);
    // }, function errorCallback(error){
    //     console.log(error, "Can't get actors data");
    // });

    function getList() {
        actorFactory.getListActor().then(function successCallback(response) {
            $scope.actors = response.data.data;
            var date = new Date(1139952873000 * 1000);
        }, function errorCallback(error) {
            console.log(error, "Can't get actors data");
        });
    }

    $scope.addBtn = function () {
        var actor = $scope.newActor;
        addClicked = true;
        disableReadOnly(addClicked);
        disableSaveCancel(addClicked,false);
    }

    $scope.editActor = function (id) {
        editClicked = true;
        disableReadOnly(editClicked);
        actorFactory.getOneActor(id).then(function (response) {
            $scope.newActor = response.data.data;
            console.log(response.data)
            disableSaveCancel(false,editClicked);
        }, function (error) {
            console.log(error)
        })
    }

    $scope.saveEditActor = function () {
        var actor = $scope.newActor;
        console.log(actor.actorId)
        actorFactory.editActor(actor).then(function (response) {
            // $scope.newActor = response.data.data;
            console.log(response.data)
            $scope.clearUI();
            getList();
            editClicked = false;
            disableSaveCancel(null, editClicked);
            disableReadOnly(editClicked);
        }, function (error) {
            console.log(error)
        })
    }

    $scope.saveInsertActor = function () {
        var actor = $scope.newActor;
        console.log(actor)
        actorFactory.insertActor(actor).then(function (response) {
            console.log(response.data)
            $scope.clearUI();
            getList();
            addClicked = false;
            disableSaveCancel(addClicked, null);
            disableReadOnly(addClicked);
        }, function (error) {
            console.log(error)
        })
    }

    $scope.cancelInsertActor = function () {
        $scope.clearUI();
        addClicked = false;
        disableSaveCancel(addClicked,null);
        disableReadOnly(addClicked)
    }

    $scope.cancelEditActor = function () {
        $scope.clearUI();
        editClicked = false;
        disableSaveCancel(null, editClicked);
        disableReadOnly(editClicked)
    }

    $scope.removeActor = function (id) {
        // var actor = $scope.newActor;
        actorFactory.deleteActor(id).then(function (response) {
            console.log(response.data)
            getList();
        }, function (error) {
            console.log(error)
        })
    }

    function disableSaveCancel(addClicked, editClicked) {
        if (addClicked == true && editClicked == false) {
            $scope.addIsClicked = true;
        } else if (addClicked == false && editClicked == null) {
            $scope.addIsClicked = false;
        } else if(addClicked == false && editClicked == true) {
             $scope.editIsClicked = true;
        } else if (addClicked == null && editClicked == false) {
            $scope.editIsClicked = false;
        }
    };

    function disableReadOnly(params) {
        if (params == true) {
            $scope.readOnly = false;
        } else {
            $scope.readOnly = true;
        }
    };

    $scope.clearUI = function () {
        $scope.newActor.actorId = "";
        $scope.newActor.firstName = "";
        $scope.newActor.lastName = "";
        $scope.newActor.lastUpdate = "";
    };

})