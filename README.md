# EC-CUBE 3 スタイルガイド制作

EC-CUBE3デモサイト

[http://demo3.ec-cube.net/](http://demo3.ec-cube.net/)

開発リポジトリ　

[https://github.com/EC-CUBE/Eccube-Styleguide](https://github.com/EC-CUBE/Eccube-Styleguide)

## 確認環境[master]

`master`ブランチにマージされた内容はこちらで確認できます。

master ブランチは最新のタグリリース内容を保持するブランチです。

Styleguide On Heorku 

[http://eccube3-styleguide.herokuapp.com/](http://eccube3-styleguide.herokuapp.com/)

HTML Moc On Heroku 

[http://eccube3-styleguide.herokuapp.com/moc/](http://eccube3-styleguide.herokuapp.com/moc/)

## 確認環境[dev]

`dev`ブランチにマージされた内容はこちらで確認できます。

dev ブランチは開発作業中の内容を取り込む ブランチです。

Styleguide On Heorku 

[http://eccube3-styleguide-dev.herokuapp.com/](http://eccube3-styleguide-dev.herokuapp.com/)

HTML Moc On Heroku 

[http://eccube3-styleguide-dev.herokuapp.com/moc/](http://eccube3-styleguide-dev.herokuapp.com/moc/)

モックページの実装状況等は、Project ページを確認してください。

https://github.com/EC-CUBE/Eccube-Styleguide/projects

## リリース作業の進め方

リリースに関するタスク管理は、全てissueで管理します。

issue は dev等ブランチにマージされたタイミングで close します。

dev / master ブランチにUPされたタイミングで上記確認環境にDeployされますので、確認が可能です。


### タグのリリース

dev 宛のPRは全て Squash マージで行います。

dev -> master へのPR を以てリリースとし、マージとともにリリースタグを発行します。





## 作業環境の構築

必要モジュールのインストール

````
$ npm i 
````

ビルド

````
$ npm run build
````

スタイルガイド制作用開発サーバの起動

````
$ npm start
````

スタイルガイドのpug

````
pugcache.jsonファイルごと削除
````

モック制作用開発サーバの起動

````
$ npm run dev
````

アイコンが表示されない場合

```
$ npm run build:moc:icon
```