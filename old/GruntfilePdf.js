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
            pdf: 'node --harmony-async-await src/app.js pdf'
        }
    });

    grunt.registerTask('default', ['babel', 'exec:less', 'exec:pdf']);
};
