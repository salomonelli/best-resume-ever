let renderReadMe = (() => {
    var _ref = _asyncToGenerator(function* () {
        const readme = yield readFileContent('README.md');
        const githubPagesTemplate = yield readFileContent('resumes/views/githubPages.mustache');
        var html = Mustache.render(githubPagesTemplate, {
            content: readme
        });
        writeFile('index.html', html, function (err) {
            if (err) console.log(err);else console.log('Github pages index.html was successfully generated from README.');
        });
    });

    return function renderReadMe() {
        return _ref.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
            if (err) rej(err);else res(template);
        });
    });
}

renderReadMe();