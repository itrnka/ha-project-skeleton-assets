'use strict';

var colors = require('colors');

module.exports = function (grunt) {

    // see http://yeoman.io/blog/performance-optimization.html
    require('load-grunt-tasks')(grunt);
    require('load-grunt-config')(grunt);
    require('time-grunt')(grunt);

    /**
     * Grunt basic config.
     */
    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        path: grunt.file.readJSON('config/grunt/paths.json'),
        dirName: grunt.file.readJSON('config/grunt/dirNames.json')
    };
    gruntConfig.project = grunt.file.readJSON(gruntConfig.path.sourcesRootPath + '/resources.json');

    /**
     * Register tasks.
     */
    grunt.initConfig(grunt.util._.extend(
        gruntConfig,
        require('load-grunt-config')(grunt, {
            configPath: require('path').join(__dirname, 'task'),
            loadGruntTasks: false,
            init: false
        })
    ));

    // /**
    //  * Update actual package.json version in gruntConfig object.
    //  */
    // grunt.task.registerTask('update-project-version', 'Update actual project version.', function() {
    //     gruntConfig.pkg = grunt.file.readJSON('package.json');
    // });
    
    // IMAGES TASKS ----------------------------------------------------------------------------------------------------
    grunt.registerTask('ha-publish-images', 'Optimizes all images and replaces these images in a public folder.', [
        'clean:publicImages', // remove published images
        'clean:temporaryImages', // remove temp pre-optimized images
        'pngquant:optimize',
        'imagemin:png',
        'imagemin:imageminAdvpng',
        'imagemin:gif', // copy optimized gif images public dir
        'imagemin:jpg', // copy optimized jpeg images public dir
        'clean:temporaryImages' // remove temp pre-optimized images
    ]);

    // FONTS TASKS -----------------------------------------------------------------------------------------------------
    grunt.registerTask('ha-download-fonts', 'Download fonts from google fonts and create associated scss file.', [
        'clean:tmp', // clear temp
        'clean:googleFontsDownload', // removed already downloaded google fonts
        'googlefonts:download', // download all google fonts
        'copy:googleFontsCSS', // copy CSS file for google fonts to css directory
        'clean:tmp' // clear temp
    ]);
    grunt.registerTask('ha-publish-fonts', 'Delete public fonts and publish current fonts.', [
        'clean:publicFonts', // remove published fonts
        'copy:publishFonts', // copy fonts to public dir
        'compress:publicFonts' // create gz files, useful for nginx gzip-static flag
    ]);

    // CSS TASKS -------------------------------------------------------------------------------------------------------
    grunt.registerTask('ha-publish-css', 'Compile and optimize CSS files, clean the public CSS directory, and copy compressed CSS files to public directory.', [
        'clean:publicCSS', // clear published data
        'clean:temporaryCSS', // clear tmp data
        'bower_concat:pushCSSToProject',
        'sass:compile', // build css from scss
        'postcss:minify', // optimize css file
        'assets_hash:publicCSS', // create versions
        'compress:css', // create gz files, useful for nginx gzip-static flag
        'clean:temporaryCSS' // clear tmp data
    ]);

    // JS TASKS --------------------------------------------------------------------------------------------------------
    grunt.registerTask('ha-publish-js', 'Compile and optimize javascript files, clean the public scripts directory, and copy compressed scripts to public directory.', [
        'clean:publicJS', // clear published data
        'clean:temporaryJS', // clear tmp data
        'bower_concat:pushJSToProject',
        'uglify:prepare', //
        'uglify:optimize', //
        'assets_hash:publicJS', // create versions
        'compress:js', // create gz files, useful for nginx gzip-static flag
        'clean:temporaryJS' // clear tmp data
    ]);

    // CUSTOM FILES ----------------------------------------------------------------------------------------------------
    grunt.registerTask('ha-publish-assets', 'Clean the public directory for custom files, and copy custom files to public directory.', [
        'copy:otherFiles'
    ]);

    // MAIN TASKS ------------------------------------------------------------------------------------------------------
    grunt.registerTask('build', 'Compile, optimize, and publish all resources to cleaned public directory.', [
        'clean:build', // remove published files
        'ha-publish-fonts',
        'ha-publish-images',
        'ha-publish-css',
        'ha-publish-js',
        'ha-publish-assets',
        'clean:tmp'
    ]);
    grunt.registerTask('default', 'Alias for "build" task.', [
        'build'
    ]);

};
