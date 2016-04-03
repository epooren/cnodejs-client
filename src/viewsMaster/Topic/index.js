const React = require('react-native');
const {
  Component
} = React;
const Render = require('./IndexRender');


class Topic extends Component {


  // methods
  render() {
    return Render.call(this);
  }
}



module.exports = Topic;
