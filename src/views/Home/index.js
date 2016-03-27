const {Component} = require('react');
const {connect} = require('react-redux');
const Render = require('./IndexRender');

class Index extends Component {

  // methods
  render() {
    return Render.call(this);
  }
}

function mapStateToProps(state) {
  return state.toJS();
}

const Container = connect(mapStateToProps)(Index);

module.exports = Container;
