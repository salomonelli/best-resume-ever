var path = require('path');

// personal data
var person = require('./person.js');

// express app
var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();
app.set('views', path.join(__dirname, 'resumes'));
app.engine('mustache', require('hogan-express'));
app.set('view engine', 'mustache');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'resumes')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/open-sans-fontface/fonts')));
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/raleway-webfont/fonts')));

app.get('/', function(req, res) {
    res.render('layout', {
        partials: {
            content: 'index'
        }
    });
});

app.get('/resume-1', function(req, res) {
    res.render('layout', {
        partials: {
            content: 'resume-1/resume-1'
        },
        person: person
    });
});

app.get('/resume-2', function(req, res) {
    res.render('layout', {
        partials: {
            content: 'resume-2/resume-2'
        },
        person: person
    });
});

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening on localhost:3000!');
});
