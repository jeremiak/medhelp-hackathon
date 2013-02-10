
R.Router = R.Router || {};

(function(R, _, $, Backbone) {
  'use strict';

  R.Router.Main = Backbone.Router.extend({
    MAIN: "#main",

    routes: {
      "start": "personStart",
      "product-search": "productSearch",
      "product-page": "productPage"
    },

    initialize: function() {
      this.start();
    },

    start: function() {
      var template = _.template(R.Template.Person.Start);
      var compiledHTML = template();
      $(this.MAIN).append(compiledHTML);
    }
  });

  var main = new R.Router.Main();
})(R, _, $, Backbone);