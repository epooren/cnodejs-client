const React = require('react-native');
const {
  ListView,
  View,
  PropTypes
} = React;
const Item = require('../TopicItem');

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

function TopicList() {
  const {topics} = this.props;
  const rows = dataSource.cloneWithRows(topics);

  return (
    <View>
      <ListView
        dataSource={rows}
        renderRow={renderRow} />
    </View>
  );
}

TopicList.propTypes = {
  topics: PropTypes.array.isRequired
};

function renderRow(topic) {
  return (<Item topic={topic} />);
}



module.exports = TopicList;
