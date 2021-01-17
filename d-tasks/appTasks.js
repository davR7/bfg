const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')

function cssTask(){
  return gulp.src("./d-sass/style.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ suffix: ".min" }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./b-min-css"))
}

function jsTask(){
  return gulp.src("./d-javascript/*.js")
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./b-min-js")) 
}

module.exports = {
  cssTask,
  jsTask
}