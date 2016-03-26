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
      <route.Component {...route.props} navigator={navigator} />
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

function testRoute(route) {
  if (!Route.isInstance(route)) {
    throw new Error('route必须是Route实例');
  }
}


module.exports = Router;
