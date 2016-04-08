const React = require('react-native');
const {
  TouchableOpacity,
  Text,
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
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
};

module.exports = Button;
