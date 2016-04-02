const React = require('react-native');
const {
  View
} = React;
const Cell = require('../../components/Cell');

module.exports = function () {
  return (
    <View>
      <Cell content="未读消息" route={this.routeUnread} />
      <Cell content="已读消息" route={this.routeReaded} />
    </View>
  );
};
