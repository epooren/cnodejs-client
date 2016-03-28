const React = require('react-native');
const {
  Component,
  ListView,
  View,
  Text,
  TouchableHighlight
} = React;
const actionTopics = require('../../actions/topics');
const TopicItem = require('../../components/TopicItem');

class List extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
  }

  // methods
  render() {
    let {topics} = this.props;

    if (!topics || topics.status === 'pending') {
      return null;
    }

    topics = this.ds.cloneWithRows(topics.data);

    return (
      <ListView
        dataSource={topics}
        renderRow={this._renderRow}
        />
    );
  }

  componentDidMount() {
    const {tab} = this.props;

    actionTopics.get(tab);
  }

  _renderRow(topic) {
    return (<TopicItem topic={topic} />);
  }
}

module.exports = List;
