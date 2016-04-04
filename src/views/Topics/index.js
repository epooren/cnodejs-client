const React = require('react-native');
const {
  Component,
  View,
  SegmentedControlIOS,
  PropTypes
} = React;
const {connect} = require('react-redux');
const TopicList = require('../../components/TopicList');
const mapTabs = ['all', 'ask', 'share', 'job', 'good'];


class Topics extends Component {

  // methods
  render() {
    const {topics} = this.props;
    const {selectedTab} = topics;
    const data = topics[selectedTab];

    if (!data) {
      return null;
    }

    return (
      <View>
        <SegmentedControlIOS
          selectedIndex={mapTabs.indexOf(selectedTab)}
          values={mapTabs}
          onValueChange={this.select} />
        <TopicList topics={data} />
      </View>
    );
  }

  componentDidMount() {
    // TODO
  }

  select() {
    // TODO
  }
}

Topics.propTypes = {
  topics: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  state = state.toJS();

  return {
    topics: state.topics
  };
}

module.exports = connect(mapStateToProps)(Topics);
