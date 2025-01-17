let uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    scriptsPATH = {
        "input": "./dev/static/js/",
        "ouput": "./build/static/js/"
    };

module.exports = function () {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src([
            'node_modules/svg4everybody/dist/svg4everybody.min.js',
            'dev/libs/fontawesome/svg-with-js/js/fontawesome-all.js',
            'dev/libs/select2/select2.full.js',
            'dev/libs/jquery-ui/jquery-ui.js',
            'dev/libs/jquery-ui/datepicker-ru.js',
            'dev/libs/fancybox/jquery.fancybox.js',
            'dev/libs/daterangepicker/moment.min.js',
            'dev/libs/daterangepicker/daterangepicker.min.js'
            // 'dev/libs/liteChart/liteChart.js'
            ])
            .pipe(concat('libs.min.js'))
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src([
            'node_modules/svg4everybody/dist/svg4everybody.min.js',
            'dev/libs/fontawesome/svg-with-js/js/fontawesome-all.js',
            'dev/libs/select2/select2.full.js',
            'dev/libs/jquery-ui/jquery-ui.js',
            'dev/libs/jquery-ui/datepicker-ru.js',
            'dev/libs/fancybox/jquery.fancybox.js',
            'dev/libs/daterangepicker/moment.min.js',
            'dev/libs/daterangepicker/daterangepicker.min.js'
            // 'dev/libs/liteChart/liteChart.js'
            ])
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('js:dev', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.ouput))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:build', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });

    $.gulp.task('js:build-min', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe(concat('main.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });
};
