import Model from 'ember-data/model';
import attr from 'ember-data/attr';
 import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  login: attr('string'),
  url: attr('string'),
  email: attr('string'),
  followers: attr('number'),
  bio: attr('string'),
  location:attr('string'),
  publicRepos: attr('number'),
  repositories: hasMany()
});
