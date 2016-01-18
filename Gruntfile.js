/**
 * Created by aparnalingam on 1/17/16.
 */

module.exports = function (grunt) {
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                ignores: ['node_modules/**', 'public/scripts/lib/**', '**/*.min.js'],
                jshintrc: '.jshintrc'
            }
        },
        react: {
            src: {
                files: [{
                    expand: true,
                    cwd: 'public/scripts/react/components-jsx',
                    src: ['*.js', '**/*.js'],
                    dest: 'public/scripts/react/components-js',
                    ext: '.js'
                }]
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
        }
    };

    grunt.initConfig(config);

    // Load the tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'react','uglify','less', 'cssmin']);
};
