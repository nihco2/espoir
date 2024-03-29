'use strict';

var gulp = require('gulp'),
	changed = require('gulp-changed'),
	sass = require('gulp-sass'),
	csso = require('gulp-csso'),
	autoprefixer = require('autoprefixer-core'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	eslint = require('gulp-eslint'),
	babelify = require('babelify'),
	uglify = require('gulp-uglify'),
	del = require('del'),
	notify = require('gulp-notify'),
	browserSync = require('browser-sync'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	reload = browserSync.reload,
	bourbon = require('node-bourbon'),
	p = {
		jsx: './scripts/app.jsx',
		scss: 'styles/*.scss',
		bundle: 'app.js',
		distJs: 'dist/js',
		distCss: 'dist/css'
	};

gulp.task('clean', function (cb) {
	del(['dist'], cb);
});

gulp.task('browserSync', function () {
	browserSync({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watchify', function () {
	var bundler = watchify(browserify(p.jsx, watchify.args));

	function rebundle() {
		return bundler
			.bundle()
			.on('error', notify.onError())
			.pipe(source(p.bundle))
			.pipe(gulp.dest(p.distJs))
			.pipe(reload({
				stream: true
			}));
	}

	bundler.transform(babelify)
		.on('update', rebundle);
	return rebundle();
});

gulp.task('browserify', function () {
	browserify(p.jsx)
		.transform(babelify)
		.bundle()
		.pipe(source(p.bundle))
		.pipe(buffer())
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(p.distJs));
});

gulp.task('styles', function () {
	return gulp.src(p.scss)
		.pipe(changed(p.distCss))
		.pipe(sass({
			errLogToConsole: true,
			includePaths: require('node-bourbon').includePaths
		}))
		.on('error', notify.onError())
		.pipe(postcss([autoprefixer('last 1 version')]))
		.pipe(csso())
		.pipe(gulp.dest(p.distCss))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('lint', function () {
	return gulp.src('scripts/**/*.jsx')
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('watchTask', function () {
	gulp.watch(p.scss, ['styles']);
	gulp.watch('scripts/**/*.jsx', ['lint']);
});

gulp.task('watch', ['clean'], function () {
	gulp.start(['browserSync', 'watchTask', 'watchify', 'styles', 'lint']);
});

gulp.task('build', ['clean'], function () {
	process.env.NODE_ENV = 'production';
	gulp.start(['browserify', 'styles']);
});

gulp.task('default', function () {
	console.log('Run "gulp watch or gulp build"');
});