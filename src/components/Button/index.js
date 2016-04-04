const React = require('react-native');
const {
  TouchableOpacity,
  Text,
  Children,
  PropTypes
} = React;

function Button() {
  const {handleClick, children} = this.props;

  return (
    <TouchableOpacity onPress={handleClick}>
      <Text>{Children.only(children)}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired
};

module.exports = Button;
