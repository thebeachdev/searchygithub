import Ember from 'ember';
export default Ember.Controller.extend({
  queryParams:['q'],
  q:null,

  actions: {
    submitSearch() {
      this.set('q', this.get('searchValue'));
    }
  }
});
