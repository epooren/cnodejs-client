const React = require('react-native');
const {
  Component,
  TabBarIOS
} = React;
const List = require('./List');

const mapTabs = ['all', 'ask', 'share', 'job', 'good'];

class TabBar extends Component {

  // methods
  render() {
    const {topics} = this.props;
    const {selectedTab} = topics;

    return (
      <TabBarIOS style={{
        //backgroundColor: 'blue'
      }}>
      {mapTabs.map((value) => {
        return (
          <TabBarIOS.Item
            key={value}
            title={value}
            selected={value === selectedTab}
            onPress={this.select}>
            <List tab={value} topics={topics[value]} />
          </TabBarIOS.Item>
        );
      })}
      </TabBarIOS>
    );
  }

  select() {

  }
}

module.exports = TabBar;
