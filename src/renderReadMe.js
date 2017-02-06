const showdown = require('showdown');
const converter = new showdown.Converter();
const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');
const writeFile = require('write');

function readFileContent(fileName) {
    const dir = path.join(__dirname, '../' + fileName);
    return new Promise((res, rej) => {
        fs.readFile(dir, 'utf8', (err, template) => {
            if (err) rej(err);
            else res(template);
        });
    });
}

async function renderReadMe() {
    const readmeContent = await readFileContent('README.md');
    const readmeHTML = converter.makeHtml(readmeContent);
    const githubPagesTemplate = await readFileContent('resumes/views/githubPages.mustache');
    const readme = Mustache.render(githubPagesTemplate, {
        content: readmeHTML
    });
    writeFile('index.html', readme, err => {
        if (err) console.log(err)
        else console.log('Github pages index.html was successfully generated from README.');
    });
}

renderReadMe();
