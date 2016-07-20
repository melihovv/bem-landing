var gulp = require('gulp');
var browserSync = require('browser-sync');
var shell = require('gulp-shell');

gulp.task('default', function () {
    gulp.start('build', 'browser-sync', 'watch');
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: '.',
            directory: true,
        },
        files: [
            '*.bundles/**/*.html',
            '*.bundles/**/*.css',
            '*.bundles/**/*.js',
        ],
        reloadDelay: 1000,
    });
});

gulp.task('build', shell.task('enb make'));

gulp.task('watch', function () {
    gulp.watch([
        './*.blocks/**/*',
        './*.bundles/**/*.bemjson.js',
    ], ['build']);
});
