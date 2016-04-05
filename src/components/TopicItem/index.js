const React = require('react-native');
const {
  Component,
  View,
  Text,
  TouchableOpacity,
  PropTypes
} = React;

function TopicItem(props, context) {
  const {topic} = props;
  const {router} = context;

  return (
    <View>
      <TouchableOpacity onPress={toTopic.bind(router, topic)}>
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

function toTopic(topic) {
  this.toTopic({topic: topic}, topic.title);
}

TopicItem.contextTypes = {
  router: PropTypes.object.isRequired
};

TopicItem.propTypes = {
  topic: PropTypes.object.isRequired
};

module.exports = TopicItem;
