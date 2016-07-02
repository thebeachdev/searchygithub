import Ember from 'ember';
export default Ember.Controller.extend({
  //TODO: need to get this double checked.
  queryParams:['search'],
  search: null,
  //TODO: I want to research this again.
  // queryParams:{
  //   q: {refreshModel: true}
  // },

  searchValue: Ember.computed.oneWay('search'),
  actions: {
    submitSearch() {
      this.set('search', this.get('searchValue'));
      this.send('invalidateModel');
    }
  }
});
