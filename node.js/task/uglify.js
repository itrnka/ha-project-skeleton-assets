(function () {
    'use strict';

    module.exports = {
        prepare: {
            options: {
                preserveComments: false,
                banner: '(function(window,document,location,Number,String,Date,Math,RegExp,console,Array,Error,Image){',
                footer: '})(window,document,location,Number,String,Date,Math,RegExp,console,Array,Error,Image);',
                ASCIIOnly: true
            },        
            files: {
                '<%= path.targetRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>.min.js': [
                    '<%= path.sourcesRootPath %>/<%= dirName.js %>/lib/**/*.js',
                    '<%= path.sourcesRootPath %>/<%= dirName.js %>/plugin/**/*.js',
                    '<%= path.sourcesRootPath %>/<%= dirName.js %>/scripts/**/*.js',
                    '<%= path.sourcesRootPath %>/<%= dirName.js %>/config.js',
                    '<%= path.sourcesRootPath %>/<%= dirName.js %>/main.js'
                ]
            }        
        },
        optimize: {
            options: {
                banner: '<%= project.js.banner %>',
                ASCIIOnly: true
            },
            files: {
                '<%= path.targetRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>.min.optimized.js': '<%= path.targetRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>.min.js'
            }
        }
    }

})();
