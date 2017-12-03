(function () {
    'use strict';

    var compressOptions = {
        mode: 'gzip',
        level: 9,
        pretty: true,
        dot: true
    };

    var fontsCfg = [];
    var fontFileTypes = ['otf', 'OTF', 'eot', 'EOT', 'svg', 'SVG', 'ttf', 'TTF']; // 'woff','woff2' - is already compressed

    for (var i = 0; i < fontFileTypes.length; i++) {
        var fontSuffix = fontFileTypes[i];
        fontsCfg.push({
            expand: true,
            src: ['<%= path.targetRootPath %>/<%= dirName.font %>/**/*.'+fontSuffix],
            dest: '',
            ext: '.' + fontSuffix + '.gz',
            extDot: 'last'
        });
    }
    
    module.exports = {
        publicFonts: {
            options: compressOptions,
            files: fontsCfg
        },


        js: {
            options: compressOptions,
            files: [
                {
                    expand: true,
                    src: ['<%= path.targetRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>/**/*.js'],
                    dest: '',
                    ext: '.js.gz',
                    extDot: 'last'
                }                
            ]
        },
        css: {
            options: compressOptions,
            files: [
                {
                    expand: true,
                    src: ['<%= path.targetRootPath %>/<%= dirName.css %>/**/*.css'],
                    dest: '',
                    ext: '.css.gz',
                    extDot: 'last'
                }                
            ]
        },

    };

})();