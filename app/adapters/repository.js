import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  headers: {
    Authorization: "05cb839c1d63c815f3880dbe42f40a74ec020c8b"
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
