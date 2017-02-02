angular.module('shoppingCartApp').controller('shoppingItemsCtrl', function ($scope, $location, $http, $modal, $timeout, LoginDataFctry, ShoppingItemsFctry) {
    var modalInstance = $modal.open({
        templateUrl: '../../html/partials/modalspinner.html'
    });
    //    angular.element('#modalOn').trigger('click');
    $http({
        url: 'http://localhost:8081/RestfulWebServices/rest/shoppingList',
        data: LoginDataFctry.loginData,
        method: 'POST'
    }).success(function (data) {
        console.log(data);
        $scope.shoppingItems = data.shoppingItemsList;
        ShoppingItemsFctry.shoppingItems = data.shoppingItemsList;

        modalInstance.close('closing');


    })

    $scope.selectedItems = {
        ids: {}
    };

    $scope.gotoShippingBilling = function () {
        console.log($scope.selectedItems);
        console.log($scope.selectedItems.ids);

        var shoppingItems = [];
        angular.forEach(ShoppingItemsFctry.shoppingItems, function (shoppingItem, index) {
            console.log("shoppingItem is: " + shoppingItem + " item cost is: " + shoppingItem.itemCost);

            angular.forEach($scope.selectedItems.ids, function (value, key) {
                if (shoppingItem.itemID == key && value) {
                    shoppingItems.push(shoppingItem);
                }
            })
        })

        ShoppingItemsFctry.shoppingItems = shoppingItems;
        console.log("length is: " + ShoppingItemsFctry.shoppingItems.length);
        $location.path("/shippingBilling");
    }
})
