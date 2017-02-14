const showdown = require('showdown');
const converter = new showdown.Converter();
const path = require('path');
const Mustache = require('mustache');
const Util = require('./Util');

/**
 * renders readme to html for github Pages
 * @return {Promise}
 */
const RenderReadMe = async function() {
    let dir = path.join(__dirname, '../' + 'README.md');
    const readmeContent = await Util.readFileContent(dir);
    const readmeHTML = converter.makeHtml(readmeContent);
    dir = path.join(__dirname, '../' + 'resumes/views/githubPages.mustache');
    const githubPagesTemplate = await Util.readFileContent(dir);
    const readme = Mustache.render(githubPagesTemplate, {
        content: readmeHTML
    });
    await Util.writeFile('index.html', readme);
};

RenderReadMe();

module.exports = RenderReadMe;
