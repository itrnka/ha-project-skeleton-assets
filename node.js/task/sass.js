(function () {
    'use strict';

    module.exports = {

        compile: {
            options: {
                cacheLocation: '<%= path.tempFilesRootPath %>/sass/',
                sourcemap: 'none', // true
                style: 'compressed'
            },            
            files: [{
                expand: true,
                cwd: '<%= path.sourcesRootPath %>/<%= dirName.css %>/',
                src: [
                    '*.scss'
                ],
                dest: '<%= path.tempFilesRootPath %>/<%= dirName.css %>/',
                ext: '.css'
            }]
        }
            
    };

})();
