// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var compass = require('gulp-compass');

var path = require('path');
var minifyCSS = require('gulp-minify-css');


gulp.task('compass', function() {
    gulp.src('./src/*.scss')
        .pipe(compass({
            css: 'css',
            sass: 'sass',
            image: 'images'
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('default'));
});

// 检查脚本
gulp.task('lint', function() {
    gulp.src('./javascript/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('default'));
});

// 默认任务
gulp.task('default', function(){
    gulp.run('lint', 'compass', 'scripts');

    // 监听文件变化
    gulp.watch('./js/*.js', function(){
        gulp.run('lint', 'compass', 'scripts');
    });
});