var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    postcss = require('gulp-postcss'),
    reporter = require('postcss-reporter'),
    syntax_scss = require('postcss-scss'),
    stylelint = require('stylelint');

gulp.task('sass', function () {
    return gulp.src('app/scss/**/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("scss-lint", function() {
    // Stylelint config rules
    var stylelintConfig = {
        "extends": ["stylelint-config-standard", "stylelint-config-recommended-scss", stylelint-scss],
        "rules": {
            "block-no-empty": null,
            "unit-whitelist": ["em", "rem", "s"]
        }
    }

    var processors = [
        stylelint(stylelintConfig),
        reporter({
            clearMessages: true,
            throwError: true,
            formatter: 'string',
            console: true
        }),
    ];

    return gulp.src('app/scss/**/*.scss')
        .pipe(postcss(processors, {syntax: syntax_scss}));
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);

});

gulp.task('default',['watch']);
