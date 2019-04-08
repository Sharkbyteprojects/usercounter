//CREATED BY SHARKBYTEPROJECTS
const { src, dest, parallel, task } = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const less = require('gulp-less');
const fileroot = "content/"
task ('css', () => {
    return src(fileroot + "to-minify/*.css")
        .pipe(concat('all.css'))
        .pipe(dest(fileroot))
        .pipe(rename('all.min.css'))
        .pipe(cssmin())
        .pipe(dest(fileroot));
});
task ('less', () => {
    return src(fileroot + '*.less')
        .pipe(less())
        .pipe(dest(fileroot));
});