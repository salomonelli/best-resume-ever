const path = require('path');
const fs = require('fs');
const person = require('./person.js');
const express = require('express');
const mustacheExpress = require('mustache-express');
const request = require('request-promise');
const port = 3000;

let app = express();
app.set('views', path.join(__dirname, '../resumes'));
app.engine('mustache', require('hogan-express'));
app.set('view engine', 'mustache');
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

const dir = path.join(__dirname, '../resumes');
const directories = getDirectories(dir);

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath)
        .filter(file => file.includes('resume-'))
}

let resumes = [];
directories.forEach(dir => {
    let name = dir.replace('resume-', '');
    resumes.push({
        path: dir,
        name: name.replace('-', ' ')
    })
});

app.get('/', (req, res) => {
    res.render('views/layout', {
        partials: {
            content: 'views/index'
        },
        resumes: resumes
    });
});

app.get('/kill', () => process.exit());

for (let resume of directories) {
    app.get('/' + resume, (req, res) => {
        res.render('views/layout', {
            partials: {
                content: resume + '/index'
            },
            person: person
        });
    });
}

request.get('http://localhost:' + port + '/kill')
    .catch(error => {});

setTimeout(() => {
    app.listen(port, '0.0.0.0', () => console.log('Listening on localhost:' + port + '!'));
}, 500);
