const React = require('react-native');
const {
  Component,
  Navigator,
  PropTypes,
  StyleSheet
} = React;
const Route = require('./Route');
const BarConfig = require('./BarConfig');
const DefaultBar = require('./DefaultBar');
const RouteMapper = require('./RouteMapper');

function Navigation() {
  const {initialRoute} = this.props;

  return (
    <Navigator
     initialRoute={initialRoute}
     renderScene={renderScene}
     configureScene={configureScene}
     navigationBar={renderNavigationBar()} />
  );
}

Navigation.Route = Route;
Navigation.BarConfig = BarConfig;

function renderScene(route, navigator) {
  routeChecker(route);

  return (
    <PassNavigator navigator={navigator}>
      <route.Component {...route.props} navigator={navigator} />
    </PassNavigator>
  );
}

function configureScene(route) {
  routeChecker(route);
  const config = route.Component.config || {};
  const scene = config.scene || Navigator.SceneConfigs.FloatFromRight;

  return scene;
}

function renderNavigationBar() {
  return (
    <DefaultBar
      routeMapper={RouteMapper}
      style={styles.navBar} />
  );
}



Navigation.propTypes = {
  initialRoute: PropTypes.instanceOf(Route)
};


/**
 * 为了方便传递navigator到后代组件
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

function routeChecker(route) {
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
