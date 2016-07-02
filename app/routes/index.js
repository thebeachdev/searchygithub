import Ember from 'ember';
// The route can throw back whatever and as many models as you want you just have to load them
// With promise.
export default Ember.Route.extend({

  model(params){
    return this.get('store').findRecord('users', params.user_id);
  }
});
