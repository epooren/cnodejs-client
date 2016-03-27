const React = require('react-native');
const {
  Component,
  View
} = React;
const {connect} = require('react-redux');
const TabBar = require('./TabBar');

class Topics extends Component {


  // methods
  render() {
    const {topics} = this.props;

    return <TabBar topics={topics} />
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
