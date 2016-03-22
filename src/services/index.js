
const HOST = 'https://cnodejs.org';

const API = {
  'topics': '/api/v1/topics',
  'topic': '/api/v1/topic/:id',
  'favTopic': '/api/v1/topic_collect/collect',
  'unfavTopic': '/api/v1/topic_collect/de_collect',
  'userfav': '/api/v1/topic_collect/:username',
  'comment': '/api/v1/topic/:topicId/replies',
  'like': '/api/v1/reply/:replyId/ups',
  'user': '/api/v1/user/:username',
  'verify': '/api/v1/accesstoken',
  'msgNum': '/api/v1/message/count',
  'msg': '/api/v1/messages',
  'markMsg': '/api/v1/message/mark_all'
};

function get(url) {
  let http = fetch(url, {
    mode: 'cors'
  });

  return resolveResponse(http);
}

function post(url, body) {
  let http = fetch(url, {
    mode: 'cors',
    body: body
  });

  return resolveResponse(http);
}


function resolveResponse(http) {
  return http
    .then((response) => {
      if (response.ok) {
        return parseBody(response);
      } else {
        return new Error(response.statusText);
      }
    });
}

function parseBody(response) {
  return response.json();
}

function resolveUrl(api, path = {}, query = {}) {
  let key, result;

  for (key in path) {
      api = api.replace(`:${key}`, path[key]);
  }

  query = queryString(query);

  result = `${HOST}${api}?${query}`;

  return result;
}

function serializeBody(json) {
  return queryString(json);
}

function queryString(json) {
  let result = '', key;

  for (key in json) {
    if (json.hasOwnProperty(key) && typeof json[key] !== 'undefined') {
      result += `&${key}=${json[key]}`;
    }
  }

  return result.substring(1);
}


function getTopics(tab, page, limit, mdrender = true) {
  const url = resolveUrl(API.topics, {}, {tab, page, limit, mdrender});
  return get(url);
}


function getTopic(accesstoken, id, mdrender = true) {
  const url = resolveUrl(API.topic, {id}, {accesstoken, mdrender});
  return get(url);
}


function createTopic(accesstoken, tab, title, content) {
  const url = resolveUrl(API.topics);
  let body = {accesstoken, tab, title, content};

  body = serializeBody(body);

  return post(url, body);
}



function addToFavTopics(accesstoken, id) {
  const url = resolveUrl(API.favTopic);
  let body = {
    accesstoken: accesstoken,
    topic_id: id
  };

  body = serializeBody(body);

  return post(url, body);
}

function removeFromFavTopics(accesstoken, id) {
  const url = resolveUrl(API.unfavTopic);
  let body = {
    accesstoken: accesstoken,
    topic_id: id
  };

  body = serializeBody(body);

  return post(url, body);
}

function getFavTopics(username) {
  const url = resolveUrl(API.userfav, {username});

  return get(url);
}

function commentTopic(accesstoken, topicId, content, replyId) {
  const url = resolveUrl(API.comment, {topicId});
  let body = {content, replyId};

  body = serializeBody(body);

  return post(url, body);
}

function likeComment(accesstoken, replyId) {
  const url = resolveUrl(API.like, {replyId});
  let body = {accesstoken};

  body = serializeBody(body);

  return post(url, body);
}


function getUser(username) {
  const url = resolveUrl(API.user, {username});

  return get(url);
}

function verify(accesstoken) {
  const url = resolveUrl(API.verify);
  let body = {accesstoken};

  body = serializeBody(body);

  return post(url, body);
}

function getMsgNum(accesstoken) {
  const url = resolveUrl(API.msgNum, {}, {accesstoken});

  return get(url);
}

function getMsg(accesstoken, mdrender = true) {
  const url = resolveUrl(API.msg, {}, {accesstoken, mdrender});

  return get(url);
}

function markMsg(accesstoken) {
  const url = resolveUrl(API.markMsg);
  let body = {accesstoken};

  body = serializeBody(body);

  return post(url, body);
}

module.exports = {
  getTopics,
  getTopic,
  createTopic,
  addToFavTopics,
  removeFromFavTopics,
  getFavTopics,
  commentTopic,
  likeComment,
  getUser,
  verify,
  getMsgNum,
  getMsg,
  markMsg
};
