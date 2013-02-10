
R.View = R.View || {};

(function(R, _, $, Backbone) {
  "use strict";

  R.View.PersonInput = Backbone.View.extend({
    FORM: '#personInput',

    template: _.template(R.Template.Person.Start),

    initialize: function() {
      _.bindAll('render');
      console.log($.url('limit'));
    },

    events: {
      'click .submitForm': 'submit'
    },

    render: function() {
      this.compiledHTML = this.template();
      this.$el.html(this.compiledHTML);

      return this;
    },

    submit: function() {
      var self = this;
      var formData = $(this.FROM).serialize();
      $.ajax({
        url: 'http://pacific-eyrie-4115.herokuapp.com/daily_limit',
        data: formData,
        type: 'GET',
        success: function(data) {
          var dailyLimit = data['limit'];
          console.log('daily limit ' + dailyLimit);
          $.totalStorage( 'limit', dailyLimit);
          console.log('limit cookie '+ $.totalStorage('limit'));
          //self.navigate('product-search');
        }
      });
    }

  });

})(R, _, $, Backbone);