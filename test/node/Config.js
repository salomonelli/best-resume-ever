/* global it, describe */
const assert = require('assert');
const Config = require('../../src/node/Config');
describe('Config', () => {
    it('should contain a valid port number', () => {
        assert(Config.port > 0);
    });
});
