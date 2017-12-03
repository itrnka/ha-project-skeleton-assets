(function () {
    'use strict';

    module.exports = {
        prepare: {
            options: {
                preserveComments: false,
                banner: '(function(window,document,location,Number,String,Date,Math,RegExp,console,Array,Error,Image){',
                footer: '})(window,document,location,Number,String,Date,Math,RegExp,console,Array,Error,Image);',
                ASCIIOnly: true,
                ie8: '<%= project.js.supportForOldIE %>'
            },
            files: {
                '<%= path.tempFilesRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>.min.js': [
                    '<%= path.sourcesRootPath %>/vendor/ha-framework/js/ha.js',
                    '<%= path.tempFilesRootPath %>/<%= dirName.js %>/bower/bower-concatenated.js',
                    '<%= project.js.libs.compile %>',
                    '<%= project.js.plugins.compile %>',
                    '<%= path.sourcesRootPath %>/<%= dirName.js %>/scripts/**/*.js',
                    '<%= path.sourcesRootPath %>/<%= dirName.js %>/config.js',
                    '<%= path.sourcesRootPath %>/<%= dirName.js %>/main.js'
                ]
            }
        },
        optimize: {
            options: {
                ASCIIOnly: true
            },
            files: {
                '<%= path.tempFilesRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>.min.optimized.js': [
                    '<%= path.tempFilesRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>.min.js'
                ]
            }
        },
        finalizeDebugFile: {
            options: {
                mangle: false,
                ASCIIOnly: true,
                banner: '<%= project.js.banner %>'
            },
            files: {
                '<%= path.targetRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>/min.dev.js': [
                    '<%= path.tempFilesRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>.build.js'
                ]
            }

        },
        finalizeProductionFile: {
            options: {
                mangle: false,
                ASCIIOnly: true,
                banner: '<%= project.js.banner %>',
                compress: {
                    drop_console: true
                }
            },
            files: {
                '<%= path.targetRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>/min.production.js': [
                    '<%= path.tempFilesRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>.build.js'
                ]
            }

        }
    }

})();
