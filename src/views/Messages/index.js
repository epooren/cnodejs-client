const React = require('react-native');
const {
  Component,
  View,
  PropTypes
} = React;
const {connect} = require('react-redux');
const Cell = require('../../components/Cell');
const MessagesReaded = require('../MessagesReaded');
const MessagesUnread = require('../MessagesUnread');
const {Route} = require('../../components/Navigation');

const routeUnread = new Route(MessagesUnread, '未读消息');
const routeReaded = new Route(MessagesReaded, '未读消息');

class Messages extends Component {

  // methods
  render() {
    return (
      <View>
        <Cell content="未读消息" route={routeUnread} />
        <Cell content="已读消息" route={routeUnread} />
      </View>
    );
  }

  componentDidMount() {
    // TODO
  }
}

Messages.propTypes = {
  token: PropTypes.string.isRequired
};


function mapStateToProps(state) {
  state = state.toJS();

  return {
    token: state.master.accesstoken
  };
}

const MessagesContainer = connect(mapStateToProps)(Messages);
module.exports = MessagesContainer
