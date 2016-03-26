const {dispatch} = require('../store');
const {SET_MASTER, SET_USER} = require('../constants');
const services = require('../services');
const notify = require('./notify');


function set(user) {
  const action = {
    type: SET_USER,
    user: user
  };

  dispatch(user);
}

function setMaster(name, token) {
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
      setMaster(response.loginname, accesstoken);
    })
    .catch((err) => notify.error(err.message));
}


function logout() {
  setMaster();
}



module.exports = {login, logout, get};
