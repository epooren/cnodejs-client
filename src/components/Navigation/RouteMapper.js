/**
 * DefaultBar的默认routeMapper，可自定义
 *
 * route
 *   * title
 *   * Component
 *     * navBar<BarConfig>
 */
const BarConfig = require('./BarConfig');
const defaultNavBar = new BarConfig();

function getNavBar(route) {
  return route.Component.navBar || defaultNavBar;
}

const mapper = {

  LeftButton: function(route, navigator, index, navState) {
    const navBar = getNavBar(route);
    if (navBar.hide) {
      return null;
    }

    return navBar.LeftButton(route, navigator, index, navState);
  },

  RightButton: function(route, navigator, index, navState) {
    const navBar = getNavBar(route);
    if (navBar.hide) {
      return null;
    }

    return navBar.RightButton(route, navigator, index, navState);
  },

  Title: function(route, navigator, index, navState) {
    const navBar = getNavBar(route);
    if (navBar.hide) {
      return null;
    }

    return navBar.Title(route, navigator, index, navState);
  }
};



module.exports = mapper;
