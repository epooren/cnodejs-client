const React = require('react-native');
const {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  PropTypes,
  Navigator
} = React;
const User = require('../User');
const {Route} = require('../../components/Navigation');

function Topic(props, context) {
  const {topic} = props;
  const {navigator} = context;
  const username= topic.author.loginname;

  return (
    <ScrollView style={{
      marginTop: 64,
      flex: 1
    }}>
      <View><Text>{topic.title}</Text></View>

      <View>
        <TouchableOpacity onPress={navToUser.bind(navigator, username)}>
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

function navToUser(username) {
  const route = new Route(User, username, {
    username: username
  });

  this.push(route);
}


Topic.contextTypes = {
  navigator: PropTypes.instanceOf(Navigator)
};

Topic.propTypes = {
  topic: PropTypes.object.isRequired
};

module.exports = Topic;
