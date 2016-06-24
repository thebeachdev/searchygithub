import Ember from 'ember';

export default Ember.Component.extend({

  acitons:{
    submit(){
      const text = this.get('query');
      this.get('searchUserAndRepos')(text);

      this.set('user', "");
      this.$('input').focus();
    }
  }
});
