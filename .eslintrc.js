const appGlobal = require('./.global.js');
module.exports = {
    extends:  ['airbnb-base'],
    globals: appGlobal.reduce((mem, item) => {
        mem[item] = false;
        return mem;
    }, {}), 
    rules: {
        'no-console': 0,
        'no-unused-expressions': 0
    }
}
