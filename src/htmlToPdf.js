const person = require('./person.js');
const Mustache = require('mustache');
const pdf = require('html-pdf');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../resumes');
const directories = getDirectories(dir);

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath)
        .filter(file => file.includes('resume-'))
}

function readFileContent(fileName) {
    const dir = path.join(__dirname, '../resumes/' + fileName);
    return new Promise((res, rej) => {
        fs.readFile(dir, 'utf8', (err, template) => {
            if (err) rej(err);
            else res(template);
        });
    });
}

function generatePdf(html, fileName) {
    const dir = path.join(__dirname, '../pdf/' + fileName);
    return new Promise((resolve, rej) => {
        pdf.create(html, {
            'type': 'pdf',
            'format': 'A4',
            'base': 'http://localhost:3000'
        }).toFile(dir, function(err, res) {
            if (err) rej(err);
            else resolve();
        });
    });
}

async function convertToPdf() {
    const layoutTemplate = await readFileContent('views/layout.mustache');
    for (let resume of directories) {
        const resumeTemplate = await readFileContent(resume + '/' + resume + '.mustache');
        const html = Mustache.render(
            layoutTemplate, {
                person: person
            }, {
                content: resumeTemplate
            });
        await generatePdf(html, resume + '.pdf');
    }
    console.log('Generated resumes into /pdf.');
}

convertToPdf();
