const React = require('react-native');
const {
  Component,
  View,
  Text
} = React;


class List extends Component {

  // methods
  render() {
    const {tab} = this.props;

    return (<View><Text>{tab}</Text></View>);
  }
}

module.exports = List;
