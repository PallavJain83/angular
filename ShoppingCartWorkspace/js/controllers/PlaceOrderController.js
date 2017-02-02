angular.module('shoppingCartApp').controller('placeOrderCtrl', function ($scope, $location, $http, ShippingBillingFctry, ShoppingItemsFctry) {
    console.log("In Place Order Controller");
    var orderData = {
        shoppingItemsList: ShoppingItemsFctry.shoppingItems,
        shippingBillingDetails: ShippingBillingFctry.shippingBillingDetails
    };
    
    $scope.successMessage = "";
//    $scope.shoppingItems = ShoppingItemsFctry.shoppingItems;
//    $scope.shippingBillingDetails = ShippingBillingFctry.shippingBillingDetails;

    $http({
        url: 'http://localhost:8081/RestfulWebServices/rest/order',
        data: orderData,
        method: "POST"
    }).success(function(data) {
        $scope.successMessage = data.successMessage;
    });
    
    $scope.logout = function() {
        $location.path("/home");
    }
})
