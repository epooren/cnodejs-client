const React = require('react-native');
const {
  View,
  ScrollView,
  Text,
  TouchableHighlight
} = React;

module.exports = function () {
  const {topic} = this.props;

  return (
    <ScrollView style={{flex: 1}}>
      <View><Text>{topic.title}</Text></View>

      <View>
        <Text>{topic.author.loginname}</Text>
        <Text>{topic.create_at}</Text>
      </View>

      <View><Text>{topic.content}</Text></View>
    </ScrollView>
  );
};
