const gulp = require('gulp');
const modifyFile = require('gulp-modify-file')

gulp.task('postbuild', () => {
  gulp.run('sw-images-paths-change');
});

gulp.task('sw-images-paths-change', () => {
  gulp.src(['./build/service-worker.js'])
    .pipe(modifyFile((content, path, file) => {

      const leftBoundText = `"use strict";var precacheConfig=`;
      const leftBound = content.indexOf(leftBoundText) + leftBoundText.length;

      const rightBoundText = ',cacheName=';
      const rightBound = content.indexOf(rightBoundText);

      const fileMapString = content.slice(leftBound, rightBound);
      const fileMap = eval(fileMapString);

      fileMap
        .filter(el => el[0].indexOf('image') !== -1)
        .forEach(el => el[0] = el[0].slice(el[0].indexOf('/image')))

      return spliceSlice(content, leftBound, rightBound - leftBound, JSON.stringify(fileMap));
    }))
    .pipe(gulp.dest('build'));
});

// Util

function spliceSlice(str, index, count, add) {
  // We cannot pass negative indexes directly to the 2nd slicing operation.
  if (index < 0) {
    index = str.length + index;
    if (index < 0) {
      index = 0;
    }
  }
  return str.slice(0, index) + (add || "") + str.slice(index + count);
}
