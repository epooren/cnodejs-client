const React = require('react-native');
const {
  Component,
  View,
  PropTypes
} = React;
const {connect} = require('react-redux');
const TopicList = require('../../components/TopicList');


class TopicsPost extends Component {


  // methods
  render() {
    const {topicsPost, username} = this.props;
    const topics = topicsPost[username];

    return (<TopicList topics={topics} />);
  }

  componentDidMount() {
    // TODO
  }
}

TopicsPost.propTypes = {
  username: PropTypes.string.isRequired,
  topicsPost: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  state = state.toJS();

  return {
    topicsPost: state.topicsPost
  };
}

module.exports = connect(mapStateToProps)(TopicsPost);
