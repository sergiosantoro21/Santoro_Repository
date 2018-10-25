module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        serve: {
            options: {
                port: 9000
            }
        },

        browserify: {
            dist: {
                files: {
                    'src/js/bundle.js': 'src/js/Progetto_Santoro.js'
                }
            }
        },

        watch: {
            grant: {
                files: ['**/*.js'],
                tasks: ['browserify']
            }
        },

        cssmin: {
            target: {
                files: {
                    'dist/css/cssMin.css': ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'src/css/Progetto_Santoro.css']
                }
            }
        },

        babel: {
            options: {
                presets: ['env']
            },
            dist: {
                files: {
                    'src/js/bubel-ema5.js': 'src/js/bundle.js'
                }
            }
        },


        uglify: {
            target: {
                files: {
                    'dist/js/scriptMin.js': ['src/js/bubel-ema5.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js']
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //quando siamo in sviluppo

    //grunt.task.registerTask('develop', ['less','browserify', 'watch']);
    grunt.task.registerTask('develop', ['browserify', 'watch']);

    //quando costruiiamo il sito
    grunt.task.registerTask('build', ['cssmin', 'browserify', 'babel', 'uglify','serve']);

}
