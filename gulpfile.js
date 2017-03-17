var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

// Compile all gulp tasks
gulp.task('default', ['js', 'sass', 'watch']);

// Minify JS
gulp.task('js', function() {
	return gulp.src(['_source/js/_plugins.js','_source/js/_functions.js','_source/js/scripts.js'])
		.pipe(concat('scripts.js'))
		.pipe(minify({
			ext:{
				min:'-min.js'
			},
			preserveComments: 'some'
		}))
		.pipe(gulp.dest('assets/js/'));
});

// Compile SASS files
gulp.task("sass", function() {
	gulp.src("_source/scss/**/*.scss")
		.pipe(compass({
	      config_file: 'config.rb',
	      css: 'assets/css',
	      sass: '_source/scss'
	    })
		.on('error', sass.logError))
		.pipe(sass({outputStyle: 'expanded'})) // compressed, expanded, nested, compact
		.pipe(gulp.dest("assets/css/"));
});

// Watch
gulp.task("watch", function() {
	watch('_source/scss/**/*.scss', function() { gulp.start('sass'); });
	watch('_source/js/**/*.js', function() { gulp.start('js'); });
});