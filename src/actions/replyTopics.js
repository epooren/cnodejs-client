const notify = require('./notify');
const loading = require('./loading');
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
  loading.show();

  return services
    .getUser(username)
    .then((response) => {

    })
    .catch((err) => {
      loading.hide();
      //notify.
    });
}

module.exports = {get};
