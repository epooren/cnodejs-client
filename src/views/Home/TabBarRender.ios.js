const React = require('react-native');
const {
  View,
  Text,
  TabBarIOS,
  TouchableHighlight
} = React;

const mapTabs = ['topics', 'messages', 'me'];

module.exports = function () {
  const {tab} = this.props;

  return (
    <TabBarIOS>
      <TabBarIOS.Item
        systemIcon="history"
        title="Topics"
        selected={tab === 'topics'}
        onPress={this.props}>
        <View><Text>topics</Text></View>
      </TabBarIOS.Item>
      <TabBarIOS.Item
        systemIcon="history"
        title="Messages"
        selected={tab === 'messages'}
        onPress={this.props}>
        <View><Text>messages</Text></View>
      </TabBarIOS.Item>
      <TabBarIOS.Item
        systemIcon="history"
        title="Me"
        selected={tab === 'greenTab'}
        onPress={this.props}>
        <View><Text>me</Text></View>
      </TabBarIOS.Item>
    </TabBarIOS>
  );
};
