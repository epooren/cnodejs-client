const React = require('react-native');
const {
  Text,
  View,
  TouchableHighlight
} = React;


module.exports = function (props, state) {
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableHighlight onPress={this.login}>
        <Text>Login</Text>
      </TouchableHighlight>
    </View>
  );
};
