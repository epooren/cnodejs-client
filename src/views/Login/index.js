/**
 * 登录后的路由：
 *   * 如果有ref，否则返回上一层
 */

const React = require('react-native');
const {
  View,
  TextInput,
  Text,
  PropTypes
} = React;
const {connect} = require('react-redux');
const Button = require('../../components/Button');


function Login(props) {
  let {token} = props;

  token || (token = '');

  return (
    <View style={{
      flex: 1,
      marginTop: 64
    }}>
      <TextInput
        value={token}
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



module.exports = connect(mapStateToProps)(Login);
