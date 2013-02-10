
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
      var formData = $(this.FROM).serializeArray();
      formData['access_token'] = $.totalStorage('auth_token');
      formData['user_id'] = $.totalStorage('user_id');
      $.ajax({
        url: 'http://pacific-eyrie-4115.herokuapp.com/search',
        data: formData,
        type: 'GET',
        success: function(data) {
          // Need to navigate to the product-page with passing data
        }
      });
    }

  });

})(R, _, $, Backbone);