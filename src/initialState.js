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



  // 首页topics列表
  // tab作为key
  topics: {

  },
  // 用户发布的topics
  // username作为key
  userTopics: {

  },
  // 用户收藏的topics
  // username作为key
  favTopics: {

  },
  // 用户参与的topics
  // username作为key
  replyTopics: {

  },

  // topic详情
  // id为key，对应一个value
  topic: {

  },

  // 用户详情
  // username作为key
  user: {

  }

});
