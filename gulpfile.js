'use strict'

const gulp = require('gulp'),
      connect = require('gulp-connect'),
      jshint = require('gulp-jshint');

const path = './app';

//server
gulp.task('server',function(){
  connect.server({
    root : path,
    livereload: true
  });
});

// .html reload

gulp.task('html',function(){
  gulp.src(path+'/**/*.html')
  .pipe(connect.reload());
});

// .css reload
gulp.task('css', function() {
 gulp.src(path+'/**/**/*.css')
 .pipe(connect.reload());
 });



// .js errors
gulp.task('jshint', function() {
 gulp.src(path+'/controllers/*.js')
   .pipe(jshint())
   .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('watch', function() {
 gulp.watch([path+'/**/**/*.html',path+'/**/**/*.js'], ['html']);
 gulp.watch([path+'/**/*.js'], ['jshint']);
 gulp.watch([path+'/**/*.css'], ['css']);
 });


gulp.task('default',['server','watch']);
