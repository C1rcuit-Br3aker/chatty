import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  saveChatter(attr) {
    const chatter = this.store.createRecord(`chatter`, attr);

    chatter.save().then(() => {
      return this.get(`session`).authenticate(`authenticator:application`, attr.email, attr.password);
    });
  },
});
