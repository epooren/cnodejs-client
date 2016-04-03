const React = require('react-native');
const {
  Component
} = React;
const {connect} = require('react-redux');
const Render = require('./IndexRender');

class Topics extends Component {

  // methods
  render() {
    return Render.call(this);
  }
}

function mapStateToProps(state) {
  state = state.toJS();

  return {
    topics: state.topics
  };
}

const TopicsContainer = connect(mapStateToProps)(Topics);

module.exports = TopicsContainer;
