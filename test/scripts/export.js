const mocha = require('mocha');
const assert = require('assert');
const path = require('path');
const fs = require('fs');
const describe = mocha.describe;
const it = mocha.it;
const allResumes = require('./allResumes');

describe('npm run export', () => {
  it('should have generated the pdf files', () => {
    const resumes = allResumes();
    resumes.forEach(resume => {
      const p = path.join(__dirname, '../../pdf/' + resume.path + '.pdf');
      assert.ok(fs.existsSync(p));
    });
  });
});
