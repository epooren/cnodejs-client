const React = require('react-native');
const {
  Component,
  View,
  Text,
  PropTypes
} = React;
const {connect} = require('react-redux');

class Message extends Component {


  // methods
  render() {
    const {id, message} = this.props;

    return (
      <View>
        <Text>{id}</Text>
      </View>
    );
  }

  componentDidMount() {
    // TODO
  }
}

Message.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.object
};


function mapStateToProps(state) {
  state = state.toJS();

  return {
    message: state.message
  };
}

const MessageContainer = connect(mapStateToProps)(Message);

module.exports = MessageContainer;
