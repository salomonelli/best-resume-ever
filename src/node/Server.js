let path, express, request, Config, Util, person, http, reload;

let app, resumes;
const Server = {
    /**
     * sets configurations of express app
     */
    setup: function() {
        if (!app) app = express();
        app.set('views', path.join(__dirname, '../../resumes'));
        app.engine('mustache', require('hogan-express'));
        app.set('view engine', 'mustache');
        app.use(express.static(path.join(__dirname, '../../public')));
        app.use(express.static(path.join(__dirname, '../../node_modules')));
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
            .catch(error => {
                if (error) return false;
            });
    },
    /**
     * sets route of express app
     * @param {string} path     e.g. '/' or '/resumes'
     * @param {string} template e.g. 'views/resumeX/index'
     */
    setRoute: function(path, template) {
        app.get(path, (req, res) => {
            let style = null;
            const stylePath = path.replace('/', '');
            if (path != '') style = stylePath;
            res.render('views/layout', {
                partials: {
                    content: template
                },
                style: style,
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
    autoReload: function() {
        const server = http.createServer(app);
        reload(server, app);
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
        Server.autoReload();
        Server.start();
    }
};

const mod = function(
    pathD,
    expressD,
    requestD,
    ConfigD,
    UtilD,
    personD,
    httpD,
    reloadD
) {
    path = pathD;
    express = expressD;
    request = requestD;
    Config = ConfigD;
    Util = UtilD;
    person = personD;
    http = httpD;
    reload = reloadD;
    return Server;
};

module.exports = mod;
