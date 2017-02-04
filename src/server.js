const path = require('path');
const fs = require('fs');
const person = require('./person.js');
const express = require('express');
const mustacheExpress = require('mustache-express');

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

app.get('/', (req, res) => {
    res.render('views/layout', {
        partials: {
            content: 'views/index'
        }
    });
});

for (let resume of directories) {
    app.get('/' + resume, (req, res) => {
        res.render('views/layout', {
            partials: {
                content: resume + '/' + resume
            },
            person: person
        });
    });
}

app.listen(3000, '0.0.0.0', () => console.log('Listening on localhost:3000!'));
