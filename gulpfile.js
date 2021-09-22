const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));

gulp.task("sass", function (done) {
    gulp.src("./assets/sass/**/*.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest("./assets/css"));
    done();
});

gulp.task("watch", function () {
    gulp.watch("./assets/sass/**/*.scss", gulp.series(["sass"]))
});