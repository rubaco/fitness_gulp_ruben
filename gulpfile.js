'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass'),
watch = require('gulp-watch');
var htmlhint = require("gulp-htmlhint");
const babel = require('gulp-babel');

var beautify = require('js-beautify').js_beautify,
fs = require('fs');
var path = require('path')
var about = require('gulp-about');
var htmlmin = require('gulp-htmlmin');

gulp.task('sass', function() {
    //gets
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass())
    //puts
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('stream', function () {
    // Endless stream mode 
    return watch('./assets/css/', { ignoreInitial: false })
       // .pipe(gulp.dest('build'));
});

gulp.task('default', function(){
gulp.src("./*.html")
.pipe(htmlhint())

});

gulp.task('babel', function(){


gulp.src('./assets/js/hoverintent.js')
    .pipe(beautify({indent_size: 2}))
    .pipe(gulp.dest('./assets/js/test/'))

});

gulp.task('beautify', function(){

    return gulp.src('./assets/js/hoverintent.js')
    .pipe(gulp.dest('./assets/js/beautify/'));

});


gulp.task('align', function () {
    return gulp.src('./assets/js/ruben_align.js')
        .pipe(align())
        .pipe(gulp.dest('./assets/js/prettify/ruben_align_new.js'))
})

gulp.task('about', function () {
    return gulp.src('./package-lock.json')
        .pipe(about({
            keys: ['dependencies', 'version', 'author'],   // properties to pick from the source 
         
        }))
        .pipe(gulp.dest('./about/'));
});

gulp.task('minify', function() {
    return gulp.src('./assets/js/minify_this.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./assets/js/minify/'));
  });







