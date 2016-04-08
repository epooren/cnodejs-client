const React = require('react-native');
const {
  ListView,
  PropTypes
} = React;
const Item = require('../TopicItem');

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.id !== r2.id
});

function TopicList(props) {
  const {topics, onEndReached} = props;
  const rows = dataSource.cloneWithRows(topics);

  return (
    <ListView
      style={{
        flex: 1
      }}
      dataSource={rows}
      renderRow={renderRow}
      onEndReached={onEndReached}
      onEndReachedThreshold={64} />
  );
}


TopicList.propTypes = {
  topics: PropTypes.array.isRequired,
  onEndReached: PropTypes.func
};

function renderRow(topic) {
  return (<Item topic={topic} />);
}



module.exports = TopicList;
