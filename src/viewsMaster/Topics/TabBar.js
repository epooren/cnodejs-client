const React = require('react-native');
const {
  Component
} = React;
const actionTopics = require('../../actions/topics');
const Render = require('./TabBarRender');

class TabBar extends Component {

  // methods
  render() {
    return Render.call(this);
  }

  select(value) {
    actionTopics.select(value);
    actionTopics.get(value);
  }
}

module.exports = TabBar;
