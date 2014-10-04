myApp.controller("baseController", function ($scope, $rootScope) {
    $scope.isLoggedIn = function () {
        return $rootScope.user == undefined ? false : true;
    }

    $scope.logout = function () {
        $rootScope.user = null;
    }
});