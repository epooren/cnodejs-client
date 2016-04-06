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
    let {token} = this.props;
    const {router} = this.context;

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
          onChangeText={this.inputToken}
          onSubmitEditing={this.verify.bind(this)}
          placeholder="请输入token" />
        <Button handleClick={this.verify.bind(this)}>Login</Button>
      </View>
    );
  }

  componentDidMount() {
    const {name} = this.props;

    if (name) {
      // TODO
    }
  }

  verify() {
    const {token} = this.props;
    const {router} = this.context;

    actionUser
      .login(token)
      .then((value) => {
        // 如果失败，value = undefined
        if (value) {
          router.back();
        }
      });
  }

  inputToken(token) {
    actionUser.setMaster(token);
  }
}



Login.contextTypes = {
  router: PropTypes.object.isRequired
};

Login.propTypes = {
  token: PropTypes.string,
  name: PropTypes.string
};



function mapStateToProps(state) {
  state = state.toJS();

  return {
    name: state.master.username,
    token: state.master.accesstoken
  };
}

module.exports = connect(mapStateToProps)(Login);
