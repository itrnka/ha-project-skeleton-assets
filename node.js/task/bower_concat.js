(function () {
    'use strict';

    var options = {
        separator : ';'
    };

    module.exports = {
        pushJSToProject: {
            options: options,
            dest: {
                js: '<%= path.tempFilesRootPath %>/<%= dirName.js %>/bower/bower-concatenated.js'
            }
        },
        pushCSSToProject: {
            options: options,
            dest: {
                scss: '<%= path.sourcesRootPath %>/<%= dirName.css %>/bower/_bower.scss'
            }
        }

    };

})();
