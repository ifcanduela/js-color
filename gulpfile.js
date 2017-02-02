var babel = require("gulp-babel");
var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var plumberConfig = {
    errorHandler: function (err) {
        console.log(err.toString());
        this.emit('end');
    }
};

var babelConfig = {
    "presets": ["env"]
};

gulp.task("dev", function () {
    return gulp.src("./src/color.js")
        .pipe(plumber(plumberConfig))
        .pipe(babel(babelConfig))
        .pipe(rename('color.js'))
        .pipe(gulp.dest("./dist"));
});

gulp.task("prod", function () {
    return gulp.src("./src/color.js")
        .pipe(plumber(plumberConfig))
        .pipe(babel(babelConfig))
        .pipe(uglify())
        .pipe(rename('color.min.js'))
        .pipe(gulp.dest("./dist"));
});

gulp.task("less", function () {
    gulp.src("./css/styles.less")
        .pipe(plumber(plumberConfig))
        .pipe(less())
        .pipe(rename('app.css'))
        .pipe(gulp.dest("./css"));
});

gulp.task("watch", function () {
    gulp.watch("./src/**/*.js", ["dev", "prod", "test"]);
    gulp.watch("./css/**/*.less", ["less"]);
});

gulp.task("default", ["watch"]);
