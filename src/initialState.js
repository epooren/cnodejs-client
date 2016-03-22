const {fromJS} = require('immutable');


module.exports = fromJS({

  notification: {
    show: undefined,
    type: undefined,
    content: undefined
  },

  loading: {
    show: undefined,
    content: undefined
  },

  selectedTab: undefined,

  /**
   * 数据
   */

  accesstoken: undefined,



  // topics
  // 首页topics列表
  // 用户发布的topics
  // 用户收藏的topics
  // 用户参与的topics
  topics: undefined
});
