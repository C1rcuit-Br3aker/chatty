import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: `https://chatty-tn-api.herokuapp.com`,
  namespace: `api`,
});
