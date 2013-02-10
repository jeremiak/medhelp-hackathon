
R.View = R.View || {};

(function(R, _, $, Backbone) {
  "use strict";

  R.View.ProductSearch = Backbone.View.extend({
    FORM: '#productSearch',

    template: _.template(R.Template.Product.Search),

    initialize: function() {
      _.bindAll('render');
    },

    events: {
      'click .submitForm': 'submit'
    },

    render: function() {
      this.compiledHTML = this.template();
      this.$el.html(this.compiledHTML);

      return this;
    },

    submitForm: function() {
      var formData = $(this.FROM).serialize();
      var authToken = $.localStorage('auth_token').data;
      var userId = $.localStorage('user_id').data;
      $.ajax({
        url: 'http://pacific-eyrie-4115.herokuapp.com/search',
        data: formData,
        type: 'GET',
        success: function() {
          // what do now? we have to go to a new page, but need GET params
        }
      });
    }

  });

})(R, _, $, Backbone);