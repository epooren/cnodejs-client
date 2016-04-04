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

function Cell(props, context) {
  const {content, route} = props;
  const {navigator} = context;

  return (
    <View>
      <TouchableOpacity onPress={() => navigator.push(route)}>
        <Text>{content}</Text>
      </TouchableOpacity>
    </View>
  );
}

Cell.contextTypes = {
  navigator: PropTypes.instanceOf(Navigator).isRequired
};

Cell.propsTypes = {
  content: PropTypes.string.isRequired,
  route: PropTypes.instanceOf(Route).isRequired
};

module.exports = Cell;
