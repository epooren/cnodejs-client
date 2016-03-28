const React = require('react-native');
const {
  Component,
  Navigator,
  PropTypes
} = React;
const Route = require('./Route');


class Router extends Component {


  // methods
  render() {
    const {initialRoute} = this.props;

    testRoute(initialRoute);

    return (
      <Navigator
        initialRoute={initialRoute}
        renderScene={this._renderScene}
        configureScene={this._configureScene} />
    );
  }

  _renderScene(route, navigator) {
    testRoute(route);

    return (
      <PassNavigator navigator={navigator}>
        <route.Component {...route.props} navigator={navigator} />
      </PassNavigator>
    );
  }

  _configureScene(route) {
    testRoute(route);

    return route.scene;
  }
}


Router.Route = Route;

Router.propTypes = {
  initialRoute: PropTypes.instanceOf(Route)
};


/**
 * 传递router到后代组件
 */
class PassNavigator extends Component {
  getChildContext() {
    return {
      router: this.props.navigator
    };
  }

  render() {
    return this.props.children
  }
}

PassNavigator.childContextTypes = {
  router: PropTypes.object
};

function testRoute(route) {
  if (!Route.isInstance(route)) {
    throw new Error('route不是Route实例');
  }
}


module.exports = Router;
