const React = require('react-native');
const {
  Component,
  Navigator,
  PropTypes,
  StyleSheet
} = React;
const Route = require('./Route');
const DefaultBar = require('./DefaultBar');
const DefaultBarRouteMapper = require('./DefaultBarRouteMapper');

class Router extends Component {


  // methods
  render() {
    const {initialRoute} = this.props;

    checkRoute(initialRoute);

    return (
      <Navigator
        initialRoute={initialRoute}
        renderScene={this._renderScene}
        configureScene={this._configureScene}
        navigationBar={
          <DefaultBar
            routeMapper={DefaultBarRouteMapper}
            style={setyles.navBar} />
        } />
    );
  }

  _renderScene(route, navigator) {
    checkRoute(route);

    return (
      <PassNavigator navigator={navigator}>
        <route.Component {...route.props} navigator={navigator} />
      </PassNavigator>
    );
  }

  _configureScene(route) {
    checkRoute(route);
    const config = route.Component.config || {};
    const scene = config.scene || Navigator.SceneConfigs.FloatFromRight;

    return scene;
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
      navigator: this.props.navigator
    };
  }

  render() {
    return this.props.children
  }
}

PassNavigator.childContextTypes = {
  navigator: PropTypes.object
};

function checkRoute(route) {
  if (!(route instanceof Route)) {
    throw new Error('route不是Route实例');
  }
}

const setyles = StyleSheet.create({
  navBar: {
    backgroundColor: '#666'
  }
});

module.exports = Router;
