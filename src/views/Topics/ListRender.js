const React = require('react-native');
const {
  ListView,
  View,
  Text
} = React;
const TopicItem = require('../../components/TopicItem');

module.exports = function () {
  const {topics} = this.props;

  if (!topics || topics.status === 'pending') {
    return null;
  }

  const ds = this._getDataSource();

  return (
    <View>
      <ListView
        dataSource={ds}
        renderRow={renderRow}
        />
    </View>
  );
};


function renderRow(topic) {
  return (<TopicItem topic={topic} />);
}
