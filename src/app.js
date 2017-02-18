const StyleCompiler = require('./StyleCompiler');
const ResumeToPdf = require('./ResumeToPdf');
const Server = require('./Server');

process.argv.forEach(argument => {
    switch (argument) {
        case 'less':
            StyleCompiler.run();
            break;
        case 'pdf':
            ResumeToPdf.convert();
            break;
        case 'server':
            Server.run();
            break;
    }
});
