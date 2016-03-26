const {dispatch, getState} = require('../store');
const {SET_TOPICS, SET_TOPIC} = require('../constants');
const services = require('../services');
const notify = require('./notify');
const loading = require('./loading');

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


function setDetail(topic) {
  const action = {
    type: SET_TOPIC,
    topic: topic
  };

  dispatch(action);
}


function get(tab, page = 1, limit = 10) {
  loading.show();
  set(tab, 'pending');

  return services
    .getTopics(tab, page, limit)
    .then((response) => {
      set(tab, 'done', page, limit, response.data);

      return response;
    })
    .catch((err) => {
      loading.hide();
      notify.error(err.message);
      set(tab, 'fail')
    });
}

function getDetail(id) {
  loading.show();

  return services
    .getTopic((response) => {
      setDetail(response.data);

      return response;
    })
    .catch((err) => {
      loading.hide();
      notify.error(err.message);
    });
}


function createTopic(tab, title, content) {
  let state = getState();
  const accesstoken = state.get('accesstoken');

  if (!accesstoken) {
    notify.warn('未登录或登录已过期');
    // TODO 返回promise
    return;
  }

  loading.show();

  return services
    .createTopic(accesstoken, tab, title, content)
    .then((response) => {
      loading.hide();
      // TODO 插入userTopics
      return response;
    })
    .catch((err) => {
      loading.hide();
      notify.error(err.message);
    });
}

module.exports = {
  get,
  getDetail,
  createTopic
};
