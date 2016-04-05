const React = require('react-native');
const {
  Component,
  View,
  Text,
  TouchableOpacity,
  PropTypes
} = React;
const {Route} = require('../Navigation');

function Cell(props, context) {
  const {content, toRoute} = props;

  return (
    <View>
      <TouchableOpacity onPress={toRoute}>
        <Text>{content}</Text>
      </TouchableOpacity>
    </View>
  );
}


Cell.propsTypes = {
  content: PropTypes.string.isRequired,
  toRoute: PropTypes.func.isRequired
};

module.exports = Cell;
