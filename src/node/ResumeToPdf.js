let path, Config, Util, Server;

const ResumeToPdf = {
    /**
     * generates electroshot command for screenshoting resume
     * @param  {string} resume resume name in URL
     * @return {string}        electroshot command
     */
    electroshotScript: function(resume) {
        const dir = path.join(__dirname, '../../pdf');
        return 'electroshot localhost:' + Config.port + '/' + resume +
            ' 2481x3508 --pdf-margin none --format pdf --out ' + dir +
            ' --filename "' + resume + '.pdf" --pdf-background; ';
    },
    /**
     * converts resumes to pdf
     * @return {Promise}
     */
    convert: async function() {
        Server.run();
        const directories = Util.getResumesFromDirectories();
        let script = '';
        directories.forEach(async(resume) => script += ResumeToPdf.electroshotScript(resume.path));
        script = script.substring(0, script.length - 2);
        await Util.execBash(script);
        await Server.kill();
    }
};

const mod = function(pathD, ConfigD, UtilD, ServerD) {
    path = pathD;
    Config = ConfigD;
    Util = UtilD;
    Server = ServerD;
    return ResumeToPdf.convert();
};

module.exports = mod;
