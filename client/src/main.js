R.Router = R.Router || {};

(function(R, _, $, Backbone) {
  'use strict';

  R.Router.Main = Backbone.Router.extend({

    routes: {
      'login': 'login',
      'init-person?*path': 'initPerson',
      'person-input': 'personInput',
      'person-input?*path': 'personInput',
      'product-search': 'productSearch',
      'product-page': 'productPage',
      '*path':  'start'
    },

    initialize: function() {
      var self = this;
      this.productModel = new R.Model.Product();
      this.bind('product-search-page', function() {
        self.navigate('product-search', {trigger: true});
      });
      this.bind('product-page', function() {
        self.navigate('product-page', {trigger: true});

      });
    },

    start: function() {
      var sid = window.localStorage.getItem('sid');
      if(sid === null) {
        var url = 'http://pacific-eyrie-4115.herokuapp.com/create_food_api_session?uid=rhino_user&devid=rhino_device';        
        $.ajax({
           url: url,
               type: 'GET',
               success: function(data) {
                   console.log('session id successfully returned: ' + data)
                   window.localStorage.setItem('sid', data);
               },
               error: function(data) {
                   console.log(data);
               }
            });
        this.navigate('product-search', {trigger: true});
      } else {
          this.navigate('product-search', {trigger: true});
      }
      // window.location.reload();
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
      $.totalStorage('auth_token', authToken);
      $.totalStorage('user_id', userId);
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
      var productView = new R.View.Product({model: this.productModel});
      $(R.Const.MAIN).append(productView.render().el);
    }
  });

  $.url = function(name){
    var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
    if (results) {
      return results[1] || 0;
    } else { return 0; }
  }

  R.main = new R.Router.Main();
  Backbone.history.start({root: 'index.html'});

})(R, _, $, Backbone);
