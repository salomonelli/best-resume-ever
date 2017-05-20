const path = require('path');
const Util = require('./Util');
const ResumeToPdf = {
  /**
   * generates electroshot command for screenshoting resume
   * @param  {string} resume resume name in URL
   * @return {string}        electroshot command
   */
  electroshotScript: resume => {
    const dir = path.join(__dirname, '../pdf');
    console.dir(dir);
    return 'electroshot localhost:8080/#/' + resume +
      ' 2481x3508 --pdf-margin none --format pdf --out ' + dir +
      ' --filename "' + resume + '.pdf" --pdf-background; ';
  },
  /**
   * converts resumes to pdf
   * @return {Promise}
   */
  convert: async() => {
    const directories = Util.getResumesFromDirectories();
    let script = '';
    directories.forEach(resume => (script += ResumeToPdf.electroshotScript(resume.path)));
    script = script.substring(0, script.length - 2);
    await Util.execBash(script);
  }
};

module.exports = ResumeToPdf;
