
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

    submit: function(ev) {
      ev.preventDefault();
      var self = this;
      var formData = {};
      formData['upc'] = $('#productSearch').find('input[name=upc]').val();
      formData['access_token'] = $.totalStorage('auth_token');
      formData['user_id'] = $.totalStorage('user_id');
      formData['daily_cal'] = $.totalStorage('limit');
      $.ajax({
        url: 'http://pacific-eyrie-4115.herokuapp.com/search',
        data: formData,
        type: 'GET',
        success: function(data) {
          self.model.set(data);
          R.main.trigger('product-page');
        },
        error: function() {
          window.alert('Product not found');
        }
      });
    }

  });

})(R, _, $, Backbone);