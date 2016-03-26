const notify = require('./notify');
const loading = require('./loading');
const {SET_MASTER} = require('../constants');
const services = require('../services');

function set(name, token) {
  const action = {
    type: SET_MASTER,
    name: name,
    token: token
  };

  dispatch(action);
}


function login(accesstoken) {
  loading.show();

  return services
    .verify(accesstoken)
    .then((response) => {
      loading.hide();
      set(response.loginname, accesstoken);
    })
    .catch((err) => {
      loading.hide();
      notify.error(err.message);
    });
}


function logout() {
  set();
}

module.exports = {login, logout};
