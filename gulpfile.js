const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
// const notify = require('gulp-notify');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');

gulp.task('markup', () => {
    return gulp.src('dev/*.html')
        .pipe(gulp.dest('public'));
});

gulp.task('assets', () => {
	return gulp.src('dev/assets/*')
	.pipe(gulp.dest('public/assets'))
});

gulp.task('styles', () => {
	return gulp.src('./dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('public/styles'))
});

gulp.task('bs', () => {
	return browserSync.init({
		server: {
			baseDir: 'public'
		}
	});
});

gulp.task('default', ['markup','styles','assets','bs'], () => {
    gulp.watch('dev/**/*.scss',['styles']);
    gulp.watch('dev/*.html', ['markup', reload]);
	gulp.watch('public/styles/style.css', reload);
});