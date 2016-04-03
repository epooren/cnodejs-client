const React = require('react-native');
const {
  View,
  TextInput,
  Text,
  PropTypes
} = React;
const {connect} = require('react-redux');
const Button = require('../../components/Button');


function Login() {
  const {toekn} = this.props;

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        value={toekn}
        onChangeText={inputToken}
        onSubmitEditing={verify.bind(null, token)}
        placeholder="请输入token" />
      <Button handleClick={verify.bind(null, token)}>
        Login
      </Button>
    </View>
  );
}

Login.propTypes = {
  token: PropTypes.string
};

function verify(token) {
  // TODO
}

function inputToken(token) {
  // TODO
}


function mapStateToProps(state) {
  state = state.toJS();

  return {
    token: state.master.accesstoken
  };
}


const LoginContainer = connect(mapStateToProps)(Login);

module.exports = LoginContainer;
