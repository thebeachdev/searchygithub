import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    searchRepos(text){
      this.get('repos').pushObject({text: text});// Change this line to the query 
    }
  }
});
