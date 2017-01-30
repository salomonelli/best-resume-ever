var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./index.html', 'utf8');
var options = {
    format: 'A3',
    header: {
        height: 0
    },
    footer: {
        height: 0
    },
    base: 'http://localhost:8000/'
};

pdf.create(html, options).toFile('./CV.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log('CV.pdf was generated');
});
