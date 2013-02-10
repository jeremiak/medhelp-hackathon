
R.Router = R.Router || {};

(function(R, _, $, Backbone) {

  R.Router.Main = Backbone.Router.extend({
    routes: {
      "start": "personStart",
      "product-search": "productSearch",
      "product-page": "productPage"
    }
  });

})();