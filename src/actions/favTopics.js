// const {dispatch, getState} = require('../store');
// const notify = require('./notify');
// const {
//   SET_FAV_TOPICS,
//   ADD_FAV_TOPIC,
//   REMOVE_FAV_TOPIC
// } = require('../constants');
// const services = require('../services');


// function set(username, topics) {
//   const action = {
//     type: SET_FAV_TOPICS,
//     username: username,
//     topics: topics
//   };

//   dispatch(action);
// }

// // function addCreator(username, topic) {
// //   const action = {
// //     type: ADD_FAV_TOPIC,
// //     username: username,
// //     topic: topic
// //   };

// //   dispatch(action);
// // }

// // function removeCreator(username, id) {
// //   const action = {
// //     type: REMOVE_FAV_TOPIC,
// //     username: username,
// //     id: id
// //   };

// //   dispatch(action);
// // }

// function get(username) {
//   notify.loading();

//   return services
//     .getFavTopics(username)
//     .then((response) => {
//       notify.hide();
//       set(username, response.data);
//     })
//     .catch((err) => notify.error(err.message));
// }

// function add(topic) {
//   const {name, token} = getMaster();

//   if (!token) {
//     notify.error('未登录');
//     return;
//   }

//   notify.loading();

//   return services
//     .addToFavTopics(token, topic.id)
//     .then((response) => {
//       add(name, topic);
//     })
//     .catch((err) => notify.error(err.message));
// }

// function remove(id) {
//   const {name, token} = getMaster();

//   if (!token) {
//     notify.error('未登录');
//     return;
//   }

//   notify.loading();

//   return services
//     .addToFavTopics(token, topic.id)
//     .then((response) => {
//       remove(name, topic.id);
//     })
//     .catch((err) => notify.error(err.message));
// }

// function getUsername() {
//   const state = getState();
//   let master = state.get('master');
//   return master.toJS();
// }


// module.exports = {add, remove, get};
