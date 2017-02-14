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
        const directories = Util.getResumesFromDirectories();
        const styleLess = await Util.readFileContent(path.join(__dirname, '../less/style.less'));
        let css = await StyleCompiler.compile(styleLess);
        const contents = await Promise.all(
            directories
            .map(resume => Util.readFileContent(
                path.join(__dirname, '../resumes/' + resume.path + '/style.less')
            ))
        );
        const compiledContents = await Promise.all(
            contents
            .map(content => StyleCompiler.compile(content))
        );
        const ret = compiledContents.reduce((pre, cur) => pre += cur, css);
        // minify
        const minCSS = await StyleCompiler.minify(ret);
        // write file
        const p = path.join(__dirname, '../public/style.min.css');
        await Util.writeFile(p, minCSS.styles);
    }
};

module.exports = StyleCompiler;
