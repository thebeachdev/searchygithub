import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  htmlUrl: attr('string'),
  forksCount:attr('number'),
  stargazersCount:attr('number'),
  watchersCount: attr('number'),
  gitUrl:attr('string'),
});
