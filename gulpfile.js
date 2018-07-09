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
        "rules": {
            "block-no-empty": true,
            "color-no-invalid-hex": true,
            "declaration-colon-space-after": "always",
            "declaration-colon-space-before": "never",
            "function-comma-space-after": "always",
            "function-url-quotes": "double",
            "media-feature-colon-space-after": "always",
            "media-feature-colon-space-before": "never",
            "media-feature-name-no-vendor-prefix": true,
            "max-empty-lines": 5,
            "number-leading-zero": "never",
            "number-no-trailing-zeros": true,
            "property-no-vendor-prefix": true,
            "rule-no-duplicate-properties": true,
            "declaration-block-no-single-line": true,
            "rule-trailing-semicolon": "always",
            "selector-list-comma-space-before": "never",
            "selector-list-comma-newline-after": "always",
            "selector-no-id": true,
            "string-quotes": "double",
            "value-no-vendor-prefix": true
        }
    }

    var processors = [
        stylelint(stylelintConfig),
        reporter({
            clearMessages: true,
            throwError: true
        })
    ];

    return gulp.src(
        ['app/scss/**/*.scss',
            // Ignore linting vendor assets
            // Useful if you have bower components
            '!app/css/vendor/**/*.scss']
    )
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
