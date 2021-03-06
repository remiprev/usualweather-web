import Ember from 'ember';

const {Route} = Ember;

export default Route.extend({
  title(tokens) {
    tokens = Ember.makeArray(tokens);

    switch (tokens.length) {
      case 1:
        return `The usual weather in ${tokens[0]}…`;
      case 2:
        return `The usual weather in ${tokens[0]} around ${tokens[1]}`;
      default:
        return `The usual weather in…`;
    }
  }
});
