const React = require('react-native');
const {
  Navigator,
  PropTypes
} = React;
const {FloatFromRight} = Navigator.SceneConfigs;

class Route {
  constructor({Component, props, scene = FloatFromRight} = args) {
    if (getAncestors(Component).indexOf(React.Component) === -1) {
      throw new Error('Component不是React.Component子类');
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




getAncestors.result = [];

function getAncestors(c) {
    let parent = Object.getPrototypeOf(c);

    if (parent) {
        getAncestors.result.push(parent);
        return getAncestors(parent);
    } else {
        let result = getAncestors.result;
        getAncestors.result = [];
        return result;
    }
}

module.exports = Route;
