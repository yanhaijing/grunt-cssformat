/*
 * grunt-cssformat
 * https://github.com/yanhaijing/grunt-cssformat
 *
 * Copyright (c) 2014 yanhaijing
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('cssformat', 'format css file', function() {
    var options = this.options({indent: "  ", linefeed: "\n", encode: "utf8"});
    function format(input) {
      var temp = grunt.util.normalizelf(input);
      var arrs = temp.split(grunt.util.linefeed);  
      arrs.forEach(function (value, index) {
        var arr = value.split("{")[0].split(",")[0].trim();
        //注释和@开头不要缩紧
        if (arr.search(/(\/|@)/) !== -1) {return 0;}

        var arrtem = arr.match(/(\s+|\s*>\s*)/g);
        var len = (arrtem && arrtem.length) || 0;
        arrs[index] = grunt.util.repeat(len, options.indent) + arrs[index];
      });
      return arrs.join(options.linefeed);
    }
    this.files.forEach(function (f) {
      if (!f.src.length) {
          return grunt.fail.warn('No source files were found.');
      }

      f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function (filepath) {
        var dest = f.dest || filepath;
        var input = grunt.file.read(filepath, {encoding: options.encode});
        var output = format(input);
        grunt.file.write(dest, output, {encoding: options.encode});
      });    
    });
  });
};
