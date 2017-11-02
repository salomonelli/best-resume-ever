const mocha = require('mocha');
const assert = require('assert');
const path = require('path');
const fs = require('fs');
const describe = mocha.describe;
const it = mocha.it;
const allResumes = require('./allResumes');

describe('npm run preview', () => {
  it('should have generated the png files', () => {
    const resumes = allResumes();
    resumes.forEach(resume => {
      const p = path.join(__dirname, '../../src/assets/preview/resume-' + resume.path + '.png');
      assert.ok(fs.existsSync(p));
    });
  });
});
