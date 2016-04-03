const React = require('react-native');
const {
  View,
  SegmentedControlIOS
} = React;
const List = require('./List');
const mapTabs = ['all', 'ask', 'share', 'job', 'good'];

module.exports = function () {
  const {topics} = this.props;
  const {selectedTab} = topics;

  return (
    <View style={{
      marginTop: 20
    }}>
      <SegmentedControlIOS
        selectedIndex={mapTabs.indexOf(selectedTab)}
        values={mapTabs}
        onValueChange={this.select} />
      <List tab={selectedTab} topics={topics[selectedTab]} />
    </View>
  );
};

