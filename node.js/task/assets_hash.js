(function () {
    'use strict';

    module.exports = {
        publicCSS: {
            options: {
                rename: true,
                suffix: true,
                length: 40,
                algorithm: 'sha1',
                removeFromPath: '<%= path.publicRootPath %>',
                jsonFile: '<%= path.targetRootPath %>/<%= dirName.css %>/versions.json',
                clear: true
            },
            files: {
                src: '<%= path.targetRootPath %>/<%= dirName.css %>/*.css',
                filter: 'isFile'
            }
        },
        publicJS: {
            options: {
                rename: true,
                suffix: true,
                length: 40,
                algorithm: 'sha1',
                removeFromPath: '<%= path.publicRootPath %>',
                jsonFile: '<%= path.targetRootPath %>/<%= dirName.js %>/versions.json',
                clear: true
            },
            files: {
                src: '<%= path.targetRootPath %>/<%= dirName.js %>/*.js',
                filter: 'isFile'
            }
        }

    };

})();
