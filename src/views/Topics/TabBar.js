const React = require('react-native');
const {
  Component,
  View,
  SegmentedControlIOS
} = React;
const actionTopics = require('../../actions/topics');
const List = require('./List');

const mapTabs = ['all', 'ask', 'share', 'job', 'good'];

class TabBar extends Component {

  // methods
  render() {
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
  }

  select(value) {
    actionTopics.select(value);
  }
}

module.exports = TabBar;
