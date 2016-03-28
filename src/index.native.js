const React = require('react-native');
const {
  AppRegistry,
  Component
} = React;
const {Provider} = require('react-redux');
const Navigation = require('./components/Navigation');
const {Route} = Navigation;
const Home = require('./views/Home');
const store = require('./store');


const initialRoute = new Route(Home);

class CnodejsClient extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation initialRoute={initialRoute} />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('CnodejsClient', () => CnodejsClient);
