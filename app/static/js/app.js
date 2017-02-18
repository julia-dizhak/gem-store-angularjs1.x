(function() {
  var app = angular.module('gemStore', ['store-directives']);

  // app.controller('GalleryController', function() {
  //   this.current = 0;
  //   this.setCurrent = function setCurrent(value) {
  //     this.current = value || 0;
  //   };
  // });
  app.controller('GalleryController', function() {
     this.imageIndex = 0;
    console.log(this);
     this.currentImageChange = function(imageNumber) {
       console.log(imageNumber);
       this.imageIndex = imageNumber || 0;
     };
 });

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
