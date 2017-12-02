(function () {
    'use strict';

    module.exports = {
        sass: {
            files: [
                '<%= path.sourcesRootPath %>/<%= dirName.css %>/**/*.scss'
            ],
            tasks: ['ha-publish-css']
        },
        js: {
            files: [
                '<%= path.sourcesRootPath %>/<%= dirName.js %>/*.js',
                '<%= path.sourcesRootPath %>/<%= dirName.js %>/**/*.js'
            ],
            tasks: ['clean:js', 'uglify:build', 'uglify:postbuild', 'compress:js']
        }
    };

})();
