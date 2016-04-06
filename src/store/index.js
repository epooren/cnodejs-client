const initialState = require('../initialState');

let getStore = require('./config.dev');
console.info('生产环境需要手动改为将config.dev改为config.prod');

/**
 * ExceptionsManager.js:76 <Provider> does not support changing `store` on the
 * fly. It is most likely that you see this error because you updated to
 * Redux 2.x and React Redux 2.x which no longer hot reload reducers
 * automatically. See https://github.com/rackt/react-redux/releases/tag/v2.0.0
 * for the migration instructions.
 */
// if (process.env.NODE_ENV === 'production') {
//     getStore = require('./config.prod');
// } else {
//     getStore = require('./config.dev');
// }


module.exports = getStore(initialState);
