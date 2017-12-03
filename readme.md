# Static files skeleton for *ha* framework



## Requirements

- Node.js
- Grunt
- Sass
- Bower (optional)

## Highlights
- Automatically compile javascript into one super optimized file (1x dev file, 1x production file)
- Automatically compile SASS to optimized CSS files with multiple browser support
- Automatic image optimization with fine-tuned maximum quality and minimal size (gif, jpeg, png)
- Automatic gzip compression for optional gzip-static functionality in nginx server
- Automatic google fonts download to local folder


## How it works

All static files must be saved in the `{projectRoot}/resources/assets` folder. All files will be automatically compiled, optimized, and copied to the public folder via grunt tasks. Public folder is `{projectRoot}/public/static` and can be optionaly changed (description in Configuration chapter).

### Grunt tasks

- `grunt build`
- `grunt ha-publish-images` - Optimizes all images and replaces these images in a public folder.
- `grunt ha-download-fonts` - Download fonts from google fonts and create associated scss file for sass.
- `grunt ha-publish-fonts` - Delete public fonts and publish current fonts.
- `grunt ha-publish-css` - Compile and optimize CSS files, clean the public CSS directory, and copy compressed CSS files to public directory.
- `grunt ha-publish-js` - Compile and optimize javascript files, clean the public scripts directory, and copy compressed scripts to public directory.
- `grunt ha-publish-assets` - Clean the public directory for custom files, and copy custom files to public directory.




### Configuration

#### Assets configuration file
Main configuration file for static files is `{projectRoot}/resources/assets/assets-configuration.json`.

> Files in the project often need exact order, so javascript files are listed in the exact order (libs and plugins)

- **`css.browsers`**: (DEPRECATED!) list of supported browsers on CSS recompilation ([*autoprefixer*](https://github.com/postcss/autoprefixer) setting), e.g. `["> 0.1%", "last 20 versions", "ie 7", "ie 8", "ie 9", "ie 10", "ie 11"]`
- **`js.supportForOldIE`**: `true` or `false`, set to `true`, if Internet Explorer < 9 is used
- **`js.banner`**: javascript header with project info and some aditional info, e.g. `"/*! <%= pkg.name %> - v<%= pkg.version %>\nBuild <%= grunt.template.today(\"yyyy-mm-dd HH:MM:ss\") %>\nCopyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author %> */\n"`
- **`js.libs.compile`**: (paths *array*) javascript files paths to be compiled, files will be included before your application files as a libraries
- **`js.libs.copy`**: the same as *js.libs.compile*, but files are copied only without optimization - use only when compilation process throws an errors
- **`js.plugins.compile`**: (paths *array*) javascript files paths to be compiled, files will be included before your application files and after libraries (place here files based on libraries)
- **`js.plugins.copy`**: (paths *array*) the same as *js.plugins.compile*, but files are copied only without optimization - use only when compilation process throws an errors
- **`fonts.googleFontsList`**: (config *array*) list of configurations for google fonts download task, based on [grunt-google-fonts](https://github.com/Mika-/grunt-google-fonts), e.g.: 

```json
{
    "fonts": {
        "googleFontsList": [
            {
                "family": "Roboto",
                "subsets": ["latin-ext"],
                "styles": ["100", "100i", "300", "300i", "400", "400i", "500", "500i", "700", "700i", "900", "900i"]
            },
            {
                "family": "Oswald",
                "subsets": ["latin", "latin-ext"],
                "styles": ["300", "400", "700"]
            }
        ]
    },
    ...
}

```

#### Path to assets in configuration file

All files will be saved after compiling and optimizing in `{projectRoot}/public/static/*` folder. This path can be changed in the configuration file `{projectRoot}/node.js/config/grunt/paths.json` (change values for *targetRootPath* and *publicRootPath*).

##### Source directory (here are files stored)

- path to CSS files: `<%= path.sourcesRootPath %>/<%= dirName.css %>/`
- path to javascript files: `<%= path.sourcesRootPath %>/<%= dirName.js %>/`
- path to font files: `<%= path.sourcesRootPath %>/<%= dirName.font %>/`
- path to image files: `<%= path.sourcesRootPath %>/<%= dirName.img %>/`
- path to other files (pdf, doc, ...): `<%= path.sourcesRootPath %>/<%= dirName.other %>/`

##### Public directory (optimized files will be copied here in publish process)
- path to CSS files: `<%= path.targetRootPath %>/<%= dirName.css %>/`
- path to javascript files: `<%= path.targetRootPath %>/<%= dirName.js %>/`
- path to font files: `<%= path.targetRootPath %>/<%= dirName.font %>/`
- path to image files: `<%= path.targetRootPath %>/<%= dirName.img %>/`
- path to other files (pdf, doc, ...): `<%= path.targetRootPath %>/<%= dirName.other %>/`

##### Examples

- path to vendor javascript stored in `{projectRoot}/resources/assets/vendor/some-lib1/some-lib1.min.js`: 

```
<%= path.sourcesRootPath %>/vendor/some-lib1/some-lib1.min.js
```


#### Example configuration

```
{
    "fonts": {
        "googleFontsList": [
            {
                "family": "Roboto",
                "subsets": ["latin-ext"],
                "styles": ["100", "100i", "300", "300i", "400", "400i", "500", "500i", "700", "700i", "900", "900i"]
            }
        ]
    },
    "css": {

    },
    "js": {
        "supportForOldIE": true,
        "banner": "/*! <%= pkg.name %> - v<%= pkg.version %>\nBuild <%= grunt.template.today(\"yyyy-mm-dd HH:MM:ss\") %>\nCopyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author %> */\n",
        "libs": {
            "compile": [
                "<%= path.sourcesRootPath %>/vendor/some-lib1/some-lib1.min.js",
                "<%= path.sourcesRootPath %>/vendor/some-lib2/some-lib2.min.js"
            ],
            "copy": [
                "<%= path.sourcesRootPath %>/vendor/some-lib3/some-lib3.min.js"
            ]
        },
        "plugins": {
            "compile": [

            ],
            "copy": [

            ]
        }
    }
}
```