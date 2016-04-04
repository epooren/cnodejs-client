const React = require('react-native');
const {
  Component,
  View,
  Text,
  PropTypes
} = React;
const {connect} = require('react-redux');

class MessagesReaded extends Component {

  // methods
  render() {
    return (
      <View>
        <Text>已读消息</Text>
      </View>
    );
  }

  componentDidMount() {
    // TODO
  }
}

MessagesReaded.propTypes = {};

function mapStateToProps(state) {
  state = state.toJS();

  return {};
}

module.exports = connect()(MessagesReaded);
