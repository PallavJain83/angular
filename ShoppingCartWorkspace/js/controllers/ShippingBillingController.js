angular.module('shoppingCartApp').controller('shippingBillingCtrl', function($scope, $location, ShippingBillingFctry) {
    $scope.gotoOrderReview = function() {
        ShippingBillingFctry.shippingBillingDetails = $scope.shippingBillingDetails;
        console.log("Name is: " + ShippingBillingFctry.shippingBillingDetails.shippingInfo.name);
        console.log("Address Line1 is: " + ShippingBillingFctry.shippingBillingDetails.shippingInfo.addressLine1);
        console.log("Card# is: " + ShippingBillingFctry.shippingBillingDetails.billingInfo.cardNumber);
        console.log("Delivery method is: " + ShippingBillingFctry.shippingBillingDetails.shippingInfo.deliveryMethod);
        $location.path("/orderReview");
    }
})