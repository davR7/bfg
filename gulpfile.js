const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

const { cssTask, jsTask } = require('./src/tasks/appTasks')
const { startBS, reloadBS } = require('./src/tasks/serverTasks')
const { noDeps, bootstrapTask, materializeTask } = require('./src/tasks/depsTasks')

//Watch Files
function watchFiles(){
  gulp.watch('./src/sass/**/*.*', series(cssTask, reloadBS))
  gulp.watch('./src/js/**/*.*', jsTask)
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