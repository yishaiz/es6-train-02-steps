const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

const paths = {
    es6: ['src/**/*.js'],
    es5: 'dist'
};



gulp.task('babel', () => {
    return gulp.src(paths.es6)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.es5));
});

gulp.task('watch', function() { // (D)
    gulp.watch(paths.es6, ['babel']);
});
