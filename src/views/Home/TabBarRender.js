const React = require('react-native');
const {TabBarIOS} = React;
const Topics = require('../Topics');
const Messages = require('../Messages');
const Me = require('../Me');

const mapTabs = ['topics', 'messages', 'me'];

module.exports = function () {
  const {tab} = this.props;

  return (
    <TabBarIOS>
      <TabBarIOS.Item
        systemIcon="featured"
        title="Topics"
        selected={tab === 'topics'}
        onPress={this.select.bind(this, 'topics')}>
        <Topics />
      </TabBarIOS.Item>
      <TabBarIOS.Item
        systemIcon="contacts"
        title="Messages"
        selected={tab === 'messages'}
        onPress={this.select.bind(this, 'messages')}>
        <Messages />
      </TabBarIOS.Item>
      <TabBarIOS.Item
        systemIcon="bookmarks"
        title="Me"
        selected={tab === 'me'}
        onPress={this.select.bind(this, 'me')}>
        <Me />
      </TabBarIOS.Item>
    </TabBarIOS>
  );
};

