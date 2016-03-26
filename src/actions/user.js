const {dispatch, getState} = require('../store');
const {SET_USER} = require('../constants');
const services = require('../services');
const notify = require('./notify');
const loading = require('./loading');


function set(user) {
  const action = {
    type: SET_USER,
    user: user
  };

  dispatch(user);
}
