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
});
