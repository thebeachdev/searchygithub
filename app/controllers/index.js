import Ember from 'ember';
export default Ember.Controller.extend({
  queryParams:['q'],
  q:null,

  actions: {
    submitSearch() {
      console.log('submitSearch clicked');
      this.set('q', this.get('searchValue'));
    }
  }

  // //TODO: need to get this double checked.
  // queryParams:['search'],
  // search: null,
  // //TODO: I want to research this again.
  // // queryParams:{
  // //   q: {refreshModel: true}
  // // },
  //
  // searchValue: Ember.computed.oneWay('search'),
  // actions: {
  //   submitSearch() {
  //     this.set('search', this.get('searchValue'));
  //     this.send('invalidateModel');
  //   }
  // }
});
