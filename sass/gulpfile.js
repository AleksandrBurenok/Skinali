var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');

gulp.task('tinypng', function () {
    gulp.src('img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'evBl6s4pPQi9kKSZDE0q4vowWzgibsSa'
        }))
        .pipe(gulp.dest('images'));
});