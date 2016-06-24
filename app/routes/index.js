import Ember from 'ember';
// The route can throw back whatever and as many models as you want you just have to load them
// With promise.
export default Ember.Route.extend({
  model() {
    console.log('this got hit.');
    //console.log(param);
    return this.store.findRecord('user','jadex1');// so lets search for users and display
    // their repos.
  }
});
