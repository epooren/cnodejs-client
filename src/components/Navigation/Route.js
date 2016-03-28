const React = require('react-native');
const {
  PropTypes
} = React;

class Route {
  constructor(Component, props = {}) {
    if (getAncestors(Component).indexOf(React.Component) === -1) {
      throw new Error('Component不是React.Component子类');
    }

    this.Component = Component;
    this.props = props;
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
