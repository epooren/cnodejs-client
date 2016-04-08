const React = require('react-native');
const {
  Component,
  Navigator,
  PropTypes,
  StyleSheet
} = React;
const DefaultBar = require('./DefaultBar');
const RouteMapper = require('./RouteMapper');
const Router = require('../../configs/Router');
const {Route} = Router;

let router = null;

function Navigation(props) {
  const {initialRoute} = props;

  return (
    <Navigator
      initialRoute={initialRoute}
      renderScene={renderScene}
      configureScene={configureScene}
      navigationBar={renderNavigationBar()} />
  );
}


function renderScene(route, navigator) {
  routeChecker(route);

  if (router === null) {
    router = new Router(navigator);
  }

  return (
    <PassRouter router={router}>
      <route.Component {...route.props} />
    </PassRouter>
  );
}

function configureScene(route) {
  return route.scene;
}

function renderNavigationBar() {
  return (
    <DefaultBar
      routeMapper={RouteMapper}
      style={styles.navBar} />
  );
}



Navigation.propTypes = {
  initialRoute: PropTypes.instanceOf(Route).isRequired
};


/**
 * 为了方便传递router到后代组件
 */
class PassRouter extends Component {
  getChildContext() {
    return {
      router: this.props.router
    };
  }

  render() {
    return this.props.children;
  }
}

PassRouter.childContextTypes = {
  router: PropTypes.object
};

PassRouter.propTypes = {
  children: PropTypes.element.isRequired,
  router: PropTypes.object.isRequired
};



function routeChecker(route) {
  if (!(route instanceof Route)) {
    throw new TypeError('route不是Route实例');
  }
}


const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#666'
  }
});

module.exports = Navigation;
