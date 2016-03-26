const React = require('react-native');
const {
  Navigator,
  PropTypes
} = React;
const {FloatFromRight} = Navigator.SceneConfigs;

class Route {
  constructor({Component, props, scene = FloatFromRight} = args) {
    // TODO 验证Component参数必须存在 且必须是Component
    if (!(Component instanceof React.Component)) {
      throw new Error('Component必须是React.Component实例');
    }

    this.scene = scene;
    this.props = props;
    this.Component = Component;
  }

  // methods
}

Route.isInstance = function (obj) {
  return obj instanceof Route;
};

module.exports = Route;
