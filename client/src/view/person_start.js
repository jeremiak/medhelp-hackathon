
R.View = R.View || {};

(function(R, _, $, Backbone) {
  "use strict";

  R.View.PersonStart = Backbone.View.extend({
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

    submitForm: function() {
      var formData = $(this.FROM).serialize();
      $.ajax({
        url: 'http://pacific-eyrie-4115.herokuapp.com/daily_limit',
        data: formData,
        type: 'GET',
        success: function() {
          // once daily limit is set init person model
        }
      });
    }

  });

})(R, _, $, Backbone);