const React = require('react-native');
const {
  View,
  Text,
  TouchableHighlight
} = React;


module.exports = function () {
  const {topic} = this.props;

  return (
    <TouchableHighlight onPress={this.navToTopic.bind(this)}>
      <View>
        <View><Text>{topic.title}</Text></View>
        <View>
          <Text>{topic.tab}</Text>
          <Text>{topic.author.loginname}</Text>
          <Text>{topic.create_at}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
