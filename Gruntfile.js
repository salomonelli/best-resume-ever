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
            target: {
                options: {
                    nodeargs: ['--harmony-async-await']
                },
                src: ['src/less.js']
            }
        },
        watch: {
            app: {
                files: [
                    'src/**/*.js',
                    'resumes/**/*.mustache',
                    'resumes/**/*.less',
                    'less/**/*.less'
                ],
                tasks: ['execute', 'babel'],
                options: {
                    nospawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['babel', 'execute', 'watch']);
};
