(function() {
  var app = angular.module('store-directives', []);

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'includes/product_title.html'
    };
  });

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

})();
