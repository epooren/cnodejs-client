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

    console.log(this.context);

    return (<TabBar tab={tab} />);
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps(state) {
  state = state.toJS();

  return {
    tab: state.selectedTab
  };
}

const HomeContainer = connect(mapStateToProps)(Home);

module.exports = HomeContainer;
