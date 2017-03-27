"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const runSequence = require("run-sequence");

const {src,dest,jade_option} = global;

gulp.task("pug",() => {
    let options = (jade_option)?jade_option:{
        locals:{},
        pretty: true,
        basedir: process.cwd(),
        doctype: "html"
    };
    let srcPattern = [
        `${src}assets/tmpl/**/*.pug`,
        `!${src}assets/tmpl/**/_*`,
        `!${src}assets/tmpl/elements/**/*`,
    ];
    return gulp.src(srcPattern)
        .pipe($.plumber({
            errorHandler: $.notify.onError('<%= error.message %>')
        }))
        .pipe($.pug(options))
        .pipe(gulp.dest(`${dest}/`));
});

gulp.task("pug:watch",()=>{
    let target = [
        `${src}assets/tmpl/**/*`,
    ];
    return gulp.watch(target,()=>{
        runSequence("pug","server:reload")
    })
});

global.watch.push("pug:watch")
global.build.push("pug")
