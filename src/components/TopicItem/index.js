const React = require('react-native');
const {
  Component,
  View,
  Text,
  TouchableOpacity,
  PropTypes,
  Navigator
} = React;
const Topic = require('../../views/Topic');
const {Route} = require('../Navigation');

function TopicItem(props, context) {
  const {topic} = props;
  const {navigator} = context;

  return (
    <View>
      <TouchableOpacity onPress={navToTopic.bind(null, navigator, topic)}>
        <View>
          <View><Text>{topic.title}</Text></View>
          <View>
            <Text>{topic.tab}</Text>
            <Text>{topic.author.loginname}</Text>
            <Text>{topic.create_at}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function navToTopic(navigator, topic) {
  const route = new Route(Topic, topic.title, {
    id: topic.id
  });

  navigator.push(route);
}

TopicItem.contextTypes = {
  navigator: PropTypes.instanceOf(Navigator)
}

TopicItem.propTypes = {
  topic: PropTypes.object.isRequired
};

module.exports = TopicItem;
