const gulp = require('gulp'),
	  watch = require('gulp-watch');
	  sass = require('gulp-sass'),
	  autoprefixer = require('gulp-autoprefixer'),
	  plumber = require('gulp-plumber'),
	  livereload = require('gulp-livereload'),
	  htmlmin = require('gulp-htmlmin');

// Style paths
const sassSrc = './src/scss/*.scss',
	  cssDest = './dist/css/',
	  htmlSrc = './src/*.html',
	  htmlDest = './dist/';

// Style task
gulp.task('styles', () => {
	gulp.src(sassSrc)
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		//.pipe(plumber())
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest(cssDest))
		.pipe(livereload());
});

// HTML task
gulp.task('htmlmin', function() {
  return gulp.src(htmlSrc)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlDest))
    .pipe(livereload());
});

gulp.task('watch', () => {
	livereload.listen();
    gulp.watch(sassSrc, ['styles']);
    gulp.watch(htmlSrc, ['htmlmin']);
});

gulp.task('default', ['styles', 'htmlmin', 'watch']);