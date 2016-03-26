const {fromJS} = require('immutable');


module.exports = fromJS({
  notification: {
    /* show, type, content */
  },

  loading: {
    /* show, content */
  },

  /* selectedTab */

  /* accesstoken */

  topics: {
    /* selectedTab */

    /**
     * 每个tab对应1个数据对象
     * [tabName]: {
     *   data,
     *   page,
     *   count,
     *   status: undefined | pending | done | fail | end
     * }
     */
  },

  userTopics: {
    /**
     * [username]: {
     *   data,
     *   page,
     *   count,
     *   status
     * }
     */
  },

  replyTopic: {
    /**
     * [username]: {
     *   data,
     *   page,
     *   count,
     *   status
     * }
     */
   },

   favTopic: {
    /**
     * [username]: {
     *   data,
     *   page,
     *   count,
     *   status
     * }
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
