const path = require('path');
const writeFile = require('write');
const fs = require('fs');
var exec = require('child_process').exec;

const Util = {
    /**
     * gets directories starting with 'resume-'
     * @return {[]}
     */
    getDirectories: function() {
        const srcpath = path.join(__dirname, '../resumes');
        return fs.readdirSync(srcpath)
            .filter(file => file.includes('resume-'));
    },
    /**
     * gets resumes names and paths from directories
     * @return {Object[]} array with resumes object {path: '', name: ''}
     */
    getResumesFromDirectories: function() {
        const directories = Util.getDirectories();
        let resumes = [];
        directories.forEach(dir => {
            let name = dir.replace('resume-', '');
            resumes.push({
                path: dir,
                name: name.replace('-', ' ')
            });
        });
        return resumes;
    },
    /**
     * setTimeout as Promise
     * @param {number} time time in ms
     * @return {Promise}
     */
    setTimeout: function(time) {
        return new Promise(res => setTimeout(res, time));
    },
    /**
     * reads file of content
     * @param  {string} dir directory
     * @return {Promise}
     */
    readFileContent: function(dir) {
        return new Promise((res, rej) => {
            fs.readFile(dir, 'utf8', (err, template) => {
                if (err) rej(err);
                else res(template);
            });
        });
    },
    /**
     * writes content to given file
     * @param  {string} dir     directory
     * @param  {string} content content of file
     * @return {Promise}
     */
    writeFile: function(dir, content) {
        return new Promise((res, rej) => {
            writeFile(dir, content, err => {
                if (err) rej(err);
                res();
            });
        });

    },
    /**
     * executes command
     * @param  {string} script e.g. 'echo "Hello World"'
     * @return {Promise}
     */
    execBash: function(script) {
        return new Promise((res, rej) => {
            exec(script,
                error => {
                    if (error) rej(error);
                    else res();
                });
        });
    }
};

module.exports = Util;
