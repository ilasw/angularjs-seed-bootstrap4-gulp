var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var ngAnnotate = require('gulp-ng-annotate');
var runSequence = require('run-sequence');

// JS package
var jsFiles = 'app/javascripts/**/*.js';
var jsDest = 'app/dist/js';
gulp.task('js', function () {
	return gulp.src(jsFiles)
		.pipe(sourcemaps.init())
		.pipe(concat('scripts.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(jsDest));
});

// Sass to CSS
var cssDest = 'app/dist/css';
gulp.task('styles', function () {
	var options = {style: 'compressed'};
	return gulp.src('app/styles/main.scss')
		.pipe(sass(options))
		.on('error', sass.logError)
		.pipe(gulp.dest(cssDest));
});

// Watch for edit
gulp.task('watch', ['js'], function () {
	gulp.watch(['app/javascripts/**/*.js', 'app/javascripts/**/*'], ['js']);
	gulp.watch(['app/styles/*.scss', 'app/styles/**/*.scss'], ['styles']);
});

// our main sequence
gulp.task('default', function (done) {
	runSequence('js', 'styles', 'watch', done);
});
