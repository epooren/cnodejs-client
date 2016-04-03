const React = require('react');
const Base = require('./IndexBase');
const Render = require('./IndexRender');

class Messages extends Base {

  // methods
  render() {
    return Render.call(this);
  }
}


module.exports = Messages;
