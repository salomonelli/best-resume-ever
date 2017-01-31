var path = require('path');

// personal data
var person = require('./person.js');

// express app
var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();
app.set('views', path.join(__dirname, 'templates'));
app.engine('mustache', require('hogan-express'));
app.set('view engine', 'mustache');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

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
            content: 'resume-1'
        },
        person: person
    });
});

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening on localhost:3000!');
});
