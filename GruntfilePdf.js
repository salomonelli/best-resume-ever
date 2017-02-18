module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'public/javascript.js': 'src/public/javascript.js'
                }
            }
        },
        execute: {
            less: {
                options: {
                    nodeargs: ['--harmony-async-await']
                },
                src: ['src/less.js']
            },
            pdf: {
                options: {
                    nodeargs: ['--harmony-async-await']
                },
                src: ['src/generatePdfs.js']
            }
        }
    });

    grunt.registerTask('default', ['babel', 'execute']);
};
