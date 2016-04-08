const React = require('react-native');
const {
  View,
  Text,
  TouchableOpacity,
  PropTypes
} = React;

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


Cell.propTypes = {
  content: PropTypes.string.isRequired,
  toRoute: PropTypes.func.isRequired
};

module.exports = Cell;
