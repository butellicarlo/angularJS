(function(){
  var gems = [ 
      {
          name: 'Samsung 55" Class KU7500 7-Series Curved 4K UHD TV (2016 Model)', 
          price: 1599.99, 
          description: 'Enter the next level of home entertainment with the KU7500. 4K UHD Resolution makes every picture 4x sharper than',
          canPurchase: true
      },
      {
          name: 'Sony - 55" Class (54.6" Diag.) - LED - 2160p - Smart - 4K Ultra HD TV - Black',
          price: 1299.99,
          description: 'Sony 4K Ultra HD TV: Watch your favorite movies and TV shows in stunning 4K resolution with this smart LED HDTV',
          canPurchase: false
      },
      {
          name: 'Panasonic TX-65CZ952',
          price: 999.99,
          description: "Panasonic has set out to make a statement with the 65CZ952. With an eye-watering price tag of nearly £8,000",
          canPurchase: true
      }
  ];
    
  var app = angular.module('gemStore', []);
  app.controller("StoreController", function(){
    this.products = gems;
  });
    
})();

