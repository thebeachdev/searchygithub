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
    if(params.q) {
      return this.get('store').findRecord('user', params.q);
    } else {
      return [];// return an error. If no params are given say that,
      // if it's an error 
    }
  }
});
