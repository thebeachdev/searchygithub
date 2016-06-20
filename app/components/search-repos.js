import Ember from 'ember';

export default Ember.Component.extend({
  acitons:{
    submitQuery(){
      const text = this.get('query');
      this.get('searchRepos')(text);
      this.set('text', "");
      this.$('input').focus();
    }
  }
});
