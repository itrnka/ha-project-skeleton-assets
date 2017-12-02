(function () {
    'use strict';

    module.exports = {
        build: {
            options: {force: true},
            src: [
                '<%= path.tempFilesRootPath %>/*',
                '<%= path.targetRootPath %>/<%= dirName.css %>/*',
                '<%= path.targetRootPath %>/<%= dirName.js %>/*',
                '<%= path.targetRootPath %>/<%= dirName.font %>/*',
                '<%= path.targetRootPath %>/<%= dirName.img %>/*'
            ]
        },
        googleFontsDownload: {
            options: {force: true},
            src: [
                '<%= path.sourcesRootPath %>/<%= dirName.font %>/google/*'
            ]
        },
        publicFonts: {
            options: {force: true},
            src: [
                '<%= path.targetRootPath %>/<%= dirName.font %>/*'
            ]
        },
        tmp: {
            options: {force: true},
            src: [
                '<%= path.tempFilesRootPath %>/*'
            ]
        },
        temporaryJS: {
            options: {force: true},
            src: [
                '<%= path.tempFilesRootPath %>/<%= dirName.js %>/*'
            ]
        },
        publicJS: {
            options: {force: true},
            src: [
                '<%= path.targetRootPath %>/<%= dirName.js %>/*'
            ]
        },
        publicCSS: {
            options: {force: true},
            src: [
                '<%= path.targetRootPath %>/<%= dirName.css %>/*'
            ]
        },
        temporaryCSS: {
            options: {force: true},
            src: [
                '<%= path.tempFilesRootPath %>/<%= dirName.css %>/*',
                '<%= path.tempFilesRootPath %>/sass/*'
            ]
        },
        publicImages: {
            options: {force: true},
            src: [
                '<%= path.targetRootPath %>/<%= dirName.img %>/*'
            ]
        },
        temporaryImages: {
            options: {force: true},
            src: [
                '<%= path.tempFilesRootPath %>/<%= dirName.img %>/*'
            ]
        }
    };

})();
