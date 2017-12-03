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


### Working with javascript

Start you logic in file `{projectRoot}/resources/assets/js/main.js`. This file runs your js application (js logic start). If you can use configuration for your logic, place this configuration to `{projectRoot}/resources/assets/js/config.js`, e.g.:

```javascript
var cfg = {
    MY_VALUE1: 'xyz',
    MY_VALUE2: 123,
}
```
This configuration will be available in your `main.js` file, e.g. (*main.js*):

```javascript
(function () {
    'use strict';

    // TODO your custom app logic
    $(document).ready(function(){
        console.info(cfg.MY_VALUE1);
    });

})();
```

In your main.js use custom initialization logic, setup handlers, etc. Your custom classes and other functionality files store please in folder  `{projectRoot}/resources/assets/js/scripts`.

Javascript *ha* framework provides nice namespace initialization.

```javascript
ha.createNamespace('my.some.dot.separated.namespace.value');
// this creates object: my.some.dot.separated.namespace.value with NULL value
```

So we can simply create simulated class in some javascript file, e.g.:

```javascript
// create namespace object (init tree path to class)
ha.createNamespace('example.classes.NumberMultiplier');

// define class example.NumberMultiplier:
example.classes.NumberMultiplier = function(someArgument) {

    // prevent 'this' issues
    var _self = this;

    // private property example
    var multiplier = 10;
    var classConstructorArgument1 = someArgument;

    // public property example
    _self.description = 'Example class in native javascript.';

    // private method example
    var multiplyNumber = function(value) {
        return (value * multiplier); // example usage of private property 'multiplier'
    };

    // public method example
    _self.multiply = function(value) {
        return multiplyNumber(value); // example usage of private method 'multiplyNumber()'
    };

};
```

This pseudo class may be used as:

```javascript
var multiplier = new example.classes.NumberMultiplier();
var value = multiplier.multiply(3.3);
```

#### Building and publishing you javascript application

Run task `grunt ha-publish-js` from *node.js* directory. This will compile all defined and required scripts and publish compiled files to public directory. Compilation result is two files: `min.production.{hash}.js` (all console calls are removed) and `min.dev.{hash}.js` (supports *console* commands). 

Directory name in public js directory for your files is extracted from `{projectRoot}/node.js/package.json` (key *name* + key *version*), so you can change this values (also in future for newer versions). Path is in background used as `<%= path.targetRootPath %>/<%= dirName.js %>/<%= pkg.name %>-<%= pkg.version %>/min.dev.js`.

Compiled file has banner (comment at the beginning of compiled file) and this banner is by default also builded from `{projectRoot}/node.js/package.json` (key *name* + key *version* + key *author*). This banner can be changed in cofiguration file `{projectRoot}/resources/assets/assets-configuration.json` (key *js.banner*).

#### Add new library or plugin via Bower

- use bower `bower install {myplugin}` from *node.js* directory
- run task `grunt ha-publish-js`  from *node.js* directory

#### Add new library or plugin manually

- copy your files to some subdirectory in `{projectRoot}/resources/assets/vendor` and add required files to configuration file `{projectRoot}/resources/assets/assets-configuration.json`. If this file is library, use path `js.libs.compile` in your JSON. If this file is library plugin, use path `js.plugins.compile` in your JSON. 
- run task `grunt ha-publish-js`  from *node.js* directory
- if compilation throws an error, use path `js.libs.copy` or `js.plugins.copy` in your JSON and this file will not be optimized during compilation.

> Example path to vendor javascript file suppotred in config file: `<%= path.sourcesRootPath %>/vendor/some-lib1/some-lib1.min.js`:


#### How compilation works

Including steps:

- js libraries from configuration `js.libs.copy`
- js plugins from configuration `js.plugins.copy`
- function, which wraps these files (function body will be optimized and recompiled):
  - ha framework functionality `{projectRoot}/resources/assets/vendor/ha-framework/js/ha.js`
  - js scripts installed by *Bower*
  - js libraries from configuration `js.libs.compile`
  - js plugins from configuration `js.plugins.compile`
  - your custom js logic from `{projectRoot}/resources/vendor/assets/js/scripts/**.js`
  - your custom js configuration `{projectRoot}/resources/vendor/assets/js/config.js`
  - your main js runner (funcionality initialization) `{projectRoot}/resources/vendor/assets/js/main.js`
