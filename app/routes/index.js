import Ember from 'ember';
// The route can throw back whatever and as many models as you want you just have to load them
// With promise.
export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel:true}
  },
  model(params){
    console.log("value of params: "+JSON.stringify(params));
    console.log("value of params.q: "+JSON.stringify(params.q));
    if(!params.q) {
      console.log('No value Entered.');
      return [];
    } else {
        console.log('Searching for value');
      return this.get('store').findRecord('user', params.q);
    }
  }
});
