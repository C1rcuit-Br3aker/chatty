import Ember from 'ember';

export default Ember.Controller.extend({
  saveChatter(attr) {
    const chatter = this.store.createRecord(`chatter`, attr);

    chatter.save().then(() => {
      console.log(`it saved!`);
    });
  },
});
