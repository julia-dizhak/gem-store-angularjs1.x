(function() {
  var app = angular.module('gemStore', ['store-directives']);

  // app.controller('StoreController', function() {
  //   this.products = gems;
  // });
  app.controller('StoreController', ['$http', function($http) {
    var store = this;
    store.products = [];

    $http.get('static/js/store_products.json').then(
      function(data) {
        store.products = data.data;
      })
  }]);

  //$http({ method: 'GET', url: '/products.json' });
  //$http.get('/products.json', { apiKey: 'myApiKey' } );


  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

})();
