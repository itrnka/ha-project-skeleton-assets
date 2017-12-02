(function () {
    'use strict';
    
    // see https://www.npmjs.com/browse/keyword/imageminplugin
    // and https://www.npmjs.com/package/grunt-image
    
    var imageminMozjpeg = require('imagemin-mozjpeg');
    var imageminAdvpng = require('imagemin-advpng');

    module.exports = {
        png: {
            options: {
                optimizationLevel: 3
            },
            files: [{
                expand: true,
                cwd: '<%= path.tempFilesRootPath %>/<%= dirName.img %>/pngquantized',
                src: ['**/*.{png,PNG}'],
                dest: '<%= path.tempFilesRootPath %>/<%= dirName.img %>/png-preoptimized'
            }]
        },
        imageminAdvpng: {
            options: {
                optimizationLevel: 0,
                use: [imageminAdvpng({optimizationLevel: 4})]
            },
            files: [{
                expand: true,
                cwd: '<%= path.tempFilesRootPath %>/<%= dirName.img %>/png-preoptimized',
                src: ['**/*.{png,PNG}'],
                dest: '<%= path.targetRootPath %>/<%= dirName.img %>/'
            }]
        },        
        jpg: {
            options: {
                progressive: true,
                use: [imageminMozjpeg({quality: 80})]
            },
            files: [{
                expand: true,
                cwd: '<%= path.sourcesRootPath %>/<%= dirName.img %>/',
                src: ['**/*.{jpg,jpeg,JPG,JPEG}'],
                dest: '<%= path.targetRootPath %>/<%= dirName.img %>/'
            }]
        },
        gif: {
            options: {
                interlaced: true
            },
            files: [{
                expand: true,
                cwd: '<%= path.sourcesRootPath %>/<%= dirName.img %>/',
                src: ['**/*.{gif,GIF}'],
                dest: '<%= path.targetRootPath %>/<%= dirName.img %>/'
            }]
        }                      
        
    }

})();
