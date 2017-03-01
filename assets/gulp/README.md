## frontend 開発ツール

git subtree で引っ張ってきてから、適当にコピペして使う系のやつ。
(基本的にコピペ専用)

所詮はビルドツールなので自由に運用する。

````
$ git remote add frontend https://github.com/chatbox-inc/frontend.git
$ git subtree add --prefix=frontend/gulp frontend lib
````

ローカルブランチでの差分比較を運用に加えたい場合は以下を加える。

````
$ git subtree push --prefix frontend/gulp . lib
````

gulpfileやpackage.jsonの取得は以下で

````
$ curl https://raw.githubusercontent.com/chatbox-inc/frontend/master/gulpfile.js > gulpfile.js
$ curl https://raw.githubusercontent.com/chatbox-inc/frontend/master/package.json > package.json

````


## npm installs 

gulp commons

````
$ npm i gulp gulp-load-plugins gulp-plumber gulp-notify run-sequence --save
````

gulp sass

````
$ npm i node-bourbon node-neat gulp-pleeease --save
````

gulp jade

````
$ npm i gulp-jade --save
````

gulp webpack

````
$ npm i gulp-webpack babel-loader html-loader babel-core  babel-preset-es2015 --save
````

gulp browserSync

````
npm install browser-sync gulp-connect-php --save
````


## others

common frontend

````
$ npm i jquery bootstrap normalize.css animate.css bootstrap --save
````

angularJS

````
$ npm i angular angular-route --save
````

vue.js 

````
$ npm i vue vue-router vuex vuex-connect --save
````



foundation

````
$ npm i foundation-sites-template --save
````


