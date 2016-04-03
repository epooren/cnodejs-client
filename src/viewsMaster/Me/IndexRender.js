const React = require('react-native');
const {
  View,
  Text,
  TouchableOpacity
} = React;
const Cell = require('../../components/Cell');

module.exports = function () {
  <View>
    <View>
      <View>name 积分</View>
      <View>注册时间：2015</View>
    </View>

    <Cell content="创建的专题" route={this.routeTopicsList} />
    <Cell content="参与的专题" route={this.routeTopicsList} />

    <View>
      <TouchableOpacity onPress={this.logout}>
        <Text>退出<Text>
      </TouchableOpacity>
    </View>
  </View>
};
