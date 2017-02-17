/* global it, describe */
const assert = require('assert');
const Config = require('../src/Config');
describe('Config', () => {
    it('should have property port', () => {
        assert(Config.port != null);
        assert(typeof Config.port == 'number');
    });
});
