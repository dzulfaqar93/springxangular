app.controller('langController', function ($scope, langFactory) {

    $scope.newLang = {
        name: " "
    }
    $scope.addIsClicked = false;
    $scope.editIsClicked = false;
    $scope.readOnly = true;
    var editClicked = false;
    var addClicked = false;

    getList();

    function getList() {
        langFactory.getListLang().then(function successCallback(response) {
            $scope.langs = response.data.data;
            var date = new Date(1139952873000 * 1000);
        }, function errorCallback(error) {
            console.log(error, "Can't get actors data");
        });
    }

    $scope.addBtn = function () {
        var lang = $scope.newLang;
        addClicked = true;
        disableReadOnly(addClicked);
        disableSaveCancel(addClicked,false);
    }

    $scope.editLang = function (id) {
        editClicked = true;
        disableReadOnly(editClicked);
        langFactory.getOneLang(id).then(function (response) {
            $scope.newLang = response.data.data;
            console.log($scope.newLang)
            disableSaveCancel(false,editClicked);
        }, function (error) {
            console.log(error)
        })
    }

    $scope.saveEditLang = function () {
        var lang = $scope.newLang;
        langFactory.editLang(lang).then(function (response) {
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

    $scope.saveInsertLang = function () {
        var lang = $scope.newLang;
        console.log("addClicked = TRUE")
        langFactory.insertLang(lang).then(function (response) {
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

    $scope.cancelInsertLang = function () {
        $scope.clearUI();
        addClicked = false;
        disableSaveCancel(addClicked,null);
        disableReadOnly(addClicked)
    }

    $scope.cancelEditLang = function () {
        $scope.clearUI();
        editClicked = false;
        disableSaveCancel(null, editClicked);
        disableReadOnly(editClicked)
    }

    $scope.removeLang = function (id) {
        langFactory.deleteLang(id).then(function (response) {
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
        $scope.newLang.languageId = "";
        $scope.newLang.name = "";
        $scope.newLang.lastUpdate = "";
    };


})