const React = require('react-native');
const {
  TouchableOpacity,
  Text
} = React;

const styles = StyleSheet.create({});

function defaultLeftButton(navigator, index) {
  if (index === 0) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={() => navigator.pop()}
      style={styles.navBarLeftButton}>
      <Text style={[styles.navBarText, styles.navBarButtonText]}>
        {previousRoute.title || '返回'}
      </Text>
    </TouchableOpacity>
  );
}

function defaultTitle(route) {
  <Text style={[styles.navBarText, styles.navBarTitleText]}>
    {route.title || 'title'}
  </Text>
}

function defaultRightButton() {
  return null;
}


module.exports = {

  LeftButton: function(route, navigator, index, navState) {
    return defaultLeftButton(navigator, index);
  },

  RightButton: function(route, navigator, index, navState) {
    return defaultTitle(route);
  },

  Title: function(route, navigator, index, navState) {
    return defaultRightButton();
  }

};
