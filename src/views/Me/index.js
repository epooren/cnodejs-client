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
const {Route} = require('../../components/Navigation');
const TopicsPost = require('../TopicsPost');
const TopicsReply = require('../TopicsReply');

class Me extends Component {
  constructor(props) {
    super(props);

    this.routePost = new Route(TopicsPost, '我发布的专题', {
      username: props.username
    });
    this.routeReply = new Route(TopicsReply, '我参与的专题', {
      username: props.username
    });
  }

  // methods
  render() {
    const {user} = this.props;

    return (
      <View>
        <View>
          <Text>username socre</Text>
          <Text>join-time</Text>
        </View>

        <Cell content="发布的主题" route={this.routePost} />
        <Cell content="参与的主题" route={this.routeReply} />

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

Me.propTypes = {
  username: PropTypes.string.isRequired,
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
