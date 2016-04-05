const React = require('react-native');
const {
  Component,
  View,
  PropTypes
} = React;
const {connect} = require('react-redux');
const Cell = require('../../components/Cell');


class Messages extends Component {

  // methods
  render() {
    const {router} = this.context;

    return (
      <View>
        <Cell content="未读消息" toToute={() => router.toMessagesUnread} />
        <Cell content="已读消息" toToute={() => router.toMessagesReaded} />
      </View>
    );
  }

  componentDidMount() {
    // TODO
  }
}

Messages.contextTypes = {
  router: PropTypes.object.isRequired
};

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
