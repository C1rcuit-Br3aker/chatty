import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);
    this.get(`refreshPage`).perform();
  },

  refreshPage: task(function * () {
    while (true) {
      yield timeout(2000);
      this.store.findAll(`message`, { include: `chatter` });
      const x = $(`.main-container__content`);
      x.scrollTop(10000000);
    }
  }),


  newPost: ``,

  postMessage(newPost) {
    const message = this.store.createRecord(`message`, { content: newPost });

    message.save().then (() => {
      this.set(`newPost`, ``);
    });
  },
});
