const React = require('react-native');
const {
  Component,
  TabBarIOS
} = React;
const List = require('./List');

const mapTabs = ['ask', 'share', 'job', 'good'];

class TabBar extends AnotherClass {

  // methods
  render() {
    const {tab} = this.props;

    return (
      <TabBarIOS>{mapTabs.map((value) => {
        return (
          <TabBarIOS.Item
            title={value}
            selected={tab === value}
            onPress={}>
            <List tab={value} />
          </TabBarIOS.Item>
        );
      })}</TabBarIOS>
    );
  }
}
