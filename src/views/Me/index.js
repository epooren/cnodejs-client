const React = require('react-native');
const {
  Component,
  View,
  Text,
  PropTypes
} = React;
const {connect} = require('react-redux');
const Cell = require('../../components/Cell');
const Button = require('../../components/Button');

class Me extends Component {

  // methods
  render() {
    // const {user} = this.props;
    const {router} = this.context;

    return (
      <View>
        <View>
          <Text>username socre</Text>
          <Text>join-time</Text>
        </View>

        <Cell content='发布的主题' toRroute={() => router.toTopicsPost()} />
        <Cell content='参与的主题' toRoute={() => router.toTopicsReply()} />

        <Button handleClick={this.logout}>Logout</Button>
      </View>
    );
  }

  componentDidMount() {
    // TODO
  }

  logout() {
    // TODO
  }
}

Me.contextTypes = {
  router: PropTypes.object.isRequired
};

Me.propTypes = {
  username: PropTypes.string,
  user: PropTypes.object
};


function mapStateToProps(state) {
  state = state.toJS();

  const username = state.master.username;
  const user = state.user[username];

  return {username, user};
}

const MeContainer = connect(mapStateToProps)(Me);

module.exports = MeContainer;
