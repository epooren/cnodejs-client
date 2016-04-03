const React = require('react-native');
const {Component} = React;
const {connect} = require('react-redux');
const Render = require('./IndexRender');

class Home extends Component {


  // methods
  render() {
    return Render.call(this);
  }
}

function mapStateToProps(state) {
  state = state.toJS();

  return {
    tab: state.selectedTab
  };
}

const HomeContainer = connect(mapStateToProps)(Home);

module.exports = HomeContainer;
