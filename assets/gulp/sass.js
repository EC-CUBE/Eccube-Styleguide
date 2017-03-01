"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const bourbon = require("node-bourbon");
const neat = require("node-neat");

const {src,dest,scss_option} = global;

gulp.task("sass",()=> {
    let options = (scss_option)?scss_option:{
        sourceMap: true,
        includePaths: bourbon.with(neat.includePaths)
    };

    let srcPattern = [
        `${src}assets/scss/**/*.scss`
    ];

    return gulp.src(srcPattern)
        .pipe($.plumber({
            errorHandler: $.notify.onError('<%= error.message %>')
        }))
        .pipe($.sass(options))
        .pipe($.pleeease({
            autoprefixer:true,
            minifier: true,
            mqpacker: true
        }))
        .pipe(gulp.dest(`${dest}assets/css/`));
});

gulp.task("sass:watch",()=>{
    let target = [
        `${src}assets/scss/**/*.scss`,
    ];
    return gulp.watch(target,["sass"])
});

global.watch.push("sass:watch")
global.build.push("sass")
