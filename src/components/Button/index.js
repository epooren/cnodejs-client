const React = require('react-native');
const {
  TouchableOpacity,
  Text,
  Children,
  PropTypes
} = React;

function Button(props) {
  const {handleClick, children} = props;

  return (
    <TouchableOpacity onPress={handleClick}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired
};

module.exports = Button;
