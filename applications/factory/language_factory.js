app.factory('langFactory', function ($http) {
    var langParams = {};
    langParams.getListLang = function () {
        return $http({
            url: 'http://localhost:8080/rec_api/lang',
            method: 'GET'
        });
    };

    langParams.insertLang = function (lang) {
        return $http({
            url: 'http://localhost:8080/rec_api/lang',
            method: 'POST',
            data: lang
        });
    }

    langParams.getOneLang = function (id) {
        return $http({
            url: 'http://localhost:8080/rec_api/lang/' + id,
            method: 'GET',
            data: id
        });

    }

    langParams.editLang = function (lang) {
        return $http({
            url: 'http://localhost:8080/rec_api/lang/' + lang.languageId,
            method: 'PUT',
            data: lang
        });
    }

    langParams.deleteLang = function (id) {
        return $http({
            url: 'http://localhost:8080/rec_api/lang/' + id,
            method: 'DELETE',
            data: id
        });
    }

    return {
        getListLang: langParams.getListLang,
        getOneLang: langParams.getOneLang,
        insertLang: langParams.insertLang,
        editLang: langParams.editLang,
        deleteLang: langParams.deleteLang
    };

});