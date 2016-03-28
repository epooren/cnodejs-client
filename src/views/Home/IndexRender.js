const React = require('react-native');
const TabBar = require('./TabBar');

module.exports = function () {
  const {tab} = this.props;

  return (<TabBar tab={tab} />);
};
