const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

const { cssTask, jsTask } = require('./d-tasks/appTasks')
const { startBS, reloadBS } = require('./d-tasks/serverTasks')
const { noDeps, bootstrapTask, materializeTask } = require('./d-tasks/depsTasks')

//Watch Files
function watchFiles(){
  gulp.watch('./d-sass/**/*.*', series(cssTask, reloadBS))
  gulp.watch('./d-javascript/**/*.*', series(jsTask, reloadBS))
  gulp.watch('./**/*.html', reloadBS)
}

//Define Tasks
const build = parallel(cssTask, jsTask)
const cleanVendor = noDeps
const buildBootstrap = series(noDeps, bootstrapTask)
const buildMaterialize = series(noDeps, materializeTask)
const dev = series(build, parallel(watchFiles, startBS))

//Export Tasks
module.exports = { buildBootstrap, buildMaterialize, 
  cleanVendor, dev }