# EC-CUBE 3 Style Guide

[See Moc Page](/moc)


EC-CUBE3デモサイト

[http://demo3.ec-cube.net/](http://demo3.ec-cube.net/)

開発リポジトリ　

[https://github.com/EC-CUBE/Eccube-Styleguide](https://github.com/EC-CUBE/Eccube-Styleguide)

Styleguide On Heorku 

[http://eccube3-styleguide.herokuapp.com/](http://eccube3-styleguide.herokuapp.com/)

HTML Moc On Heroku 

[http://eccube3-styleguide.herokuapp.com/moc/](http://eccube3-styleguide.herokuapp.com/moc/)

## コンポーネント設計について

コンポーネント設計及び CSS の記述方針については FLOCSS ルールを採用していきます。
https://github.com/hiloki/flocss

EC−CUBE テーマ開発ベンダー側での FLOCSS 採用の妨げとならないよう、
通常 FLOCSS ルールで採用されるような `.c-*` `.p-*` といった接頭辞は以下のような形で修正されます。

- コンポーネント要素に関しては `.ec-xxx` 接頭辞を採用
- プロジェクト要素に関しては `.ec-xxxRole` 接頭辞、接尾辞を採用
- ユーティリティに関しては使用しません。

FLOCSS の採用にあたって、 FLOCSS ルールで通常許容されるような Project レイヤーにおける Component の書き換えをこのスタイルガイドでは許容しません。

これは Componet の DOM 記述に基づく表現の一貫性 をサポートするためです。

## 詳細度に関する運用

詳細度に関する問題に留意するために、全てのCSS定義は 原則 ２階層以上遡っての定義を行っては行けないこととします。

## 余白に関する設計

Project レイヤーにおける余白の設計は 原則 margin を用いて設計します。

上下マージンは原則 Bottom で定義します。

Component レイヤーにおける周辺に対する余白は padding を用いて設計します。

