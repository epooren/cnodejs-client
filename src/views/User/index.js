const React = require('react-native');
const {
  Component,
  View,
  Text,
  PropTypes
} = React;
const {connect} = require('react-redux');
const Cell = require('../../components/Cell');
const TopicsPost = require('../TopicsPost');
const TopicsReply = require('../TopicsReply');
const {Route} = require('../../components/Navigation');
const actionUser = require('../../actions/user');


class User extends Component {
  constructor(props) {
    super(props);

    const {username} = props;

    this.routePost = new Route(TopicsPost, `${username}发布的专题`, {
      username: username
    });
    this.routeReply = new Route(TopicsReply, `${username}参与的专题`, {
      username: username
    });
  }

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

        <Cell content="发布的专题" route={this.routePost} />
        <Cell content="参与的专题" route={this.routeReply} />
      </View>
    );
  }

  componentDidMount() {
    const {username} = this.props;

    actionUser.get(username);
  }
}

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
