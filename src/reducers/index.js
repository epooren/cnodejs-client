const {fromJS} = require('immutable');
const constants = require('../constants');
const core = require('./core');

function reducer(state = fromJS({}), action) {
  switch (action.type) {
    case constants.NOTIFY:
      return state.update('notification', (state) => core.notify(state, action));

    case constants.SELECT_TAB:
      return state.set('selectedTab', action.tab);

    case constants.SET_MASTER:
      return state.update('master', (state) => core.setMaster(state, action));

    case constants.SELECT_TOPICS_TAB:
    case constants.SET_TOPICS:
      return state.update('topics', (state) => core.topics(state, action));

    case constants.SET_USER_TOPICS:
      return state.update('userTopics', (state) => core.setUserTopics(state, action));

    case constants.SET_REPLY_TOPICS:
      return state.update('replyTopics', (state) => core.setReplyTopics(state, action));

    case constants.SET_FAV_TOPICS:
    case constants.ADD_FAV_TOPIC:
    case constants.REMOVE_FAV_TOPIC:
      return state.update('favTopics', (state) => core.favTopics(state, action));

    case constants.SET_TOPIC:
      return state.update('topic', (state) => core.setTopic(state, action));

    case constants.SET_USER:
      return state.update('user', (state) => core.setUser(state, action));

    case constants.SET_UNREAD_MESSAGES_NUM:
    case constants.SET_UNREAD_MESSAGES:
    case constants.SET_READED_MESSAGES:
      return state.update('messages', (state) => core.readMessages(state, action));

    case constants.SET_MESSAGE:
      return state.update('message', (state) => core.setMessage(state, action));
  }

  return state;
}


module.exports = reducer;

