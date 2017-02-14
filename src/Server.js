const path = require('path');
const fs = require('fs');
const express = require('express');
const mustacheExpress = require('mustache-express');
const request = require('request-promise');
const Config = require('./Config');
const Util = require('./Util');
const person = require('./person.js');

let app, resumes;
const Server = {
    /**
     * sets configurations of express app
     */
    setup: function() {
        if (!app) app = express();
        app.set('views', path.join(__dirname, '../resumes'));
        app.engine('mustache', require('hogan-express'));
        app.set('view engine', 'mustache');
        app.use(express.static(path.join(__dirname, '../public')));
        app.use(express.static(path.join(__dirname, '../node_modules')));
    },
    /**
     * starts up express app
     */
    start: function() {
        app.listen(Config.port, '0.0.0.0', () => console.log('Listening on localhost:' + Config.port + '!'));
    },
    /**
     * kills express app
     */
    kill: function() {
        request.get('http://localhost:' + Config.port + '/kill')
            .catch(error => {});
    },
    /**
     * sets route of express app
     * @param {string} path     e.g. '/' or '/resumes'
     * @param {string} template e.g. 'views/resumeX/index'
     */
    setRoute: function(path, template) {
        app.get(path, (req, res) => {
            res.render('views/layout', {
                partials: {
                    content: template
                },
                resumes: resumes,
                person: person
            });
        });
    },
    /**
     * sets route to kill app
     */
    setKillRoute: function() {
        app.get('/kill', () => process.exit());
    },
    /**
     * sets routes for each resume
     */
    setRoutesForResumes: function() {
        const directories = Util.getDirectories();
        for (let resume of directories) {
            Server.setRoute('/' + resume, resume + '/index');
        }
    },
    /**
     * run server
     * @return {Promise} resolves when server is running
     */
    run: async function() {
        resumes = Util.getResumesFromDirectories();
        Server.setup();
        Server.setRoute('/', 'views/index');
        Server.setRoutesForResumes();
        Server.setKillRoute();
        Server.kill();
        await Util.setTimeout(500);
        Server.start();
    }
}

module.exports = Server;
