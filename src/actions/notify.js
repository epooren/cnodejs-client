const {dispatch} = require('../store');
const {NOTIFY} = require('../constants');


function notify(show, type, content) {
    const action = {
        type: NOTIFY,
        notification: {
            show: show,
            type: type,
            content: content
        }
    };

    dispatch(action);
}

function loading(content = '数据加载中') {
    notify(true, 'loading', content);
}

function info(content) {
    notify(true, 'info', content);
}

function success(content) {
    notify(true, 'success', content);
}

function error(content) {
    notify(true, 'error', content);
}

function warn(content) {
    notify(true, 'warn', content);
}

function hide() {
    notify(false);
}

module.exports = {info, success, error, warn, hide};
