angular.module("shoppingCartApp").filter("totalCostFltr", function() {
    return function(data, key) {
        var totalCost = 0.00;
        angular.forEach(data, function(value) {
           totalCost += value[key]; 
        });
        return totalCost;
    }
});