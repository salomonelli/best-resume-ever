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
    const readme = await readFileContent('README.md');
    const githubPagesTemplate = await readFileContent('resumes/views/githubPages.mustache');
    var html = Mustache.render(githubPagesTemplate, {
        content: readme
    });
    writeFile('index.html', html, err => {
        if (err) console.log(err)
        else console.log('Github pages index.html was successfully generated from README.');
    });
}

renderReadMe();
