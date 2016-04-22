(function(){
  var gem = { 
      name: 'Azurite', 
      price: 2.95, 
      description: 'Starting in RubyGems 2.0, a Specification can hold arbitrary metadata. See metadata for restrictions on the format and size of metadata items you may add to a specification',
      canPurchase: false
  };
  var app = angular.module('gemStore', []);
  app.controller("StoreController", function(){
    this.product = gem;
  });
})();