const path = require('path');
const Config = require('./node/Config');
const Util = require('./node/Util')(
    path,
    require('write'),
    require('fs'),
    require('child_process').exec
);
const Server = require('./node/Server')(
    path,
    require('express'),
    require('request-promise'),
    Config,
    Util,
    require('./person.js'),
    require('http'),
    require('reload')
);
const StyleCompiler = require('./node/StyleCompiler');
const ResumeToPdf = require('./node/ResumeToPdf');

process.argv.forEach(argument => {
    switch (argument) {
        case 'less':
            StyleCompiler(
                require('less'),
                path,
                require('clean-css'),
                Util
            );
            break;
        case 'pdf':
            ResumeToPdf(
                path,
                Config,
                Util,
                Server
            );
            break;
        case 'server':
            Server.run();
            break;
    }
});
