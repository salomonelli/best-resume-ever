/* global it, describe */
const assert = require('assert');
const Util = require('../src/Util');
const path = require('path');
describe('Util', () => {
    describe('#getDirectories()', () => {
        it('should get directories starting with "resume-"', () => {
            const directories = Util.getDirectories();
            assert(directories.length > 0);
        });
    });
    describe('#getResumesFromDirectories()', () => {
        it('should get resumes names from directories', () => {
            const resumes = Util.getResumesFromDirectories();
            const directories = Util.getDirectories();
            assert.equal(directories.length, resumes.length);
            assert(directories.length > 0);
            assert(directories[0].includes(resumes[0].path));
        });
        it('should get create resume names from filenames (removing -)', () => {
            const resumes = Util.getResumesFromDirectories();
            assert(!resumes[0].name.includes('-'));
        });
    });
    describe('#setTimeout', () => {
        it('should return a promise', () => {
            const promise = Util.setTimeout(200);
            assert(promise instanceof Promise);
        });
        it('should resolve promise after given amount of time', () => {
            const ms = 100;
            let resolved = false;
            Util.setTimeout(ms)
                .then(() => resolved = true);
            setTimeout(() => {
                assert(resolved);
            }, ms + 100);
        });
        it('should not reject promise', () => {
            const ms = 100;
            Util.setTimeout(ms)
                .then()
                .catch(err => assert(err === null));
        });
    });
    describe('#readFileContent', async() => {
        it('should return a promise', () => {
            const p = path.join(__dirname, './files/readFile.txt');
            const promise = Util.readFileContent(p);
            assert(promise instanceof Promise);
        });
        describe('positive', () => {
            it('should return file content if file exists', async() => {
                const p = path.join(__dirname, './files/readFile.txt');
                const content = await Util.readFileContent(p);
                assert(content.includes('any content to be read'));
            });
            it('should not return any error if file exists', async() => {
                const p = path.join(__dirname, './files/readFile.txt');
                Util.readFileContent(p)
                    .catch(err => assert(err == null));
            });
        });
        describe('negative', () => {
            it('should reject promise and return error if file does not exist', () => {
                const p = 'asdasdasd';
                Util.readFileContent(p)
                    .then(content => assert(content === null))
                    .catch(err => assert(err != null));
            });
        });
    });
    describe('#writeFile', () => {
        it('should return a promise', () => {
            const p = path.join(__dirname, './files/writeFile.txt');
            const promise = Util.writeFile(p, 'any content');
            assert(promise instanceof Promise);
        });
        describe('positive', () => {
            it('should write file content if file exists and not throw any error', () => {
                const p = path.join(__dirname, './files/writeFile.txt');
                const content = 'alskldjaksldjaklsjdla' + Math.random();
                Util.writeFile(p, content)
                    .then(async() => {
                        const c = await Util.readFileContent(p);
                        assert.equal(c, content);
                    })
                    .catch(err => assert(err === null));
            });
        });
        describe('negative', () => {
            it('should reject promise and return error if file does not exist', () => {
                const p = 'asdasdasd';
                Util.writeFile(p, 'any content')
                    .then()
                    .catch(err => assert(err != null));
            });
        });
    });
    describe('#execBash', () => {
        it('should return a promise', () => {
            const promise = Util.execBash('echo "Hello World"');
            assert(promise instanceof Promise);
        });
        describe('positive', () => {
            it('should execute bash script and resolve promise', () => {
                Util.execBash('echo "Hello world"')
                    .then()
                    .catch(err => assert(err === null));
            });
        });
        describe('negative', () => {
            it('should try to execute false bash script and reject promise', () => {
                Util.execBash('asdlkajsd!+##')
                    .catch(err => assert(err != null));
            });
        });
    });
});
