"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const browserSync = require("browser-sync");

const {src,dest} = global;

const fs = require("fs")
const path = require("path")
const url = require("url")
const pug = require("pug")

const pugMiddleWare = (req, res, next) => {

    const basedir = process.cwd();
    const requestPath = getPugTemplatePath(basedir,req)

    if (
        !requestPath ||
        path.parse(requestPath).ext !== ".html"
    ) {
        return next();
    }
    const pugPath = requestPath.replace('.html', '.pug');

    try{
        console.log("[BS] try to file "+ pugPath)
        fs.statSync(pugPath)
        const content = pug.renderFile(pugPath, {
            locals:{},
            pretty: true,
            basedir,
            compileDebug: true,
            doctype: "html"
        });
        res.write(new Buffer(content));
        next();
    }catch (e){
        console.log(e)
        return next();
    }
}

const getPugTemplatePath = (baseDir,req)=>{
    const requestPath = url.parse(req.url).pathname;
    if(requestPath.substr(0,4) !== "/moc"){
        return null;
    }
    const suffix = path.parse(requestPath).ext ? "": "index.html"
    return path.join(baseDir,"assets/tmpl",requestPath,suffix);
}


gulp.task("server",()=> {

    // var config = {
    //     proxy: "127.0.0.1:8000",
    //     open: "external",
    //     //notify: false
    // };
    //
    // var server = {
    //     base: `${dest}`,
    // }
    //
    // php.server(server,() => {
    //     browserSync(config)
    // });

    browserSync({
        server:{
            middleware: [pugMiddleWare],
            baseDir:"public",
            index: "index.html",
            open: false

        }
    })
    return gulp.watch([
        `${dest}/**/*`,
        `${src}/assets/tmpl/**/*`
    ], (e) => {
        console.log(e)
        setTimeout(function(){
            browserSync.reload();
        },500);
    });
});

gulp.task("server:reload",()=>{
    browserSync.reload();
})

global.watch.push("server")
