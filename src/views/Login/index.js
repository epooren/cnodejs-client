/**
 * 登录后的路由：
 *   * 如果有ref，否则返回上一层
 */

const React = require('react-native');
const {
  Component,
  View,
  TextInput,
  Text,
  PropTypes
} = React;
const {connect} = require('react-redux');
const Button = require('../../components/Button');
const actionUser = require('../../actions/user');

class Login extends Component {

  // methods
  render() {
    return Render(this.props, this.context);
  }
}


function Render(props, context) {
  let {token} = props;
  const {router} = context;

  token || (token = '');

  return (
    <View style={{
      flex: 1,
      marginTop: 94,
      marginLeft: 10,
      marginRight: 10
    }}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 40
        }}
        value={token}
        onChangeText={inputToken}
        onSubmitEditing={verify.bind(router, token)}
        placeholder="请输入token" />
      <Button handleClick={verify.bind(router, token)}>Login</Button>
    </View>
  );
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
};

Login.propTypes = {
  token: PropTypes.string
};

function verify(token) {
  actionUser
    .login(token)
    .then((value) => {
      // 如果失败，value = undefined
      if (value) {
        this.back();
      }
    });
}

function inputToken(token) {
  actionUser.setMaster(token);
}


function mapStateToProps(state) {
  state = state.toJS();

  return {
    token: state.master.accesstoken
  };
}



module.exports = connect(mapStateToProps)(Login);
