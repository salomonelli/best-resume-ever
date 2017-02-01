var showdown = require('showdown'),
    converter = new showdown.Converter();
var fs = require('fs');
var Mustache = require('mustache');
var writeFile = require('write');

fs.readFile('README.md', 'utf-8', function(err, data) {
    if (err) console.log(err);
    var readme = converter.makeHtml(data);
    fs.readFile('resumes/githubPages.mustache', 'utf-8', function(err, template) {
        var html = Mustache.render(template, {
            content: readme
        });
        writeFile('index.html', html, function(err) {
            if (err) console.log(err);
        });
    });
});
