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
app.use(express.static(path.join(__dirname, 'node_modules/material-design-icons/iconfont')));
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/npm-font-open-sans-condensed/fonts')));
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/roboto-fontface/fonts')));
app.use(express.static(path.join(__dirname, 'node_modules/@typopro/web-montserrat')));
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

app.get('/resume-3', function(req, res) {
    res.render('layout', {
        partials: {
            content: 'resume-3/resume-3'
        },
        person: person
    });
});

app.get('/resume-4', function(req, res) {
    res.render('layout', {
        partials: {
            content: 'resume-4/resume-4'
        },
        person: person
    });
});

app.get('/resume-5', function(req, res) {
    res.render('layout', {
        partials: {
            content: 'resume-5/resume-5'
        },
        person: person
    });
});

app.get('/resume-6', function(req, res) {
    res.render('layout', {
        partials: {
            content: 'resume-6/resume-6'
        },
        person: person
    });
});

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening on localhost:3000!');
});
