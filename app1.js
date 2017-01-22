(function() {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider)
.config(Config);

Config.$inject = ['ShoppingListCheckOffServiceProvider'];
function Config(ShoppingListCheckOffServiceProvider) {
  ShoppingListCheckOffServiceProvider.tobuyitems =
    { '{name: 'Cookies'}, {quantity: '10'}'
      , '{name: 'Bananas'}, {quantity: '20'}'
      , '{name: 'Cakes'}, {quantity: '30'}'
      , '{name: 'PineApples'}, {quantity: '40'}'
      , '{name: 'Mangos'}, {quantity: '50'}'};
  }
};

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController('ShoppingListCheckOffService') {
  var list = this;
  list.getItems = function () {
    list.items = ShoppingListCheckOffService.getItems();
    for (i=0; i+1; i<5) {
      Console.log ("Buy " items[i].Quantity items[i].Name);
        // list.itemName =
        // list.itemQuantity =
    }

  }
  // list.itemName = "";
  // list.itemQuantity = "";
  //
  // list.addItem = function () {
  //   try {
  //     ShoppingListCheckOffService.addItem(list.itemName, list.itemQuantity);
  //   } catch (error) {
  //     list.errorMessage = error.message;
  //   }
  // };

  list.populate = function () {
    for (i=0; i+1; i<5) {
      Console.log ("Buy " items[i].Quantity items[i].Name);
      // list.itemName =
      // list.itemQuantity =
    }

  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController('ShoppingListCheckOffService') {

}

ShoppingListCheckOffService.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ShoppingListCheckOffService($scope) {

  var service = this;

  var items = [ '{name: 'cookies'}, {quantity: '10'}'
                      ,'{name: 'breads'}, {quantity: '20'}'
                      ,'{name: 'bananas'}, {quantity: '30'}'
                      ,'{name: 'Spoons'}, {quantity: '40'}'
                      ,'{name: 'Cups'}, {quantity: '50'}' ];

  // List of shopping items
  // var items = [];
  //
  // service.addItem = function (itemName, quantity) {
  //     var item = {
  //       name: itemName,
  //       quantity: quantity
  //     };
  //     items.push(item);
  // };

  service.getItems = function () {
    return items;
  }

  function ShoppingListCheckOffServiceProvider() {
    var provider = this;
    provider.tobuyitems = { '{name: 'Cookies'}, {quantity: '10'}'
          , '{name: 'Bananas'}, {quantity: '20'}'
          , '{name: 'Cakes'}, {quantity: '30'}'
          , '{name: 'PineApples'}, {quantity: '40'}'
          , '{name: 'Mangos'}, {quantity: '50'}'};
      }

    provider.$get = function () {
      var shoppinglist = new ShoppingListCheckOffService(provider.tobuyitems);
      return shoppinglist;
    }
  }

}



})();
