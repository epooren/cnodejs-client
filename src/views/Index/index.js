const React = require('react-native');
const {
  TabBarIOS,
  PropTypes
} = React;
const {connect} = require('react-redux');
const Topics = require('../Topics');
const Messages = require('../Messages');
const Me = require('../Me');
const actionTab = require('../../actions/tab');


function Index(props, context) {
  const {tab, master} = props;
  const {router} = context;

  return (
    <TabBarIOS>
      <TabBarIOS.Item

        title='Topics'
        selected={tab === 'topics'}
        onPress={select.bind(null, 'topics', master, router)}>
        <Topics />
      </TabBarIOS.Item>
      <TabBarIOS.Item

        title='Messages'
        selected={tab === 'messages'}
        onPress={select.bind(null, 'messages', master, router)}>
        <Messages />
      </TabBarIOS.Item>
      <TabBarIOS.Item

        title='Me'
        selected={tab === 'me'}
        onPress={select.bind(null, 'me', master, router)}>
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
  router: PropTypes.object.isRequired
};



function select(tab, master, router) {
  if (!master.username) {
    router.toLogin();
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
