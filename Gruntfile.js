module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-exec');
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'public/js/gen/javascript.js': 'public/js/javascript.js'
                }
            }
        },
        exec: {
            less: 'node --harmony-async-await src/app.js less',
            wait: 'node --harmony-async-await src/app.js wait'
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
                tasks: ['exec:less', 'babel', 'bgShell:express', 'exec:wait'],
                options: {
                    nospawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['babel', 'exec:less', 'bgShell:express', 'exec:wait', 'watch']);
};
