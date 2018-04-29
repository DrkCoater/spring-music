module.exports = function ( grunt ) {
    grunt.loadNpmTasks('grunt-maven');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-html2js');
    var app_files = {
        js: ['src/app.js', 'src/**/*.js'],
        html: ['src/index.html'],
        tpl: ['src/views/**/*.html']
    };
    var dependencies = {
        js: [
            'bower_components/angular/angular.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js'
        ],
        css: [
            'bower_components/angular/angular-csp.css'
        ]
    };
    grunt.registerTask('compile', [
        'concat:compile_css',
        'concat:compile_js',
        'uglify'
    ]);
    grunt.initConfig({
        gruntMavenProperties: grunt.file.readJSON('grunt-maven.json'),
        less: {
            compile: {
                files: {
                    'client/styles.css': 'less/**/*.less'
                }
            },
            options: {
                cleancss: true,
                compress: false
            }
        },
        jshint: {
            src: [
                'app_files.js'
            ],
            gruntfile: [
                'Gruntfile.js'
            ],
            options: {
                curly: true,
                immed: true,
                newcap: true,
                noarg: true,
                sub: true,
                boss: true,
                eqnull: true,
                es5: true
            },
            globals: {
                'angular': false
            }
        },
        concat: {
            compile_css: {
                src: [
                    dependencies.css,
                    'client/styles.css'
                ],
                dest: 'client/compressed/styles-min.css'
            },
            compile_js: {
                src: [
                    dependencies.js,
                    'client/templates-app.js'
                ],
                dest: 'client/compressed/scripts-min.js'
            }
        },
        uglify: {
            compile: {
                options: {
                    mangle: false
                },
                files: {
                    'client/compressed/scripts-min.js': 'client/compressed/scripts-min.js'
                }
            }
        },
        html2js: {
            app: {
                options: {
                    base: 'src'
                },
                src: [ app_files.tpl ],
                dest: 'client/templates-app.js'
            }
        },
        mavenPrepare: {
            options: {
                resources: ['static/**']
            },
            prepare: {}
        },
        mavenDist: {
            options: {
                warName: '<%= gruntMavenProperties.warName %>',
                deliverables: ['client/**'],
                gruntDistDir: 'dist'
            },
            dist: {}
        },
        watch: {
            maven: {
                files: ['<%= gruntMavenProperties.filesToWatch %>'],
                tasks: 'default'
            }
        }
    });
    grunt.registerTask('default', ['mavenPrepare', 'html2js', 'jshint', 'less:compile', 'compile', 'mavenDist']);
};
