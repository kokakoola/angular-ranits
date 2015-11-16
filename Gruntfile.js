'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: {
      app: 'dist/app',
      folder: 'dist'
    }
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 3001,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '0.0.0.0',
        livereload: 3729,
        protocol: 'https'
      },
      proxies: [{
        context: '/rest',
        host: 'oxygen.netgroupdigital.com',
        port: 8080,
        https: true
      }],
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            // Setup the proxy
            var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];

            middlewares.push(connect.static('.tmp'));

            middlewares.push(connect().use(
              '/bower_components',
              connect.static('./bower_components')
            ));
            middlewares.push(connect().use(
              '/app/styles',
              connect.static('./app/styles')
            ));

            // Make directory browse-able.
            middlewares.push(connect.static(appConfig.app));

            return middlewares;
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist.app %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          // Commented out because .jshintrc is not correctly configured to follow DÖP developers style
          //'<%= yeoman.app %>/**/**/*.js'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist.folder %>/{,*/}*',
            '!<%= yeoman.dist.folder %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      server: {
        options: {
          map: true,
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: './bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist.app %>/images/generated'
        }
      },
      server: {
        options: {
          sourcemap: true
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist.app %>/styles/{,*/}*.css',
          '<%= yeoman.dist.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist.app %>/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist.app %>'
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist.app %>/{,*/}*.html'],
      css: ['<%= yeoman.dist.app %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist.app %>',
          '<%= yeoman.dist.app %>/images',
          '<%= yeoman.dist.app %>/styles'
        ]
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist.app %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist.app %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist.app %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= yeoman.dist.app %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          src: [
            '<%= yeoman.app %>/{,*/}/{,*/}*.js'
          ],
          dest: '.tmp'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist.app %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist.app %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'fonts/{,*/}*.*',
            'directives/{,*/}*.html'
          ]
        },{
          expand: true,
          cwd: '.',
          dest: '.tmp',
          src: [
            'bower_components/**/*.js'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist.app %>/images',
          src: ['generated/*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // Settings for grunt-bower-requirejs
    bower: {
      app: {
        rjsConfig: '<%= yeoman.app %>/require.config.js',
        options: {
          exclude: ['material-design-icons']
        }
      }
    },

    replace: {
      dist: {
        src: '<%= yeoman.dist.app %>/index.html',
        overwrite: true,
        replacements: [{
          from: 'bower_components/requirejs/require.js',
          to: 'scripts/requirejs.js'
        }, {
          from: 'require.config',
          to: 'scripts/require.config'
        }]
      }
    },

    // r.js compile config
    requirejs: {
      dist: {
        options: {
          dir: '<%= yeoman.dist.app %>/scripts',
          modules: [{
            name: 'require.config'
          }],
          preserveLicenseComments: false, // remove all comments
          removeCombined: true,
          baseUrl: '.tmp/<%= yeoman.app %>',
          mainConfigFile: '.tmp/<%= yeoman.app %>/require.config.js',
          optimize: 'uglify2',
          uglify2: {
            mangle: false
          }
        }
      }
    },

    // Create compressed archive for deployment
    compress: {
      dev: {
        options: {
          archive: '<%= yeoman.dist.folder %>/dop.tar.gz',
          mode: 'tgz'
        },
        expand: true,
        cwd: '<%= yeoman.dist.folder %>/',
        src: ['app/**/*']
      },
      live: {
        options: {
          archive: '<%= yeoman.dist.folder %>/dop.tar.gz',
          mode: 'tgz'
        },
        expand: true,
        cwd: '<%= yeoman.dist.folder %>/',
        src: [
          'app/**/*',
          '!app/views/dev/**'
        ]
      },
    },
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'bower:app',
      'concurrent:server',
      'autoprefixer:server',
      'configureProxies:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'bower:app',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'replace:dist',
    'cdnify',
    'cssmin',
    'filerev',
    'usemin',
    'requirejs:dist',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'build'
  ]);

  grunt.registerTask('package', [
    'build',
    'compress:dev'
  ]);

  grunt.registerTask('package-live', [
    'build',
    'compress:live'
  ]);
};
