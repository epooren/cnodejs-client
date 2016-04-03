const React = require('react-native');
const {
  Component,
  ListView
} = React;
const actionTopics = require('../../actions/topics');
const Render = require('./ListRender');

class List extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
  }

  // methods
  render() {
    return Render.call(this);
  }

  componentDidMount() {
    const {tab} = this.props;

    actionTopics.get(tab);
  }

  _getDataSource() {
    const {topics} = this.props;

    return this.ds.cloneWithRows(topics.data);
  }
}

module.exports = List;
