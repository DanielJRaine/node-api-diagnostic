// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';
// sumLines('../data/integers.txt', console.log)
// const fs = require('fs'); // jshint ignore: line

let sumLines = (filename, callback) => {
  let sum = 0;
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    else {
      data.reduce(function(element){
        if (typeof parseInt(element) !== 'number') {
          callback(new Error('line not a number'));
        } else {
          console.log(element);
        }
      });
    }
  });
  callback(null, sum);
};

module.exports = {
  sumLines,
};
