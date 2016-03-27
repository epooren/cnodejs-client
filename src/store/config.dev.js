const {createStore, applyMiddleware, compose} = require('redux');
const reduxLogger = require('redux-logger');
let reducer = require('../reducers');


// 默认使用reduxLogger
let enhancer = compose(applyMiddleware(reduxLogger()));
// 如果浏览器装了扩展，使用扩展
if (window.devToolsExtension) {
    enhancer = compose(window.devToolsExtension());
}


module.exports = function getStore (initialState) {
    const store = createStore(reducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            reducer = require('../reducers');
            store.replaceReducer(reducer);
        });
    }

    return store;
};
