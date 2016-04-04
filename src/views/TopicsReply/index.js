const React = require('react-native');
const {
  Component,
  View,
  PropTypes
} = React;
const {connect} = require('react-redux');
const TopicList = require('../../components/TopicList');


class TopicsReply extends Component {


  // methods
  render() {
    const {topicsReply, username} = this.props;
    const topics = topicsReply[username];

    return (<TopicList topics={topics} />);
  }

  componentDidMount() {
    // TODO
  }
}

TopicsReply.propTypes = {
  username: PropTypes.string.isRequired,
  topicsReply: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  state = state.toJS();

  return {
    topicsReply: state.topicsReply
  };
}

module.exports = connect(mapStateToProps)(TopicsReply);
