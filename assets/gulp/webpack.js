"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const {src,dest,webpack_config} = global;

const webpackDevConfig = {
    "entry": {
        "common": `${src}assets/js/common.js`
    },
    "output": {
        "filename": `[name].bundle.js`
    },
    externals: {
//                "vue": "Vue"
    },
    module: {
        loaders: [
            { test: /\.js/,exclude: /node_modules/, loader: "babel" ,query:{presets:"es2015"}},
            { test: /\.html/, loader: "html" }
        ]
    },
    resolve: {
        extensions:["",".js"]
    },
    plugins:[
        //new webpack.optimize.UglifyJsPlugin()
    ],
    dev: true,
    devtool: "source-map"
}

gulp.task("webpack",()=> {
    let options = (webpack_config)?webpack_config:webpackDevConfig;
    let srcPattern = [
        `${src}assets/js/**/*.js`
    ];
    return gulp.src(srcPattern)
        .pipe($.plumber({
            errorHandler: $.notify.onError('<%= error.message %>')
        }))
        .pipe($.webpack(options))
        .pipe(gulp.dest(`${dest}assets/js/`));
});

gulp.task("webpack:watch",()=>{
    let target = [
        `${src}assets/js/**/*`,
    ];
    return gulp.watch(target,["webpack"])
});

global.watch.push("webpack:watch")
global.build.push("webpack")
