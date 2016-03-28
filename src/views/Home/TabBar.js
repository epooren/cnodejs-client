const React = require('react-native');
const {Component} = React;
const actionTab = require('../../actions/tab');

const Render = require('./TabBarRender');

class TabBar extends Component {

  // methods
  render() {
    return Render.call(this);
  }

  select(tab) {
    actionTab.select(tab);
  }
}


module.exports = TabBar;
