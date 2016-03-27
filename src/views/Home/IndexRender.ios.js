const Render = require('./IndexRender.native');

module.exports = function () {
  return Render.call(this, this.props, this.state);
};
