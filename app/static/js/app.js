(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.currentImageChange = function(imageNumber) {
      this.imageIndex = imageNumber || 0;
    };
 });

 app.controller('StoreController', ['$http', function($http) {
    var store = this;
    store.products = [];

    $http.get('static/js/store_products.json').then(
      function(data) {
        store.products = data.data;
      })
  }]);

  app.controller('ReviewController', function() {
    this.review = {};
    //console.log(this.review);

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

})();
