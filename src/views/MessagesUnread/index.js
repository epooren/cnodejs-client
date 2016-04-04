const React = require('react-native');
const {
  Component,
  View,
  Text,
  PropTypes
} = React;
const {connect} = require('react-redux');

class MessagesUnread extends Component {

  // methods
  render() {
    return (
      <View>
        <Text>未读消息</Text>
      </View>
    );
  }

  componentDidMount() {
    // TODO
  }
}

MessagesUnread.propTypes = {};

function mapStateToProps(state) {
  state = state.toJS();

  return {};
}

const MessagesUnreadContainer = connect()(MessagesUnread);
module.exports = MessagesUnreadContainer;
