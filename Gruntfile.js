'use strict';

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // configurable paths
        settings: {
            app: 'app',
            dist: 'dist'
        },
        watch: {
            scss: {
                files: ['<%= settings.app %>/sass/**/*.{scss,sass}'],
                tasks: [
                    'sass:dev'
                ]
            },
            styles: {
                files: ['<%= settings.app %>/styles/**/*.css'],
                tasks: ['autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= settings.app %>/**/*.html',
                    '<%= settings.app %>/styles/**/*.css',
                    '<%= settings.app %>/sass/**/*.sass',
                    '<%= settings.app %>/scripts/**/*.js',
                    '<%= settings.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        sass: {
            dev: {
                options: {
                    imagePath: '<%= settings.app %>/images',
                    sourceComments: true
                },
                files: {
                    '<%= settings.app %>/styles/main.css': '<%= settings.app %>/sass/**/*.sass'
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= settings.app %>'
                    ]
                }
            },

            dist: {
                options: {
                    open: true,
                    base: '<%= settings.dist %>',
                    livereload: false
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= settings.app %>/styles/',
                    src: '**/*.css',
                    dest: '<%= settings.app %>/styles/'
                }]
            }
        },
        'bower-install': {
            app: {
                html: '<%= settings.app %>/index.html',
                ignorePath: '<%= settings.app %>/'
            }
        },
        // Put files not handled in other tasks here
        bower: {
            all: {
                rjsConfig: '<%= settings.app %>/scripts/main.js'
            }
        },
        modernizr: {
            devFile: '<%= settings.app %>/bower_components/modernizr/modernizr.js',
            outputFile: '<%= settings.app %>/bower_components/modernizr/modernizr.js',
            files: [
                '<%= settings.app %>/scripts/**/*.js',
                '<%= settings.app %>/styles/**/*.css',
                '!<%= settings.app %>/scripts/vendor/*'
            ],
            uglify: true
        }
    });

    grunt.registerTask('default', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });
};
