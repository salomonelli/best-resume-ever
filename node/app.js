const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const Rx = require('rxjs/Rx');
const http = require('http');

const fetchResponse = () => {
  return new Promise((res, rej) => {
    try {
      const req = http.request('http://localhost:8080/#/', response => res(response.statusCode));
      req.on('error', (err) => rej(err));
      req.end();
    } catch (err) {
      rej(err);
    }
  });
};

const waitForServerReachable = () => {
  return Rx.Observable
    .interval(1000)
    .mergeMap(async() => {
      try {
        const statusCode = await fetchResponse();
        if (statusCode === 200) return true;
      } catch (err) {}
      return false;
    })
    .filter(ok => !!ok);
};

const timedOut = timeout => {
  return new Promise(res => {
    setTimeout(res, timeout);
  });
};

const convert = async() => {
  await waitForServerReachable().first().toPromise();
  console.log('Connected to server ...');
  console.log('Exporting ...');
  try {
    const directories = getResumesFromDirectories();
    const scripts = directories.map(resume => electroshotScript(resume.path));
    await execBash(scripts.join(' && '));
  } catch (err) {
    throw new Error(err);
  }
  console.log('Finished exports.');
};

const electroshotScript = resume => {
  const dir = path.join(__dirname, '../pdf');
  return 'electroshot localhost:8080/#/resume/' + resume +
    ' 2481x3508 --pdf-margin none --format pdf --out ' + dir +
    ' --filename "' + resume + '.pdf" --pdf-background';
};

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
  const srcpath = path.join(__dirname, '../src/resumes');
  return fs.readdirSync(srcpath)
    .filter(file => file !== 'resumes.js' && file !== 'template.vue');
};

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
