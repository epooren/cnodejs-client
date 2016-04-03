/**
 * 定义NavigationBar的自定义配置参数
 * 每个页面的“根组件”可以配置导航条
 */
const React = require('react-native');
const {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} = React;

class BarConfig {
  constructor(args = {}) {
    const {
        title,
        hide = false,
        LeftButton = defaultLeftButton,
        Title = defaultTitle,
        RightButton = defaultRightButton
      } = args;

    this.title = title;
    this.hide = hide;
    this.LeftButton = LeftButton;
    this.Title = Title;
    this.RightButton = RightButton;
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


function getTitle(route) {
  const title = route.title ||
      (route.Component.navBar && route.Component.navBar.title);

  return title;
}

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


module.exports = BarConfig;
