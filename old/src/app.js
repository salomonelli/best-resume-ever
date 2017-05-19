const Server = require('./node/Server');
const StyleCompiler = require('./node/StyleCompiler');
const ResumeToPdf = require('./node/ResumeToPdf');

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
        case 'kill':
            Server.kill();
            break;
        case 'wait':
            setTimeout(() => console.log('waiting'), 3000);
            break;
    }
});
