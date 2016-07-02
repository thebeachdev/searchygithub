import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // need to change /user-profile to "/"
  // this.route('search', function() {
  //   this.route('users');
  //   this.route('repositories');
  // });
});

export default Router;
