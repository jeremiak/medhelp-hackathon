
R.Router = R.Router || {};

(function(R, _, $, Backbone) {
  'use strict';

  R.Router.Main = Backbone.Router.extend({

    routes: {
      '*actions': 'login',
      'init-person': 'initPerson',
      'person-input': 'personInput',
      'product-search': 'productSearch',
      'product-page': 'productPage'
    },

    login: function() {
      $(R.Const.MAIN).addClass('login');
      $(R.Const.MAIN).empty();
      var $loginButton = $('<a class="loginButton button" \
        href="https://hapi.medhelp.ws/oauth/authorize?authorize=Yes&response_type=code&redirect_uri=http://pacific-eyrie-4115.herokuapp.com/callback&client_id=e7fc52ddd676d34660c05022e1c26fe822c4b2fe4f7555d52500007ecad5063f"> \
        Login with MedHelp</a>');
      $(R.Const.MAIN).append($loginButton);
    },

    personInit: function() {
      var authToken = $.url('access_token');
      var userId = $.url('user_id');
      $.localStorage( 'auth_token', {data:authToken});
      $.localStorage( 'user_id', {data:userId});
      this.navigate('person-input');
    },

    personInput: function() {
      $(R.Const.MAIN).empty();
      var personInputView = new R.View.PersonInput();
      $(R.Const.MAIN).append(personInputView.render().el);
    },

    productSearch: function() {
      $(R.Const.MAIN).empty();
      var productSearchView = new R.View.ProductSearch();
      $(R.Const.MAIN).append(productSearchView.render().el);
    }
  });

  var main = new R.Router.Main();
  Backbone.history.start();

})(R, _, $, Backbone);
