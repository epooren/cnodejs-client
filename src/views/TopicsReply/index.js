const React = require('react-native');
const {
  View,
  PropTypes
} = React;
const {connect} = require('react-redux');
const TopicList = require('../../components/TopicList');


function TopicsReply(props) {
  const {replyTopics, username} = props;
  const topics = replyTopics[username];

  return (
    <View style={{
      marginTop: 64
    }}>
      <TopicList topics={topics} />
    </View>
  );
}


TopicsReply.propTypes = {
  username: PropTypes.string.isRequired,
  replyTopics: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  state = state.toJS();

  return {
    replyTopics: state.replyTopics
  };
}

module.exports = connect(mapStateToProps)(TopicsReply);
