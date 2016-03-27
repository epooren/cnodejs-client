const {dispatch, getState} = require('../store');
const {SET_TOPICS, SET_TOPIC, SELECT_TOPICS_TAB} = require('../constants');
const services = require('../services');
const notify = require('./notify');

function set(tab, status, page, limit, data) {
  const action = {
    type: SET_TOPICS,
    tab: tab,
    status: status,
    page: page,
    limit: limit,
    data: data
  };

  dispatch(action);
}

function setTab(tab) {
  const action = {
    type: SELECT_TOPICS_TAB,
    tab: tab
  };

  dispatch(action);
}


function setDetail(topic) {
  const action = {
    type: SET_TOPIC,
    topic: topic
  };

  dispatch(action);
}


function get(tab, page = 1, limit = 10) {
  notify.loading();
  set(tab, 'pending');

  return services
    .getTopics(tab, page, limit)
    .then((response) => {
      notify.hide();
      set(tab, 'done', page, limit, response.data);
    })
    .catch((err) => {
      notify.error(err.message);
      set(tab, 'fail')
    });
}

function getDetail(id) {
  notify.loading();

  return services
    .getTopic((response) => {
      notify.hide();
      setDetail(response.data);
    })
    .catch((err) => notify.error(err.message));
}

function select(tab) {
  setTab(tab);
}



module.exports = {
  get,
  getDetail,
  select
};
