const {dispatch} = require('../store');
const {
  SET_MASTER,
  SET_USER,
} = require('../constants');
const services = require('../services');
const notify = require('./notify');
const userTopics = require('./userTopics');
const replyTopics = require('./replyTopics');

function set(user) {
  const action = {
    type: SET_USER,
    user: user
  };

  dispatch(action);

  // web端只做到这一步是不安全的，还要执行get确保安全
  userTopics.set(user.loginname, user.recent_topics);
  replyTopics.set(user.loginname, user.recent_replies);
}

function setMaster(token, name) {
  const action = {
    type: SET_MASTER,
    name: name,
    token: token
  };

  dispatch(action);
}


function get(username) {
  notify.loading();

  return services
    .getUser(username)
    .then((response) => {
      notify.hide();
      set(response.data);
    })
    .catch((err) => notify.error(err.message));
}

function login(accesstoken) {
  notify.loading();

  return services
    .verify(accesstoken)
    .then((response) => {
      notify.hide();
      setMaster(accesstoken, response.loginname);

      return response;
    })
    .catch((err) => notify.error(err.message));
}


function logout() {
  setMaster();
}



module.exports = {login, logout, get, setMaster};
