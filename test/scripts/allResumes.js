const path = require('path');
const fs = require('fs');

const getResumesFromDirectories = () => {
  const directories = getDirectories();
  return directories
    .map(dir => {
      let fileName = dir.replace('.vue', '');
      return {
        path: fileName,
        name: fileName
      };
    });
};

const getDirectories = () => {
  const srcpath = path.join(__dirname, '../../src/resumes');
  return fs.readdirSync(srcpath)
    .filter(file => file !== 'resumes.js' && file !== 'template.vue' && file !== 'options.js');
};

module.exports = getResumesFromDirectories;
