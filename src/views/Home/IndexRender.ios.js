const Render = require('./IndexRender.native');

module.exports = function () {
  Render.call(this, this.props, this.state);
};
