import Ember from 'ember';
// The route can throw back whatever and as many models as you want you just have to load them
// With promise.
export default Ember.Route.extend({
  // queryParams: ['query'],
  // query: null,

  model() {
    //console.log('this is the param object:'+JSON.stringify(params));
    return this.store.findRecord('user', 'jadex1');// so lets search for users and display
    // https://github.com/users/jadex1
    // their repos.
    // this.store.query('user',{login:params.login}).then(function(stuff){
    //   return stuff;
    // });
    // this.store.queryRecord('user', {login:params.login}).then(function(stuff){
    //
    // });
  }
});
