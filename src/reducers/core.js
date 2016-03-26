const {fromJS} = require('immutable');
const {constants} = require('../constants');

function notify(state, action) {
  return state.merge(action.notification);
}



let parallelNum = 0;
function loading(state, action) {
  action.show ? parallelNum++ : parallelNum--;
  parallelNum < 0 && (parallelNum = 0);

  return state.merge({
    show: (parallelNum > 0),
    content: (action.content || '数据加载中')
  });
}


function setMaster(state, action) {
  return state.merge({
    name: action.name,
    token: action.token
  });
}


function setTopics(state, action) {
  /**
   * action
   *   * tab
   *   * page
   *   * limit
   *   * status
   *   * data
   */

  // selected tab
  state = state.set('selectedTab', action.tab);


  return state.update(action.tab, (topics) => {
    // 失败
    if (action.status === 'fail') {
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
    if (action === 1) {
      topics = topics.set('data', fronJS(action.data));
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
  switch(action.type) {
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
  })
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

  return state.set(topic.id, fronJS(topic));
}


function setUser(state, action) {
  const user = action.user;

  return state.set(user.loginname, fromJS(user));
}


function readMessages(state, action) {
  switch(action.type) {
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
