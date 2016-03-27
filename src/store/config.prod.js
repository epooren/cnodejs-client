const {createStore, applyMiddleware, compose} = require('redux');
const reducer = require('../reducers');

const enhancer = compose(applyMiddleware(saveState(stateKey)));


module.exports = function getStore (initialState) {
    const store = createStore(reducer, initialState, enhancer);

    return store;
};
