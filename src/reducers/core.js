const {fromJS} = require('immutable');
const constants = require('../constants');

function notify(state, action) {
  return state.merge(action.notification);
}


function setMaster(state, action) {
  return state.merge({
    username: action.name,
    accesstoken: action.token
  });
}


function topics(state, action) {
  /**
   * action
   *   * tab
   *   * page
   *   * limit
   *   * status
   *   * data
   */

  // selected tab
  if (action.type === constants.SELECT_TOPICS_TAB) {
    return state.set('selectedTab', action.tab);
  }


  // set data
  return state.update(action.tab, (topics = fromJS({})) => {
    // 失败
    if (action.status !== 'done') {
      return topics.set('status', action.status);
    }

    // end
    if (action.data.length < action.limit) {
      action.status = 'end';
    }

    topics = topics.merge({
      page: action.page,
      limit: action.limit,
      status: action.status
    });

    // if 第一页 else more
    if (action.page === 1) {
      topics = topics.set('data', fromJS(action.data));
    } else {
      topics = topics.update('data', (data) => data.concat(action.data));
    }

    return topics;
  });
}


function setUserTopics(state, action) {
  return state.set(action.username, fromJS(action.topics));
}

function setReplyTopics(state, action) {
  return state.set(action.username, fromJS(action.topics));
}


function favTopics(state, action) {
  switch (action.type) {
    case constants.SET_FAV_TOPICS:
      return setFavTopics(state, action);
    case constants.ADD_FAV_TOPIC:
      return addFavTopics(state, action);
    case constants.REMOVE_FAV_TOPIC:
      return removeFavTopics(state, action);
  }
}

function setFavTopics(state, action) {
  return state.set(action.username, fromJS(action.topics));
}

function addFavTopics(state, action) {
  return state.update(action.username, (topics) => {
    return topics.push(fromJS(action.topic));
  });
}

function removeFavTopics(state, action) {
  return state.update(action.username, (topics) => {
    const index = topics.findIndex((value) => {
      return value.id === action.topic.id;
    });

    return topics.delete(index);
  });
}


function setTopic(state, action) {
  const topic = action.topic;

  return state.set(topic.id, fromJS(topic));
}


function setUser(state, action) {
  const user = action.user;

  return state.set(user.loginname, fromJS(user));
}


function readMessages(state, action) {
  switch (action.type) {
    case constants.SET_UNREAD_MESSAGES_NUM:
      return state.set('unreadNum', action.num);
    case constants.SET_UNREAD_MESSAGES:
      return state.set('unread', fromJS(action.messages));
    case constants.SET_READED_MESSAGES:
      return state.set('readed', fromJS(action.messages));
  }
}


function setMessage(state, action) {
  const message = action.message;

  return state.set(message.id, message);
}

module.exports = {
  notify,
  setMaster,
  topics,
  setUserTopics,
  setReplyTopics,
  setFavTopics,
  addFavTopics,
  removeFavTopics,
  setTopic,
  setUser,
  readMessages,
  setMessage,
  favTopics
};
