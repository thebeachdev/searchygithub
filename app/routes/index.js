import Ember from 'ember';
// The route can throw back whatever and as many models as you want you just have to load them
// With promise.
export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel:true,
      replace: true
    }
  },
  model(params){
    if(!params.q) {
      return [];
    } else {
      return this.get('store').findRecord('user', params.q);
    }
  }
});
