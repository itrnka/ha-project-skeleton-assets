(function () {
    'use strict';

    module.exports = {
        optimize: {
            options: {
                quality: '0-90'
            },
            files: [{
                expand: true,
                cwd: '<%= path.sourcesRootPath %>/<%= dirName.img %>/',
                src: ['**/*.{png,PNG}'],
                dest: '<%= path.tempFilesRootPath %>/<%= dirName.img %>/pngquantized'
            }]
        }
    };

})();