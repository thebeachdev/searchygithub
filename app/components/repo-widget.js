import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    searchUserAndRepos(text){
      this.get('repos').pushObject({text: text});// Change this line to the query
    }
  }
});
