const mv = require('mv');
const PDFImage = require('pdf-image').PDFImage;
const path = require('path');
const fs = require('fs');

const getDirectories = () => {
    const srcpath = path.join(__dirname, '../pdf');
    return fs.readdirSync(srcpath);
};

const getTemplateName = PDF => {
    return PDF.replace('.pdf', '');
};

const convert = async (PDF) => {
    const pdfImage = new PDFImage(path.join(__dirname, '../pdf/' + PDF));
    await pdfImage.convertPage(0);
};

const directories = getDirectories();
directories.forEach(async (dir) => {
    try {
        await convert(dir);
    } catch (e) {
        console.dir(e);
    }
    const source = path.join(__dirname, '../pdf/' + getTemplateName(dir) + '-0.png');
    const output = path.join(__dirname, '../src/assets/preview/resume-' + getTemplateName(dir) + '.png');
    console.log(output);
    mv(source, output, function (err) {
        if (err) console.dir(err);
    });
});
