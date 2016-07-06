import ApplicationAdapter from './application';
import config from '../config/environment';
export default ApplicationAdapter.extend({
  headers: {
    Authorization: config.githubKey
    // let's call config, and make this a variable that is entered from command-line
  }
  // findRecord(store, type, snapthot){
  //
  // }
  //TODO: change from updateRecord to findRecord
  // updateRecord(store, type, snapshot) {
  //   const url = `${this.host}/user/starred/${snapshot.attr('fullName')}`;
  //   return this.ajax(url, "PUT", {});
  // }
});
