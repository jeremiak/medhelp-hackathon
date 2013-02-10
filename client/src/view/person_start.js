
R.View = R.View || {};

(function(R, _, $, Backbone) {
  "use strict";

  R.View.PersonInput = Backbone.View.extend({
    FORM: '#personInput',

    template: _.template(R.Template.Person.Start),

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
      var formData = $(this.FROM).serialize();
      $.ajax({
        url: 'http://pacific-eyrie-4115.herokuapp.com/daily_limit',
        data: formData,
        type: 'POST',
        success: function(data) {
          var dailyLimit = data['limit'];
          $.totalStorage( 'limit', dailyLimit);
          self.navigate('product-search');
        }
      });
    }

  });

})(R, _, $, Backbone);