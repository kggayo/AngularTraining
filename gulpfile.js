var config = {
    bowerDir: 'bower_components'
}

var gulp = require('gulp'),
  bower = require('gulp-bower'),
  tsc = require('gulp-typescript-compiler'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat')
  ;
  
// Include plugins
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

gulp.task('bower', function() {
    return bower()
       .pipe(gulp.dest(config.bowerDir))
}); 

gulp.task('typescript', function () {
  return gulp
    .src(['ClientSide/**/*.ts','ClientSide/*.ts'])
    .pipe(tsc({
        module: '',
        target: 'ES5',
        sourcemap: false,
        logErrors: true
    }))
    .pipe(gulp.dest('ClientSide/'));
});

gulp.task('compile_js', function () {
    return gulp.src(['ClientSide/**/*.js', 'ClientSide/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('_compiled.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('ClientSide/'));
});

gulp.task('watch_js', ['compile_js'], function () {
    gulp.watch(['ClientSide/**/*.js','ClientSide/*.js'], ['compile_js']);
});
 
gulp.task('default', ['bower', 'typescript', 'compile_js']);