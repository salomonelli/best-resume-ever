const path = require('path');
const writeFile = require('write');
const fs = require('fs');
const exec = require('child_process').exec;

const Util = {
  /**
   * gets directories starting with 'resume-'
   * @return {[]}
   */
  getDirectories: () => {
    const srcpath = path.join(__dirname, '../src/components');
    return fs.readdirSync(srcpath)
      .filter(file => file.includes('resume-'));
  },
  /**
   * gets resumes names and paths from directories
   * @return {Object[]} array with resumes object {path: '', name: ''}
   */
  getResumesFromDirectories: () => {
    const directories = Util.getDirectories();
    return directories
    .filter(dir => dir.includes('resume-') && dir !== 'resume-XX')
    .map(dir => {
      let name = dir.replace('resume-', '');
      return {
        path: dir.replace('.vue', ''),
        name: name.replace('-', ' ')
      };
    });
  },
  /**
   * setTimeout as Promise
   * @param {number} time time in ms
   * @return {Promise}
   */
  setTimeout: time => {
    return new Promise(resolve => setTimeout(resolve, time));
  },
  /**
   * reads file of content
   * @param  {string} dir directory
   * @return {Promise}
   */
  readFileContent: dir => {
    return new Promise((resolve, reject) => {
      fs.readFile(dir, 'utf8', (err, template) => {
        if (err) reject(err);
        else resolve(template);
      });
    });
  },
  /**
   * writes content to given file
   * @param  {string} dir     directory
   * @param  {string} content content of file
   * @return {Promise}
   */
  writeFile: async (dir, content) => {
    return new Promise((resolve, reject) => {
      writeFile(dir, content, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  },
  /**
   * executes command
   * @param  {string} script e.g. 'echo "Hello World"'
   * @return {Promise}
   */
  execBash: script => {
    return new Promise((resolve, reject) => {
      exec(script,
        error => {
          if (error) reject(error);
          else resolve();
        });
    });
  }
};

module.exports = Util;
