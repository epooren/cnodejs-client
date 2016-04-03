const React = require('react-native');
const TabBar = require('./TabBar');

module.exports = function () {
  const {topics} = this.props;

  return (<TabBar topics={topics} />);
};
