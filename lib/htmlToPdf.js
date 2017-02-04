let convertToPdf = (() => {
    var _ref = _asyncToGenerator(function* () {
        const layoutTemplate = yield readFileContent('views/layout.mustache');
        for (let resume of directories) {
            const resumeTemplate = yield readFileContent(resume + '/' + resume + '.mustache');
            const html = Mustache.render(layoutTemplate, {
                person: person
            }, {
                content: resumeTemplate
            });
            yield generatePdf(html, resume + '.pdf');
        }
        console.log('Generated resumes into /pdf.');
    });

    return function convertToPdf() {
        return _ref.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const person = require('./person.js');
const Mustache = require('mustache');
const pdf = require('html-pdf');
const fs = require('fs');
const path = require('path');

const dir = __dirname.replace('lib', '');
const directories = getDirectories(dir + '/resumes');

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(file => file.includes('resume-'));
}

function readFileContent(fileName) {
    const dir = path.join(__dirname, '../resumes/' + fileName);
    return new Promise((res, rej) => {
        fs.readFile(dir, 'utf8', (err, template) => {
            if (err) rej(err);else res(template);
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
        }).toFile(dir, function (err, res) {
            if (err) rej(err);else resolve();
        });
    });
}

convertToPdf();