myApp.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/login.html",
        controller: "authorizeController"
    })
    .when("/student", {
        templateUrl: "views/student/managestudent.html",
        controller: "studentController"
    })
    .when("/staff", {
        templateUrl: "views/staff/index.html",
        controller: "studentController"
    })
});