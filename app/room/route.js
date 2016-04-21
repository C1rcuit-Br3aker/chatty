import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Route.extend({
  model() {
    return this.store.findAll(`message`);
  },


  // setupController() {
  //   this.get(`refreshPage`);
  // },
  //
  // refreshPage: task(function * () {
  //   yield timeout(2000);
  //   return this.store.findAll(`message`);
  // }),
});
