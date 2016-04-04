const React = require('react-native');
const {
  Component,
  View,
  SegmentedControlIOS,
  PropTypes
} = React;
const {connect} = require('react-redux');
const TopicList = require('../../components/TopicList');
const actionTopics = require('../../actions/topics');
const mapTabs = ['all', 'ask', 'share', 'job', 'good'];


class Topics extends Component {

  // methods
  render() {
    let {topics} = this.props;
    const {selectedTab} = topics;
    topics = topics[selectedTab];


    const isEmpty = !topics || !topics.data

    return (
      <View style={{
        flex: 1,
        marginTop: 64,
        marginBottom: 48
      }}>
        <SegmentedControlIOS
          selectedIndex={mapTabs.indexOf(selectedTab)}
          values={mapTabs}
          onValueChange={this.select.bind(this)} />
        {isEmpty || <TopicList topics={topics.data} />}
      </View>
    );
  }

  componentDidMount() {
    const {topics} = this.props;
    const {selectedTab} = topics;

    actionTopics.get(selectedTab);
  }

  select(tab) {
    let {topics} = this.props;
    topics = topics[tab];
    actionTopics.select(tab);

    if (topics) return;

    actionTopics.get(tab);
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
