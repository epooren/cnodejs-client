const React = require('react-native');
const {
  TabBarIOS,
  PropTypes,
  Navigator
} = React;
const {connect} = require('react-redux');
const Topics = require('../Topics');
const Messages = require('../Messages');
const Me = require('../Me');
const actionTab = require('../../actions/tab');
const Login = require('../Login');
const {Route} = require('../../components/Navigation');

const routeLogin = new Route(Login, 'Login');


function Index(props, context) {
  const {tab, master} = props;
  const {navigator} = context;

  return (
    <TabBarIOS>
      <TabBarIOS.Item
        systemIcon="featured"
        title="Topics"
        selected={tab === 'topics'}
        onPress={select.bind(null, 'topics', master, navigator)}>
        <Topics />
      </TabBarIOS.Item>
      <TabBarIOS.Item
        systemIcon="contacts"
        title="Messages"
        selected={tab === 'messages'}
        onPress={select.bind(null, 'messages', master, navigator)}>
        <Messages />
      </TabBarIOS.Item>
      <TabBarIOS.Item
        systemIcon="bookmarks"
        title="Me"
        selected={tab === 'me'}
        onPress={select.bind(null, 'me', master, navigator)}>
        <Me />
      </TabBarIOS.Item>
    </TabBarIOS>
  );
}

Index.propTypes = {
  tab: PropTypes.string.isRequired,
  master: PropTypes.object.isRequired
};

Index.contextTypes = {
  navigator: PropTypes.instanceOf(Navigator).isRequired
};



function select(tab, master, navigator) {
  // TODO
  // 必须登录才能选择
  if (!master.username) {
    navigator.push(routeLogin);
    return;
  }

  actionTab.select(tab);
}


function mapStateToProps(state) {
  state = state.toJS();

  return {
    tab: state.selectedTab,
    master: state.master
  };
}

const IndexContainer = connect(mapStateToProps)(Index);

module.exports = IndexContainer;
