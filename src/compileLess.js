const less = require('less');
const path = require('path');
const fs = require('fs');
const CleanCSS = require('clean-css');
const writeFile = require('write');

const dir = path.join(__dirname, '../resumes');
const directories = getDirectories(dir);

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath)
        .filter(file => file.includes('resume-'))
}

function compileToCSS(lessContent) {
    let lessDir = path.join(__dirname, '../less');
    return new Promise((res, rej) => {
        less.render(lessContent, {
            paths: [lessDir, lessDir + '/fonts'],
        }, (e, output) => {
            if (e) rej(e);
            else res(output.css);
        });
    });
}

function readFileContent(fileName) {
    const dir = path.join(__dirname, '../' + fileName);
    return new Promise((res, rej) => {
        fs.readFile(dir, 'utf8', (err, template) => {
            if (err) rej(err);
            else res(template);
        });
    });
}

function minifyCSS(css) {
    return new Promise((res, rej) => {
        new CleanCSS().minify(css, (err, output) => {
            if (err) rej(err);
            else res(output)
        });
    });
}

async function compileLessFiles() {
    const styleLess = await readFileContent('less/style.less');
    let css = await compileToCSS(styleLess);

    const contents = await Promise.all(
        directories
        .map(resume => readFileContent('resumes/' + resume + '/' + resume + '.less'))
    );
    const compiledContents = await Promise.all(
        contents
        .map(content => compileToCSS(content))
    );
    const ret = compiledContents.reduce((pre, cur) => pre += cur, css);

    // minify
    const minCSS = await minifyCSS(ret);

    // write file
    const p = path.join(__dirname, '../public/style.min.css');
    writeFile(p, minCSS.styles, err => {
        if (err) console.log(err);
    });
}

compileLessFiles();
