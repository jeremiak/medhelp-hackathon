
R.Router = R.Router || {};

(function(R, _, $, Backbone) {
  'use strict';

  R.Router.Main = Backbone.Router.extend({

    routes: {
      "*actions": 'login',
      'person-input': 'personInput',
      "product-search": "productSearch",
      "product-page": "productPage"
    },

    login: function() {
      $(R.Const.MAIN).addClass('login');
      $(R.Const.MAIN).empty();
      var $loginButton = $('<a class="loginButton button" \
        href="https://hapi.medhelp.ws/oauth/authorize?authorize=Yes&response_type=code&redirect_uri=http://0.0.0.0:5000/callback&client_id=e7fc52ddd676d34660c05022e1c26fe822c4b2fe4f7555d52500007ecad5063f">\
        Login with MedHealth</a>');
      $(R.Const.MAIN).append($loginButton);
    },

    personInput: function() {
      $(R.Const.MAIN).addClass('personInput');
      var template = _.template(R.Template.Person.Start);
      var compiledHTML = template();
      $(R.Const.MAIN).append(compiledHTML);
    }
  });

  var main = new R.Router.Main();
  Backbone.history.start()

})(R, _, $, Backbone);