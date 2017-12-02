(function () {
    'use strict';

    module.exports = {
        download: {
            options: {
                fontPath: '<%= path.sourcesRootPath %>/<%= dirName.font %>/google',
                cssFile: '<%= path.tempFilesRootPath %>/<%= dirName.font %>/google-fonts.scss',
                formats: {
                    eot: true,
                    ttf: true,
                    woff: true,
                    woff2: true,
                    svg: true
                },
                httpPath: '../<%= dirName.font %>/',
                fonts: '<%= project.fonts.googleFontsList %>'
            }
        }
    }

})();
