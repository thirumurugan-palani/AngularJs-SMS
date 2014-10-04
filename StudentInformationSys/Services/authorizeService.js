myApp.factory("authorizeService", function ($http, $q) {
    var authServiceFactory = {};

    var authenticate = function (loginModel) {

        $http.post(apiBaseUrl + "Authentication/Authenticate?Username=" + loginModel.Username + "&Password=" + loginModel.Password)
            .then(function (response) { loginModel.signInSuccess(response.data); });
    }

    authServiceFactory.authenticate = authenticate;

    return authServiceFactory;
});