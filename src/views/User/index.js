const React = require('react-native');
const {
  Component,
  View,
  Text,
  PropTypes
} = React;
const {connect} = require('react-redux');
const Cell = require('../../components/Cell');
const actionUser = require('../../actions/user');

class User extends Component {

  // methods
  render() {
    let {user, username} = this.props;
    user = user[username];

    if (!user) {
      return null;
    }

    return (
      <View style={{
        marginTop: 64
      }}>
        <View>
          <Text>{user.loginname} {user.score}积分</Text>
          <Text>注册时间：{user.create_at}</Text>
        </View>

        <Cell content='发布的专题' toRoute={this.toTopicsPost.bind(this)} />
        <Cell content='参与的专题' toRoute={this.toTopicsReply.bind(this)} />
      </View>
    );
  }

  componentDidMount() {
    const {username} = this.props;

    actionUser.get(username);
  }

  toTopicsPost() {
    const {username} = this.props;
    const {router} = this.context;

    router.toTopicsPost({username}, `${username}发布的专题`);
  }

  toTopicsReply() {
    const {username} = this.props;
    const {router} = this.context;

    router.toTopicsReply({username}, `${username}参与的专题`);
  }
}

User.contextTypes = {
  router: PropTypes.object.isRequired
};

User.propTypes = {
  username: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  state = state.toJS();

  return {
    user: state.user
  };
}

module.exports = connect(mapStateToProps)(User);
