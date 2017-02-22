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
                    nodeargs: ['--harmony-async-await'],
                    args: ['less']
                },
                src: ['src/app.js']
            },
            wait: {
                options: {
                    nodeargs: ['--harmony-async-await'],
                    args: ['wait']
                },
                src: ['src/app.js']
            }
        },
        bgShell: {
            _defaults: {
                bg: true
            },
            express: {
                cmd: 'npm run server'
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
                tasks: ['execute', 'babel', 'bgShell:express', 'execute:wait'],
                options: {
                    nospawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['babel', 'execute:less', 'bgShell:express', 'execute:wait', 'watch']);
};
