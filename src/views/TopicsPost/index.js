const React = require('react-native');
const {
  View,
  PropTypes
} = React;
const {connect} = require('react-redux');
const TopicList = require('../../components/TopicList');

function TopicsPost(props) {
  const {userTopics, username} = props;
  const topics = userTopics[username];

  return (
    <View style={{
      marginTop: 64
    }}>
      <TopicList topics={topics} />
    </View>
  );
}

TopicsPost.propTypes = {
  username: PropTypes.string.isRequired,
  userTopics: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  state = state.toJS();

  return {
    userTopics: state.userTopics
  };
}

module.exports = connect(mapStateToProps)(TopicsPost);
