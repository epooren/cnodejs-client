const React = require('react-native');
const {Component} = React;
const {connect} = require('react-redux');
const TabBar = require('./TabBar');
const Navigation = require('../../components/Navigation');
//const Render = require('./IndexRender');

class Home extends Component {


  // methods
  render() {
    const {tab} = this.props;

    return (<TabBar tab={tab} />);
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
