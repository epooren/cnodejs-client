const {
  Component,
  PropTypes
} = require('react');
const Render = require('./TabBarRender');

class TabBar extends Component {
  constructor(args) {
    // code
  }

  // methods
  render() {
    Render.call(this);
  }
}



module.exports = TabBar;
