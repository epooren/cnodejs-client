const React = require('react-native');
const {
  AppRegistry,
  Component
} = React;
const Navigation = require('./components/Navigation');
const {Route} = Navigation;
const Home = require('./views/Home');

const initialRoute = new Route({
  Component: Home
});

class CnodejsClient extends Component {
  render() {
    return (
      <Navigation initialRoute={initialRoute} />
    );
  }
}


AppRegistry.registerComponent('CnodejsClient', () => CnodejsClient);
