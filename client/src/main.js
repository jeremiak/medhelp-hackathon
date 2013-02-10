
R.Router = R.Router || {};

(function(R, _, $, Backbone) {
  'use strict';

  R.Router.Main = Backbone.Router.extend({

    routes: {
      'login': 'login',
      'init-person?*path': 'initPerson',
      'person-input': 'personInput',
      'product-search': 'productSearch',
      'product-page': 'productPage',
      '*path':  'start'
    },

    initialize: function() {
      this.productModel = new new R.Model.Product();
    },

    start: function() {
      if(!$.totalStorage('auth_token')) {
        this.navigate('login');
      } else if (!$.totalStorage('limit')) {
        this.navigate('person-input');
      } else {
        this.navigate('product-search');
      }
      window.location.reload();
    },

    login: function() {
      $(R.Const.MAIN).addClass('login');
      $(R.Const.MAIN).empty();
      var $loginButton = $('<a class="loginButton button" \
        href="https://hapi.medhelp.ws/oauth/authorize?authorize=Yes&response_type=code&redirect_uri=http://pacific-eyrie-4115.herokuapp.com/callback&client_id=e7fc52ddd676d34660c05022e1c26fe822c4b2fe4f7555d52500007ecad5063f"> \
        Login with MedHelp</a>');
      $(R.Const.MAIN).append($loginButton);
    },

    initPerson: function() {
      $(R.Const.MAIN).empty();
      var authToken = $.url('access_token');
      var userId = $.url('user_id');
      $.totalStorage( 'auth_token', authToken);
      $.totalStorage( 'user_id', userId);
      this.navigate('person-input');
      window.location.reload();
    },

    personInput: function() {
      $(R.Const.MAIN).empty();
      var personInputView = new R.View.PersonInput();
      $(R.Const.MAIN).append(personInputView.render().el);
    },

    productSearch: function() {
      $(R.Const.MAIN).empty();
      var productSearchView = new R.View.ProductSearch({
        model: this.productModel
      });
      $(R.Const.MAIN).append(productSearchView.render().el);
    },

    productPage: function() {
      $(R.Const.MAIN).empty();
      var productView = new R.View.ProductView({model: this.productModel});
      $(R.Const.MAIN).append(productView.render().el);
    }
  });

  $.url = function(name){
    var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
    return results[1] || 0;
  }

  R.main = new R.Router.Main();
  Backbone.history.start({root: 'index.html'});

})(R, _, $, Backbone);
