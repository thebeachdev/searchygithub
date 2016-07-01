import Ember from 'ember';
// The route can throw back whatever and as many models as you want you just have to load them
// With promise.
export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  queryParams:{
    q: {
      refreshModel: true,
    }
  },

  model(params) {

    if(!params.login) {
      return [];
    }
    console.log('this is the param object:'+JSON.stringify(params.login));
    return this.store.findRecord('user', params.login);// so lets search for users and display
    // their repos.
    // https://github.com/users/jadex1 <= id
    // https://github.com/users/:id`
    // this.store.query('user',{login:params.login}).then(function(stuff){
    //   return stuff;
    // });
    // this.store.queryRecord('user', {login:params.login}).then(function(stuff){
    //
    // });
  },
  acitons: {
    submitSearch(params) {
      // queryParams: {
      //   q: this.get('searchValue')
      // }
      return this.get('ajax').request('search/users?q='+params.login,{
        method: 'GET',
        data:{
          foo:'bar'
        }
      });
    },
      invalidateModel() {
      Ember.Logger.log('Model Refreshing');
      this.refresh();
    }
  }
});
