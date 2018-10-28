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
            script: {
                files: 'src/js/Progetto_Santoro.js',
                tasks: 'browserify'
            },

            script2: {
                files: 'src/css/Progetto_Santoro.less',
                tasks: 'less'
            },
        },

        cssmin: {
            target: {
                files: {
                    'dist/css/style.min.css': ['node_modules/bootstrap/dist/css/bootstrap.css', 'src/css/Progetto_Santoro.css']
                }
            }
        },

        less:{
          target: {
              files: {
                  'src/css/Progetto_Santoro.css': 'src/css/Progetto_Santoro.less'
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
                    'dist/js/scriptMin.js': 'src/js/bubel-ema5.js'
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //quando siamo in sviluppo
    grunt.task.registerTask('develop', ['watch']);
    grunt.task.registerTask('build', ['cssmin','babel', 'uglify','serve']);


}
