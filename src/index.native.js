const React = require('react-native');
const {
  AppRegistry,
  Component
} = React;
const {Provider} = require('react-redux');
const Navigation = require('./components/Navigation');
const {Route} = require('./configs/Router');
const Index = require('./views/Index');
const store = require('./store');


const initialRoute = new Route({
  Component: Index,
  title: 'CnodejsClient'
});

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
