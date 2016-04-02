const React = require('react-native');
const {
  View,
  Text,
  TouchableOpacity,
  TextInput
} = React;

module.exports = function () {
  return (
    <View>
      <View>
        <TextInput onChangeText={this.inputToken} />
      </View>

      <View>
        <TouchableOpacity onPress={this.login}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
