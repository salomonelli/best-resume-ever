const person = require('./person.js');
const Mustache = require('mustache');
const pdf = require('html-pdf');
const fs = require('fs');
const path = require('path');
var exec = require('child_process').exec;
const dir = path.join(__dirname, '../resumes');
const directories = getDirectories(dir);
const request = require('request-promise');
const port = 3000;

require('./server');

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath)
        .filter(file => file.includes('resume-'))
}

async function convertToPdf() {
    let script = '';
    let dir = path.join(__dirname, '../pdf');
    directories.forEach(async(resume) => {
        script += 'electroshot localhost:3000/' + resume +
            ' 2481x3508 --pdf-margin none --format pdf --out ' + dir +
            ' --filename "' + resume + '.pdf" --pdf-background; ';
    });
    script = script.substring(0, script.length - 2);
    exec(script,
        (error, stdout, stderr) => {
            if (error) console.log(error);
            else console.log(stderr);
            request.get('http://localhost:' + port + '/kill')
                .catch(error => {});
        });
}


convertToPdf();
