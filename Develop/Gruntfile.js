module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      }
    },
    sass: {
      dist: {
        files: [
        {
          expand: true,
          cwd: 'Source/css/sass',
          src: ['**/*.scss'],
          dest: 'Source/css',
          ext: '.css'
        }
        ]
      }
    },
    sprite:{
      algorithm: 'top-down',
      main: {
        src: ['Source/img/sprites-src/*'],
        dest: 'Source/img/spritesheets/main.png',
        destCss: 'Source/css/sass/sprites/_main.scss',
        imgPath: '../img/spritesheets/main.png',
        retinaSrcFilter: 'Source/img/sprites-src/*@2x.png',
        retinaDest: 'Source/img/spritesheets/main@2x.png',
        retinaImgPath: '/img/spritesheets/main@2x.png',
      }
    },
    clean: {
      pre: ["Runtime/css",
          "Runtime/"
        ],
      post: 
        [
          "*-assets",
          "Source/css/screen.min.css",
          "Source/js/app.min.js",
          "Runtime/css/screen.css",
          "Runtime/css/sprites",
          "Runtime/css/sass/**/",
          "Runtime/js/solubilityData.js",
          "Runtime/js/app.js",
          'Runtime/js/QueryString.js',
          "Runtime/js/lib/",
          "Runtime/img/sprites-src/"
        ]
    },
    copy: {
      target: {
        files: [
          {expand: true, cwd: 'Source', src: ['**'], dest: 'Runtime/'},
          {expand: true, cwd: 'Source', src: ['.htaccess'], dest: 'Runtime/'}
        ]
      }
    },
    uglify: {
      my_target: {
        files: {
          'Runtime/js/app.min.js': [
            'Source/js/lib/jquery-2.1.4.js',
            'Source/js/lib/lity.js',
            'Source/js/lib/purl.js',
            'Source/js/solubilityData.js',
            'Source/js/app.js',
            'Source/js/QueryString.js'
          ]
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'Runtime/css/screen.min.css': [
            'Runtime/css/screen.css',
            'Runtime/css/lib/lity.css'
          ]
        }
      }
    },
    usemin: {
      html: ['Runtime/index.html'],
      options: {
        dirs: ['Runtime']
      }
    },
    imagemin: {
      main: {
        files: [{
          expand: true,
          cwd: 'Source/',
          src: ['**/*.{png,jpg,gif}',
            '!img/sprites-src/*.png'
          ],
          dest: 'Runtime/'
        }]
      }
    },
    hashres: {
      // Global options
      options: {
        fileNameFormat: '${name}.${ext}?${hash}',
        renameFiles: false
      },
      // hashres is a multitask. Here 'prod' is the name of the subtask. You can have as many as you want.
      main: {
        // Files to hash
        src: [
          'Runtime/js/app.min.js',
          'Runtime/css/screen.min.css',
          'Runtime/img/sprites/main.png',
          'Runtime/img/sprites/main@2x.png'
        ],
        // File that refers to above files and needs to be updated with the hashed name
        dest: [
          'Runtime/index.php',
          'Runtime/css/screen.min.css'

        ]
      }
    },
    'ftp-diff-deployer': {
      options: {
        src: 'Runtime',
        exclude: [ 
            '/**/.DS_Store'
          ]
      },
      dev: {
        options: {
          host: 'pjadev.com',
          auth: {
            username: 'webdev',
            password: '12ArrowPjA'
          },
          dest: '/hosts/patheon_onesource_16-pat-016/dev/solubility'
        }
      },
      staging: {
        options: {
          host: 'pjadev.com',
          auth: {
            username: 'webdev',
            password: '12ArrowPjA'
          },
          dest: '/hosts/patheon_onesource_16-pat-016/<%= gitinfo.local.branch.current.name %>/solubility'
        }
      },
      production: {
        options: {
          host: '',
          auth: {
            username: '',
            password: ''
          },
          dest: ''
        }
      }
    },
    pagespeed: {
      options: {
        nokey: true,
        url: "http://patheon.pjastaging.com/solubility"
      },
      staging: {
        options: {
          url: "http://patheon.pjastaging.com/solubility",
          locale: "en_US",
          strategy: "desktop",
          threshold: 70
        }
      }
    }
  });

  // Load the needed plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-ftp-diff-deployer');
  grunt.loadNpmTasks('grunt-gitinfo');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-spritesmith-hd');
  grunt.loadNpmTasks('grunt-hashres');
  grunt.loadNpmTasks('grunt-pagespeed');


  // Default task(s).
  grunt.registerTask('default',           ['gitinfo','clean:pre','sprite:main','sass','copy','newer:uglify','newer:cssmin','usemin','hashres:main','clean:post']);
  grunt.registerTask('sprites',           ['gitinfo','clean:pre','sprite:main']); // needed gitinfo for some reason
  grunt.registerTask('test',              ['phpunit:dev']);
  grunt.registerTask('deploy',            ['gitinfo','clean:pre','sprite:main','sass','copy','newer:uglify','newer:cssmin','usemin','hashres:main','clean:post','ftp-diff-deployer:dev']);
  grunt.registerTask('deploy-staging',    ['gitinfo','clean:pre','sprite:main','sass','copy','newer:uglify','newer:cssmin','usemin','hashres:main','clean:post','imagemin','ftp-diff-deployer:staging','pagespeed:staging']);

};
