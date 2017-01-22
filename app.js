(function() {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider);

ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
function ToBuyController($scope, ShoppingListCheckOffService) {
  var list = this;

  var items = [];

  list.getItems = function() {
    list.items = ShoppingListCheckOffService.getItems();
  };

}

function ShoppingListCheckOffService(tobuyitems) {

  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
  };

  service.getItems = function () {
    return items;
  };
}

function ShoppingListCheckOffServiceProvider() {
  var provider = this;
  provider.defaults = {
    tobuyitems:[ '{ name: "cookies", quantity: 10 }'
                  ,'{ name: "chips", quantity: 20 }' ]
  };

  provider.$get = function () {
    var shoppinglist = new ShoppingListCheckOffService(provider.defaults.tobuyitems);
    return shoppinglist;
  };
}

})();
