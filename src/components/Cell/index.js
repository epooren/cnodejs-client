const React = require('react-native');
const {
  Component,
  View,
  Text,
  TouchableOpacity,
  Navigator,
  PropTypes
} = React;
const {Route} = require('../Navigation');


class Cell extends Component {

  render() {
    const {content, route} = this.props;

    return (
      <View>
        <TouchableOpacity onPress={this.nav.bind(this, route)}>
          <Text>{content}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  nav(route) {
    const {navigator} = this.context;

    navigator.push(route);
  }
}

Cell.contextTypes = {
  navigator: PropTypes.instanceOf(Navigator)
};

Cell.propTypes = {
  content: PropTypes.string.isRequired,
  route: PropTypes.instanceOf(Route).isRequired
};

module.exports = Cell;
