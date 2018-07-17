var helmet = angular.module("starCas", ["ngRoute", "starCasController"]);

helmet.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", { templateUrl: "views/home.html", controller: "HomeController" })
         .when("/atm", { templateUrl: "views/atm.html", controller: "atmController" })
         .when("/branch", { templateUrl: "views/branch.html", controller: "atmController" })
        .when("/institution", { templateUrl: "views/institution.html", controller: "atmController" })
        .when("/addInstitution", { templateUrl: "views/addInstitution.html", controller: "addInstitutionController" })
        .when("/addATM", { templateUrl: "views/addATM.html", controller: "addAtmController" })
        .when("/editATM", { templateUrl: "views/editATM.html", })
        .when("/viewATM", { templateUrl: "views/viewATM.html", })
        .when("/deleteATM", { templateUrl: "views/deleteATM.html", })
        .when("/addBranch", { templateUrl: "views/addBranch.html", controller: 'addBranchController' })
        .when("/editBranch", { templateUrl: "views/addBranch.html", })
        .when("/viewBranch", { templateUrl: "views/addBranch.html", })
        .when("/deleteBranch", { templateUrl: "views/addBranch.html", })
        .when("/editBranch", { templateUrl: "views/editBranch.html", })
        .when("/ATMtype", { templateUrl: "views/ATMtype.html", controller: "atmTypeController" })
        .when("/networkMonitor", { templateUrl: "views/networkMonitering.html", })
        .when("/hsmMonitor", { templateUrl: "views/hsmMonitor.html", })
        .when("/txnMonitor", { templateUrl: "views/txnMonitor.html", controller: "txnMonitorController" })
        .when("/txnMonitorLive", { templateUrl: "views/txnMonitorLive.html", controller: "txnMonitorController" })
        .when("/login", { templateUrl: "login.html", })
        .when("/profile", { templateUrl: "views/profile.html", controller: "profileController" })
        .when("/addProfile", { templateUrl: "views/addProfile.html", controller: "addProfileController" })
        .when("/user", { templateUrl: "views/user.html", controller: "userController" })
         .when("/addUser", { templateUrl: "views/addUser.html", controller: "addUserController" })
        .otherwise({
            redirectTo: '/home'
        });
}]);

