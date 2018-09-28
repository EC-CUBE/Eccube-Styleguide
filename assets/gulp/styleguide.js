"use strict"

var gulp = require('gulp');
var styleguide = require('sc5-styleguide');
var sass = require('gulp-sass');
var outputPath = 'public';
const runSequence = require("run-sequence");


const {src,dest,scss_option} = global;

const target = src+'assets/scss/**/*.scss';

const styelguideConfig = {
    title: 'My Styleguide',
    rootPath: outputPath,
    overviewPath: './assets/styleguide.md',
    extraHead: [
        '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">',
        '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">',
        `<style>
            :root{font-size: 10px}
            .sg.sg-wrapper,.sg.sg-top-nav-menu{
                max-width: 96em
            }
        </style>`
    ],
    // commonClass:"ec-role",
    enablePug: true
}



// サーバを生成するタスク : ウォッチ機能も付く
gulp.task('styleguide:generate', function() {
    styelguideConfig.server = true;
    styelguideConfig.port = 4000;
    return gulp.src(target)
        .pipe(styleguide.generate(styelguideConfig))
        .pipe(gulp.dest(outputPath));
});

// サーバを生成せずビルドするだけ
gulp.task('styleguide:generateOnly', function() {
    return gulp.src(target)
        .pipe(styleguide.generate(styelguideConfig))
        .pipe(gulp.dest(outputPath));
});


gulp.task('styleguide:applystyles', function() {
    const plumber = require("gulp-plumber")
    return gulp.src(target)
        .pipe(plumber())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest(outputPath));
});

// // スタイルガイドに必要な画像を移動させる
// gulp.task('styleguide:image', function(){
//     return gulp.src(dest+'/image/**/*.png')
//         .pipe(gulp.dest("./styleguide/image"));
// });

gulp.task('styleguide:build', ()=>{
    runSequence(
        "styleguide:generateOnly",
        "styleguide:applystyles"
    );
});

gulp.task('styleguide:server', ['styleguide:dev'],()=>{
    gulp.watch(target,["styleguide:dev"])
});
gulp.task('styleguide:dev', ['styleguide:applystyles','styleguide:generate']);

gulp.task('styleguide', ['styleguide:build']);
