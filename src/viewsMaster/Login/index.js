const React = require('react');
const Base = require('./LoginBase');
const Render = require('./IndexRender');


class Login extends Base {

  // methods
  render() {
    return Render.call(this);
  }
}

module.exports = Login;
