const React = require('react-native');
const {
  TouchableOpacity,
  Text,
  StyleSheet
} = React;


const defaultMapper = {
  LeftButton: function (route, navigator, index, navState) {
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
  },

  RightButton: function (route, navigator, index, navState) {
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
  },

  Title: function (route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title || ''}
      </Text>
    );
  }
};


function mapped(route, name) {
  const navBar = route.navBar || {};

  return navBar[name] || defaultMapper[name];
}

function render(name, route, navigator, index, navState) {
  if (route.navBar === false) {
    return null;
  }

  const redner = mapped(route, name);

  return redner(route, navigator, index, navState);
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


module.exports = {

  LeftButton: function(route, navigator, index, navState) {
    return render('LeftButton', route, navigator, index, navState);
  },

  RightButton: function(route, navigator, index, navState) {
    return render('RightButton', route, navigator, index, navState);
  },

  Title: function(route, navigator, index, navState) {
    return render('Title', route, navigator, index, navState);
  }
};

