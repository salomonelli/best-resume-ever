/* global it, describe */
const assert = require('assert');
const ResumeToPdf = require('../src/ResumeToPdf');
describe('ResumeToPdf', () => {
    describe('#electroshotScript()', () => {
        it('should return a string to execute', () => {
            const resume = 'resume-any';
            const exec = ResumeToPdf.electroshotScript(resume);
            assert(exec != null);
            assert(exec.includes(resume));
        });
    });
    describe('#convert()', () => {
        it('should return a string to execute', () => {
            // TODO write test with spy
        });
    });
});
