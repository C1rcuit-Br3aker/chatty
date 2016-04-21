import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll(`message`);
  },

  // const refresh = window.setInterval(model, 2000);
});
