const React = require('react-native');
const {
  Component,
  View,
  Text,
  TabBarIOS
} = React;
const Topics = require('../Topics');
const Messages = require('../Messages');
const Me = require('../Me');

const mapTabs = ['topics', 'messages', 'me'];

class TabBar extends Component {

  // methods
  render() {
    const {tab} = this.props;

    return (
      <TabBarIOS style={{
        //backgroundColor: 'red'
      }}>
        <TabBarIOS.Item
          systemIcon="featured"
          title="Topics"
          selected={tab === 'topics'}
          onPress={this.select}>
          <Topics />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="contacts"
          title="Messages"
          selected={tab === 'messages'}
          onPress={this.select}>
          <Messages />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="bookmarks"
          title="Me"
          selected={tab === 'me'}
          onPress={this.select}>
          <Me />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

  select() {

  }
}


module.exports = TabBar;
