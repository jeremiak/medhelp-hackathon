
R.View = R.View || {};

(function(R, _, $, Backbone) {
  "use strict";

  R.View.Product = Backbone.View.extend({

    template: _.template(R.Template.Label.Start),

    initialize: function() {
      _.bindAll('render');
    },

    events: {
      'click .search': 'search'
    },

    render: function() {
      console.log(this.model.attributes);
      this.compiledHTML = this.template(this.model.toJSON());
      this.$el.html(this.compiledHTML);

      return this;
    },

    search: function(ev) {
      ev.preventDefault();
      R.main.trigger('product-search-page', {trigger: true});
    }

  });

})(R, _, $, Backbone);