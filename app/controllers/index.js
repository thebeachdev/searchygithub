import Ember from 'ember';

export default Ember.Controller.extend({
  //TODO: need to get this double checked.
  //TODO: I want to research this again.
  // queryParams:{
  //   q: {refreshModel: true}
  // },
  queryParams: ['q'],
  q: null,
  searchResuls: [],
  // searchValue: Ember.computed.oneWay('search'),
  peformSearch: function(){

  },
  acitons:{
    submitSearch(){
      const text = this.get('searchValue');
      this.model(text);
      this.$('input').focus();
      return this.model(text);
    }
  }
});
