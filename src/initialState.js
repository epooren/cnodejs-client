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
    /* tab */

    /**
     * 每个tab对应1个数据对象
     * [tabName]: {
     *   data,
     *   page,
     *   count,
     *   end,
     *   pending
     * }
     */
  },

  userTopics: {
    /**
     * [username]: {
     *   data,
     *   page,
     *   count,
     *   end,
     *   pending
     * }
     */
  },

  replyTopic: {
    /**
     * [username]: {
     *   data,
     *   page,
     *   count,
     *   end,
     *   pending
     * }
     */
   },

   favTopic: {
    /**
     * [username]: {
     *   data,
     *   page,
     *   count,
     *   end,
     *   pending
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
