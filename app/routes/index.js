import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findRecord('user', 'jadex1');// so lets search for users and display their repos.
  }
});
