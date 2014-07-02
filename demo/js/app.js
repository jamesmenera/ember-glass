App = Ember.Application.create();

App.Router.map(function() {
  this.resource('login');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});


App.LoginRoute = Ember.Route.extend({
  /*
model: function() {
    return ['red', 'yellow', 'blue'];
  }
*/
});
