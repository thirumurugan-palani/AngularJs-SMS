myApp.controller("authorizeController", function ($scope, $rootScope, authorizeService) {

    var loginModel = {

        Username: "",
        Password: "",

        signIn: function () { authorizeService.authenticate(this); },
        signInSuccess: function (loginDetail) {
            $rootScope.user = loginDetail;
            alert($rootScope.user.Username);
        }
       
    };

    $scope.LoginModel = loginModel;
});