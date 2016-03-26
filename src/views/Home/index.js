const {Component} = require('react');
const Render = require('./IndexRender');

class IndexBase extends Component {

  // methods
  render() {
    return Render.call(this);
  }
}
