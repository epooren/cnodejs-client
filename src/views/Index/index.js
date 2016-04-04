const React = require('react-native');
const {
  TabBarIOS
} = React;
const {connect} = require('react-redux');
const Topics = require('../Topics');
const Messages = require('../Messages');
const Me = require('../Me');
const actionTab = require('../../actions/tab');


function Index(props) {
  const {tab} = props;

  return (
    <TabBarIOS>
      <TabBarIOS.Item
        systemIcon="featured"
        title="Topics"
        selected={tab === 'topics'}
        onPress={select('topics')}>
        <Topics />
      </TabBarIOS.Item>
      <TabBarIOS.Item
        systemIcon="contacts"
        title="Messages"
        selected={tab === 'messages'}
        onPress={select('messages')}>
        <Messages />
      </TabBarIOS.Item>
      <TabBarIOS.Item
        systemIcon="bookmarks"
        title="Me"
        selected={tab === 'me'}
        onPress={select('me')}>
        <Me />
      </TabBarIOS.Item>
    </TabBarIOS>
  );
}

function select(tab) {
  actionTab.select(tab);
}


function mapStateToProps(state) {
  state = state.toJS();

  return {
    tab: state.selectedTab
  };
}

const IndexContainer = connect(mapStateToProps)(Index);

module.exports = IndexContainer;
