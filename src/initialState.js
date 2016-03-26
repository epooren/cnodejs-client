const {fromJS} = require('immutable');


module.exports = fromJS({
  notification: {
    /* show, type, content */
  },

  /* selectedTab */

  master: {
    /* accesstoken, username */
  },

  topics: {
    /* selectedTab */

    /**
     * 每个tab对应1个数据对象
     * [tabName]: {
     *   data,
     *   page,
     *   limit,
     *   status: undefined | pending | done | fail | end
     * }
     */
  },

  userTopics: {
    /**
     * [username]
     */
  },

  replyTopic: {
    /**
     * [username]
     */
  },

  favTopic: {
    /**
     * [username]
     */
  },

  topic: {
    /* [id] */
  },

  user: {
    /* [username] */
  },

  messages: {
    /* unreadNum, unread, readed */
  },

  message: {
    /* [id] */
  }
});
