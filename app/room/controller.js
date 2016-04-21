import Ember from 'ember';

export default Ember.Controller.extend({
  newPost: ``,

  postMessage(newPost) {
    const message = this.store.createRecord(`message`, { content: newPost });

    message.save().then (() => {
      this.set(`newPost`, ``);
    });
  },
});
