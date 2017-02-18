var app = angular.module('store-directives', []);

app.directive("descriptions", function() {
  return {
    restrict: "E",
    templateUrl: "includes/descriptions.html"
  };
});

app.directive("reviews", function() {
  return {
    restrict: "E",
    templateUrl: "includes/reviews.html"
  };
});

app.directive("specs", function() {
  return {
    restrict: "E",
    templateUrl: "includes/specs.html"
  };
});

app.directive("productTabs", function() {
  return {
    restrict: "E",

    templateUrl: "includes/product_tabs.html",
    controller: function() {
      this.tab = 1;

      this.isSet = function(checkTab) {
        return this.tab === checkTab;
      };

      this.setTab = function(activeTab) {
        this.tab = activeTab;
      };
    },
    controllerAs: "tab"
  };
});


// (function() {
//   var app = angular.module('store-directives', []);
//
//   // app.controller('TabController', function() {
//   //   this.tab = 1;
//   //
//   //   this.setTab = function(setTab) {
//   //     this.tab = setTab;
//   //   };
//   //   this.isSet = function(isSet) {
//   //     return this.tab === isSet;
//   //   };
//   // });
//
//   app.directive('productTabs', function(){
//     return {
//       restrict: 'E',
//       templateUrl: 'includes/product_tabs.html',
//       controller: function() {
//         this.tab = 1;
//
//         this.setTab = function(setTab) {
//           this.tab = setTab;
//         };
//         this.isSet = function(isSet) {
//           return this.tab === isSet;
//         };
//       },
//       controllerAs: "tab"
//     };
//   });
//
//
//
//   // app.directive('productGallery', function(){
//   //   return {
//   //     restrict: 'E',
//   //     templateUrl: 'includes/product_gallery.html',
//   //     controller: function() {
//   //       this.current = 0;
//   //       this.setCurrent = function setCurrent(value) {
//   //         this.current = value || 0;
//   //       };
//   //     },
//   //     controllerAs: "gallery"
//   //   };
//   // });
//
//   app.directive('productTitle', function(){
//     return {
//       restrict: 'E',
//       templateUrl: 'includes/product_title.html'
//     };
//   });
//
//   app.directive('productDescription', function(){
//     return {
//       restrict: 'E',
//       templateUrl: 'includes/product_description.html'
//     };
//   });
//
//   app.directive('productSpecs', function(){
//     return {
//       restrict: 'A',
//       templateUrl: 'includes/product_specs.html'
//     };
//   });
//
//   app.directive('productReview', function(){
//     return {
//       restrict: 'E',
//       templateUrl: 'includes/product_review.html'
//     };
//   });
//
//
// })();
