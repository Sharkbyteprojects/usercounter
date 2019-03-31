module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        nodeunit: {
            all:['index.js'],
        },
        cssmin: {
            compress: {
                files: {
                    'content/min.css' : ['content/*.css'],
                },
            },
        },
        uglify: {
            businessRoutines: {
                files: {
                    'content/min.js': ['content/*.js'],
                },
            },
        },
        jslint: {
            files: ['content/*.js'],
        }, 
    });
};