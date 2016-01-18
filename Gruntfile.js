module.exports = function (grunt) {
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                ignores: ['node_modules/**', 'public/scripts/lib/**', '**/*.min.js'],
                jshintrc: '.jshintrc'
            }
        },
        uglify: {
          build: {
            files: [{
              expand: true,
              src: ['*.js', '**/*.js'],
              dest:'public/scripts/react/components-min',
              cwd: 'public/scripts/react/components-js',
              ext: '.min.js'
            }]
          }
        },
        less: {
            src: {
                files: [{
                    expand: true,
                    cwd: 'public/styles/less',
                    src: 'custom.less',
                    dest: 'public/styles/css',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            src: {
                files: [{
                    expand: true,
                    cwd: 'public/styles/css',
                    src: 'custom.css',
                    dest: 'public/styles/css',
                    ext: '.min.css'
                }]
            }
        },
        concurrent: {
            dev: {
                tasks: ['watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        watch: {
            all: {
                files: ['public/**/*', 'views/**', '!**/node_modules/**', '!public/scripts/lib/**/*', '!**/*.min.*'],
                options: {
                    livereload: 3006
                }
            },
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: 'jshint:gruntfile'
            },
            scripts: {
                files: 'public/javascript/**/**/*.js',
                tasks: ['jshint:client', 'uglify','react']
            },
            server: {
                files: ['.rebooted'],
                options: {
                    livereload: true
                }
            } ,
            less: {
                files: ['public/styles/less/*.less'],
                tasks: ['less', 'cssmin', 'concat:css']
            }
        }
    };

    grunt.initConfig(config);

    // Load the tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint','uglify', 'less', 'cssmin','concurrent']);
};
