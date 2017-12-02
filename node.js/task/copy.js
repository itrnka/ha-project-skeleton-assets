(function () {
    'use strict';

    module.exports = {
        googleFontsCSS: {
            files: [
                {
                    cwd: '<%= path.tempFilesRootPath %>/<%= dirName.font %>',
                    src: 'google-fonts.scss',
                    expand: true,
                    flatten: true,
                    dest: '<%= path.sourcesRootPath %>/<%= dirName.css %>/<%= dirName.font %>-definition',
                    filter: 'isFile'
                }
            ]
        },
        publishFonts: {
            files: [
                {
                    cwd: '<%= path.sourcesRootPath %>/<%= dirName.font %>',
                    src: '**/*.{otf,OTF,eot,EOT,svg,SVG,ttf,TTF,woff,WOFF,woff2,WOFF2}',
                    expand: true,
                    flatten: true,
                    dest: '<%= path.targetRootPath %>/<%= dirName.font %>/',
                    filter: 'isFile'
                }
            ]
        },
        otherFiles:{
            files: [
                {
                    cwd: '<%= path.sourcesRootPath %>/<%= dirName.other %>',
                    src: '**/*',
                    expand: true,
                    flatten: true,
                    dest: '<%= path.targetRootPath %>/<%= dirName.other %>/',
                    filter: 'isFile'
                }
            ]
        }
    }

})();
