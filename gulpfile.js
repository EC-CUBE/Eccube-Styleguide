const gulp = require("gulp");
const runSequence = require("run-sequence");

global.watch = [];
global.build = [];

global.src = "./";
global.dest = "./public/";

require("./assets/gulp/pug.js")
require("./assets/gulp/sass.js")
// require("./frontend/gulp/webpack.js")
require("./assets/gulp/styleguide.js")
require("./assets/gulp/browserSync.js")


gulp.task("watch",global.watch)

gulp.task("build",(cb)=>{
    global.build.push(cb)
    runSequence.apply(this,global.build)
})

gulp.task("default",["watch"])
