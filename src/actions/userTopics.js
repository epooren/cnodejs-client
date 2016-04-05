const {dispatch} = require('../store');
const notify = require('./notify');
const {SET_USER_TOPICS} = require('../constants');
const services = require('../services');


function set(username, topics) {
  const action = {
    type: SET_USER_TOPICS,
    username: username,
    topics: topics
  };

  dispatch(action);
}


function get(username) {
  notify.loading();

  return services
    .getUser(username)
    .then((response) => {
      const topics = response.data.recent_topics;
      notify.hide();
      set(username, topics);
    })
    .catch((err) => notify.error(err.message));
}


function create(tab, title, content) {
  let state = getState();
  const token = state.getIn(['master', 'token']);

  if (!token) {
    notify.warn('未登录或登录已过期');
    return;
  }

  notify.loading();

  return services
    .createTopic(token, tab, title, content)
    .then((response) => {
      loading.hide();

      // TODO 插入userTopics
    })
    .catch((err) => notify.error(err.message));
}

module.exports = {get, create, set};
