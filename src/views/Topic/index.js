const React = require('react-native');
const {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  PropTypes
} = React;

function Topic(props, context) {
  const {topic} = props;
  const {router} = context;
  const username= topic.author.loginname;

  return (
    <ScrollView style={{
      marginTop: 64,
      flex: 1
    }}>
      <View><Text>{topic.title}</Text></View>

      <View>
        <TouchableOpacity onPress={toUser.bind(router, username)}>
          <Text style={{
            color: 'blue',
            padding: 8
          }}>{username}</Text>
        </TouchableOpacity>

        <Text>{topic.create_at}</Text>
      </View>

      <View><Text>{topic.content}</Text></View>
    </ScrollView>
  );
}

function toUser(username) {
  this.toUser({username: username}, username);
}


Topic.contextTypes = {
  router: PropTypes.object.isRequired
};

Topic.propTypes = {
  topic: PropTypes.object.isRequired
};

module.exports = Topic;
