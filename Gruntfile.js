module.exports = function (grunt) {
    const sass = require("sass");

    // require it at the top and pass in the grunt instance
    require("time-grunt")(grunt);

    // Load all Grunt tasks
    require("jit-grunt")(grunt, {});

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        browserify: {
            dev: {
                files: {
                    "assets/js/posts-slider.js": "assets/src/js/posts-slider.js",
                },
                options: {
                    transform: [["babelify", { presets: ["@babel/preset-env"] }]],
                    browserifyOptions: {
                        debug: true,
                    },
                },
            },
        },

        // Concat and Minify our js.
        uglify: {
            prod: {
                files: {
                    "assets/js/metabox.min.js": ["assets/js/metabox.js"],
                    "assets/js/posts-slider.min.js": ["assets/js/posts-slider.js"],
                },
            },
        },

        // Compile our sass.
        sass: {
            dev: {
                options: {
                    implementation: sass,
                    outputStyle: "expanded",
                    sourceMap: false,
                },
                files: {
                    "assets/css/style.css": "assets/css/style.scss",
                },
            },
            prod: {
                options: {
                    implementation: sass,
                    outputStyle: "compressed",
                    sourceMap: false,
                },
                files: {
                    "assets/css/style.min.css": "assets/css/style.scss",
                },
            },
        },

        // Autoprefixer.
        autoprefixer: {
            options: {
                browsers: ["last 8 versions", "ie 8", "ie 9"],
            },
            main: {
                files: {
                    "assets/css/style.css": "assets/css/style.css",
                    "assets/css/style.min.css": "assets/css/style.min.css",
                },
            },
        },

        // Sorting our CSS properties.
        csscomb: {
            options: {
                config: ".csscomb.json",
            },
            main: {
                files: {
                    "assets/css/style.css": ["assets/css/style.css"],
                },
            },
        },

        // Newer files checker
        newer: {
            options: {
                override: function (detail, include) {
                    if (detail.task === "php" || detail.task === "sass") {
                        include(true);
                    } else {
                        include(false);
                    }
                },
            },
        },

        // Watch for changes.
        watch: {
            options: {
                livereload: 35755,
                livereloadOnError: false,
                spawn: false,
            },
            scss: {
                files: ["assets/css/**/*.scss"],
                tasks: ["newer:sass:dev", "newer:sass:prod", "newer:autoprefixer:main"],
            },
            js: {
                files: ["assets/src/**/**.js"],
                tasks: ["newer:browserify:dev", "newer:uglify:prod"],
            },
        },

        // Copy the theme into the build directory
        copy: {
            build: {
                expand: true,
                src: [
                    "**",
                    "!node_modules/**",
                    "!build/**",
                    "!.git/**",
                    "!vendor/**",
                    "!composer.json",
                    "!composer.lock",
                    "!changelog.txt",
                    "!Gruntfile.js",
                    "!package.json",
                    "!package-lock.json",
                    "!.csscomb.json",
                    "!.tern-project",
                    "!.gitignore",
                    "!.jshintrc",
                    "!.DS_Store",
                    "!*.map",
                    "!**/*.map",
                    "!**/Gruntfile.js",
                    "!**/package.json",
                    "!**/*~",
                ],
                dest: "build/<%= pkg.name %>/",
            },
        },

        // Compress build directory into <name>.zip
        compress: {
            build: {
                options: {
                    mode: "zip",
                    archive: "./build/<%= pkg.name %>.zip",
                },
                expand: true,
                cwd: "build/<%= pkg.name %>/",
                src: ["**/*"],
                dest: "<%= pkg.name %>/",
            },
        },
    });

    // Dev task
    grunt.registerTask("default", [
        "browserify:dev",
        "uglify:prod",
        "sass:dev",
        "sass:prod",
        "autoprefixer:main",
        "csscomb:main",
    ]);

    // Production task
    grunt.registerTask("build", ["copy"]);

    // Package task
    grunt.registerTask("package", ["compress"]);
};
