const {dispatch} = require('../store');
const notify = require('./notify');
const {SET_REPLY_TOPICS} = require('../constants');
const services = require('../services');


function set(username, topics) {
  const action = {
    type: SET_REPLY_TOPICS,
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
      const topics = response.data.recent_replies;
      notify.hide();
      set(username, topics);
    })
    .catch((err) => notify.error(err.message));
}

module.exports = {get};
