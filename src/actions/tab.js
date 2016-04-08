const {dispatch} = require('../store');
const {SELECT_TAB} = require('../constants');

function set(tab) {
  const action = {
    type: SELECT_TAB,
    tab: tab
  };

  dispatch(action);
}

function select(tab) {
  set(tab);
}

module.exports = {select};
