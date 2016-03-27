let initialState = require('../initialState');

let getStore;
if (process.env.NODE_ENV === 'production') {
    getStore = require('./config.prod');
} else {
    getStore = require('./config.dev');
}


module.exports = getStore(initialState);
