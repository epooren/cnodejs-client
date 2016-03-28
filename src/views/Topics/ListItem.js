const React = require('react-native');
const {
  Component,
  View,
  Text,
  TouchableHighlight
} = React;


class ListItem extends Component {

  render() {
    const {topic} = this.props;

    <TouchableHighlight onPress={this.toDetail}>
      <View><Text>{topic.title}</Text></View>
      <View>
        <Text>{topic.tab}</Text>
        <Text>{topic.author.loginname}</Text>
        <Text>{topic.create_at}</Text>
      </View>
    </TouchableHighlight>
  }

  toDetail() {

  }
}

module.exports = ListItem;
