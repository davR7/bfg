const del = require("del")
const gulp = require("gulp")
const merge = require("merge-stream")

function noDeps(){
  return del(["./build/vendor/**"])
}

function bootstrapTask(){
  const bootstrapCSS = gulp.src("./node_modules/bootstrap/dist/css/bootstrap.min.css")
    .pipe(gulp.dest("./b-vendor/bootstrap"))
  const bootstrapJS = gulp.src("./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js")
    .pipe(gulp.dest("./b-vendor/bootstrap"))
  const jquery = gulp.src("./node_modules/jquery/dist/jquery.min.js")
    .pipe(gulp.dest("./b-vendor/jquery"))
  return merge(bootstrapCSS, bootstrapJS, jquery)
}

function materializeTask(){
  const materializeCSS = gulp.src("./node_modules/materialize-css/dist/css/materialize.min.css")
    .pipe(gulp.dest("./b-vendor/materialize"))
  const materializeJS = gulp.src("./node_modules/materialize-css/dist/js/materialize.min.js")
    .pipe(gulp.dest("./b-vendor/materialize"))
  return merge(materializeCSS, materializeJS)
}

module.exports = {
  noDeps,
  bootstrapTask,
  materializeTask
}