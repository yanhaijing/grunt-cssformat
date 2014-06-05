# grunt-cssformat [![Build Status](https://travis-ci.org/yanhaijing/grunt-cssformat.svg)](https://travis-ci.org/yanhaijing/grunt-cssformat)

> format indent css file

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cssformat --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssformat');
```

## The "cssformat" task

### Overview
In your project's Gruntfile, add a section named `cssformat` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssformat: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.indent
Type: `String`
Default value: `'  '`(two space)

A string value that is used to indent.

#### options.encode
Type: `String`
Default value: `'utf8'`

A string value that is used to point out the encode of file.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the encode of `testing.css` file and the `123.css` file is default think `'utf8'`, default indent two space will be used.

```js
grunt.initConfig({
  cssformat: {
    css: {
      files: [{dest:'tmp/testing.css', src: ['test/fixtures/testing.css']}]
    }
  }
});
```
**demo**

*src*

```css
/* *** */
p{color:#fff;}
p a{color:#fff;}
p a img{color:#fff;}
```

*after format*
indent is two space

```css
/* *** */
p{color:#fff;}
  p a{color:#fff;}
    p a img{color:#fff;}
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the encode of `testing` file  `123` file is gbk or other, if you want to use tab width indent.

```js
grunt.initConfig({
  cssformat: {
    options: {
      indent: '\t',
      encode: 'gbk',
    },
    files: [{dest:'tmp/testing.css', src: ['test/fixtures/testing.css']}]
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
