const less = require('less');
const path = require('path');
const CleanCSS = require('clean-css');
const Util = require('./Util');

const StyleCompiler = {
    /**
     * compiles less string to css string
     * @param  {string} lessContent
     * @return {string}             css
     */
    compile: function(lessContent) {
        let lessDir = path.join(__dirname, '../less');
        return new Promise((res, rej) => {
            less.render(lessContent, {
                paths: [lessDir, lessDir + '/fonts'],
            }, (e, output) => {
                if (e) rej(e);
                else res(output.css);
            });
        });
    },
    /**
     * minifies css
     * @param  {string} css
     * @return {string}     minified css
     */
    minify: function(css) {
        return new Promise((res, rej) => {
            new CleanCSS().minify(css, (err, output) => {
                if (err) rej(err);
                else res(output);
            });
        });
    },
    /**
     * compiles less files to minified css file
     * @return {Promise}
     */
    run: async function() {
        const styleLess = await Util.readFileContent(path.join(__dirname, '../less/style.less'));
        const styleCss = await StyleCompiler.compile(styleLess);
        const styleMinified = await StyleCompiler.minify(styleCss);
        const stylePath = path.join(__dirname, '../public/styles/style.min.css');
        await Util.writeFile(stylePath, styleMinified.styles);

        const directories = Util.getResumesFromDirectories();
        await Promise.all(
            directories
            .map(async(resume) => {
                const resumeLess = await Util.readFileContent(
                    path.join(__dirname, '../resumes/' + resume.path + '/style.less')
                );
                const resumeCss = await StyleCompiler.compile(resumeLess);
                const resumeMinified = await StyleCompiler.minify(resumeCss);
                //write file
                const resumePath = path.join(__dirname, '../public/styles/' + resume.path + '.min.css');
                await Util.writeFile(resumePath, resumeMinified.styles);
            })
        );
    }
};

module.exports = StyleCompiler;
