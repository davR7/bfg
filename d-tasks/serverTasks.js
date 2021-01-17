const browserSync = require('browser-sync').create()

function startBS(){
  browserSync.init({
      server: { baseDir: "./" },
      port: 3030,
      ui: { port: 3031 }
  })
}

function reloadBS(done){
  browserSync.reload()
  done()
}

module.exports = {
  startBS,
  reloadBS
}