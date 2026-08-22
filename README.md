# nono-non.github.io
ブログサイト運営の練習場

           Jekyll
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

メモ書き
⭐️記事にあるlayout: postは_layoutsフォルダの中のpost.htmlを使うよという意味
例）2026-7-30test.mdの記事にlayout: postとあるのでpost.htmlを使って記事を作成しようとする、そのpost.htmlの中にpage.titleが出てくるがこのpageは現在処理している記事(2026-7-30test.mdのこと)なのでそのfrontmatterのtitleを使って記事を作成するということつまりpageとpostは別物と考える
※page→現在処理中のページの情報
  post.html→そのページをどういうHTMLにするかというテンプレート
※page.previousだけは特別で現在表示されてないが_postsに入ってる記事をサイトビルドの時に覚えていてそれを表示してくれるらしい
⭐️{{ post.date | date: "%Y-%m-%d" }}
左側→どのデータを使うか、右側→フォーマットを指定
⭐️このpost.dateのpostはfor post in site.postsで自分でpostと名前をつけたからついている
date、titleなどは記事上部の（front matterという）以下の部分から取っている。
ーーーー
layout
title
date
tags
など
ーーーー

