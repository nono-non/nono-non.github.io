# nono-non.github.io
ブログサイト運営の練習場

           Jekyll(全体の呼称)
    ┌────┼────┐
    ↓        ↓        ↓
Markdown   Liquid   Front Matter
 (.md)    ({{ }})     (---)
    │        │          │
    └────┼─────┘
              ↓
         HTMLを生成
              ↓
        ブラウザで表示

Liquid プログラムを埋め込む時に使う
①オブジェクト（出力）
二重の波括弧 {{ }} を使って、変数やデータの値を画面に出力します。例：{{ page.title }}（ページのタイトルを表示）
②タグ（ロジック・制御）
パーセント記号と波括弧 {% %} を使って、条件分岐（if）や繰り返し（for）などの処理を実行します。
例：{% if site.posts %} や {% for post in site.posts %}
③フィルタ（加工）
パイプ記号 | を使って、出力するデータの見た目を変更・加工します。

メモ書き
⭐️記事にあるlayout: postは_layoutsフォルダの中のpost.htmlを使うよという意味
例）2026-7-30test.mdの記事にlayout: postとあるのでpost.htmlを使って記事を作成しようとする、そのpost.htmlの中にpage.titleが出てくるがこのpageは現在処理している記事(2026-7-30test.mdのこと)なのでそのfrontmatterのtitleを使って記事を作成するということつまりpageとpostは別物と考える
※page→現在処理中のページの情報
  post.html→そのページをどういうHTMLにするかというテンプレート
※page.previousだけは特別で現在表示されてないが_postsに入ってる記事をサイトビルドの時に覚えていてそれを表示してくれるらしい
⭐️{{ post.date | date: "%Y-%m-%d" }}
左側→どのデータを使うか、右側→フォーマットを指定
⭐️このpost.dateのpostはfor post in site.postsで自分でpostと名前をつけたからついている
⭐️date、titleなどは記事上部の（front matterという）以下の部分から取っている。
ーーーー
layout
title
date
tags
など
ーーーー

