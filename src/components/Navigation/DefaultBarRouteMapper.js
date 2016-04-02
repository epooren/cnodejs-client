/**
 * DefaultBar的默认routeMapper，可自定义
 *
 * route
 *   * title
 *   * Component
 *     * config
 *       * title
 *       * navLeftButton
 *       * navTitle
 *       * navRightButton
 */

const React = require('react-native');
const {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} = React;

function getComponent(route, name) {
  const config = getComponentConfig(route);

  return config[name];
}

function getComponentConfig(route) {
  return route.Component.config || {};
}

function getTitle(route) {
  if (route.title) {
    return route.title;
  }

  const config = getComponentConfig(route);

  if (config.title) {
    return config.title;
  } else {
    return '';
  }
}

function defaultLeftButton(route, navigator, index, navState) {
  if (index === 0) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={() => navigator.pop()}
      style={styles.navBarLeftButton}>
      <Text style={[styles.navBarText, styles.navBarButtonText]}>
        返回
      </Text>
    </TouchableOpacity>
  );
}

function defaultRightButton(route, navigator, index, navState) {
  if (index <= 1) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={() => navigator.popToTop()}
      style={styles.navBarRightButton}>
      <Text style={[styles.navBarText, styles.navBarButtonText]}>
        首页
      </Text>
    </TouchableOpacity>
  );
}

function defaultTitle(route, navigator, index, navState) {
  return (
    <Text style={[styles.navBarText, styles.navBarTitleText]}>
      {getTitle(route)}
    </Text>
  );
}



const mapper = {

  LeftButton: function(route, navigator, index, navState) {
    const navLeftButton = getComponent(route, 'navLeftButton');

    if (navLeftButton) {
      return navLeftButton(route, navigator, index, navState);
    } else {
      return defaultLeftButton(route, navigator, index, navState);
    }
  },

  RightButton: function(route, navigator, index, navState) {
    const navRightButton = getComponent(route, 'navRightButton');

    if (navRightButton) {
      return navRightButton(route, navigator, index, navState);
    } else {
      return defaultRightButton(route, navigator, index, navState);
    }
  },

  Title: function(route, navigator, index, navState) {
    const navTitle = getComponent(route, 'navTitle');

    if (navTitle) {
      return navTitle(route, navigator, index, navState);
    } else {
      return defaultTitle(route, navigator, index, navState);
    }
  }
};


const styles = StyleSheet.create({
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#fff',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#fff',
  }
});

module.exports = mapper;
