/**
 *
 */
// Prevent Mocha from compiling class
function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.png'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.gif'] = noop;


const jsdom = require('jsdom');
const chai = require('chai');
const chaiImmutable = require('chai-immutable');

const doc = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach(key => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});


chai.use(chaiImmutable);

