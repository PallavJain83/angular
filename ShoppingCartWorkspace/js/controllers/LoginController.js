angular.module('shoppingCartApp').controller('loginCtrl', function ($scope, $location, LoginDataFctry) {
    $scope.signIn = function () {
        console.log("Sign In done");
        LoginDataFctry.loginData.userName = $scope.userName;
        LoginDataFctry.loginData.password = $scope.password;
        console.log('LoginDataFctry.loginData: ' + LoginDataFctry.loginData);

        $location.path('/shoppingItems');
    }
})
