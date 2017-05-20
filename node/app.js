const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

/**
 * converts resumes to pdf
 * @return {Promise}
 */
const convert = async() => {
  try {
    const directories = getResumesFromDirectories();
    let script = '';
    directories.forEach(resume => (script += electroshotScript(resume.path)));
    script = script.substring(0, script.length - 2);
    await execBash(script);
    console.log('Successfully generated pdfs. Check in "/pdf".');
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * generates electroshot command for screenshoting resume
 * @param  {string} resume resume name in URL
 * @return {string}        electroshot command
 */
const electroshotScript = resume => {
  const dir = path.join(__dirname, '../pdf');
  return 'electroshot localhost:8080/#/' + resume +
    ' 2481x3508 --pdf-margin none --format pdf --out ' + dir +
    ' --filename "' + resume + '.pdf" --pdf-background; ';
};

/**
 * gets resumes names and paths from directories
 * @return {Object[]} array with resumes object {path: '', name: ''}
 */
const getResumesFromDirectories = () => {
  const directories = getDirectories();
  return directories
  .filter(dir => dir.includes('resume-') && dir !== 'resume-XX')
  .map(dir => {
    let name = dir.replace('resume-', '');
    return {
      path: dir.replace('.vue', ''),
      name: name.replace('-', ' ')
    };
  });
};

/**
 * gets directories starting with 'resume-'
 * @return {[]}
 */
const getDirectories = () => {
  const srcpath = path.join(__dirname, '../src/components');
  return fs.readdirSync(srcpath)
    .filter(file => file.includes('resume-'));
};

/**
 * executes command
 * @param  {string} script e.g. 'echo "Hello World"'
 * @return {Promise}
 */
const execBash = script => {
  return new Promise((resolve, reject) => {
    exec(script,
      error => {
        if (error) reject(error);
        else resolve();
      });
  });
};

convert();
