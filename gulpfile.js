//CREATED BY SHARKBYTEPROJECTS
//COMPILE sheet1.less to all.min.css
/*Start with the Command :
 * 
 * "npm run-script gulp"
 * 
 */
const { src, dest, parallel, task } = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const less = require('gulp-less');
const fileroot = "content/"
task ('css', () => {
    return src(fileroot + "build/*.css")
        .pipe(concat('all.css'))
        .pipe(dest(fileroot + "build/"))
        .pipe(rename('all.min.css'))
        .pipe(cssmin())
        .pipe(dest(fileroot + "build/"));
});
task ('less', () => {
    return src(fileroot + '*.less')
        .pipe(less())
        .pipe(dest(fileroot + "build/"));
});