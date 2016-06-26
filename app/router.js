import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', function(){
    this.route('repos');
  });
  // need to change /user-profile to "/"

  this.route('search-repos');
});

export default Router;
