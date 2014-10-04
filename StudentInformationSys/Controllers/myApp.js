var myApp = angular.module("myApp", ['ngRoute']);
var apiBaseUrl = "http://localhost:62280/api/";
myApp.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if ($rootScope.user == undefined)
            $location.path('/');
    });
}])


