(function () {
    'use strict';

    module.exports = {

        concatFinalJS: {
            options: {
                separator: ';',
                //banner: '<%= project.js.banner %>',
                footer: ';',
                stripBanners: true,
                process: false,
                sourceMap: false
            },
            files: {
                '<%= path.tempFilesRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>.build.js': [
                    '<%= project.js.libs.copy %>',
                    '<%= project.js.plugins.copy %>',
                    '<%= path.tempFilesRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>.min.optimized.js'
                ]
            }
        }

    };

})();