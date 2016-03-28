const React = require('react-native');
const {
  Component,
  PropTypes,
  Navigator
} = React;
const Topic = require('../../views/Home');
const {Route} = require('../Navigation');
const Render = require('./IndexRender');

class TopicItem extends Component {

  // methods
  render() {
    return Render.call(this);
  }

  navToTopic() {
    const {navigator} = this.context;
    const {topic} = this.props;
    const route = new Route({
      Component: Topic,
      props: {topic: topic}
    });

    navigator.push(route);
  }
}

TopicItem.contextTypes = {
  navigator: PropTypes.instanceOf(Navigator)
}

TopicItem.propTypes = {
  topic: PropTypes.object.isRequired
};


module.exports = TopicItem;
