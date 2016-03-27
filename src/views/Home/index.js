const {Component} = require('react');
const Render = require('./IndexRender');

class Index extends Component {

  // methods
  render() {
    return Render.call(this);
  }
}

module.exports = Index;
