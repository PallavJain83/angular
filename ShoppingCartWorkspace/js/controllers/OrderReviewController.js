angular.module('shoppingCartApp').controller('orderReviewCtrl', function ($scope, $location, ShoppingItemsFctry, ShippingBillingFctry) {
    $scope.shoppingItems = ShoppingItemsFctry.shoppingItems;
    
    $scope.removeItem = function (index) {
        console.log("index selected is: " + index);
        ShoppingItemsFctry.shoppingItems.splice(index, 1);
    }
    
    $scope.placeOrder = function() {
        $location.path("/placeOrder");
    }
})
