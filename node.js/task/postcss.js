(function () {
    'use strict';

    module.exports = {
        minify: {
            options: {
                processors: [
                    require('autoprefixer')({
                            browsers: ['> 0.1%', 'last 20 versions', 'ie 7', 'ie 8', 'ie 9', 'ie 10', 'ie 11'],
                            map: true
                    }),
                    require('cssnano')({
                        discardComments: {removeAll: true},
                        colormin: {
                            legacy: true
                        },
                        zindex: false
                    })
                ]
            },
            files: [
                {
                    cwd: '<%= path.tempFilesRootPath %>/<%= dirName.css %>/',
                    src: [
                        '*.css'
                    ],
                    expand: true,
                    dest: '<%= path.targetRootPath %>/<%= dirName.css %>/',
                    ext: '.css',
                    extDot: 'last'
                }
            ]
        }

    };

})();