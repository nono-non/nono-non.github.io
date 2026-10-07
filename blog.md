---
layout: default
title: "ブログ一覧"
---

## ブログ

{% for post in site.posts %}

<a href="{{ post.url }}" class="blog-card">

  <div class="blog-card-image">
    <img src="ここに画像のURL">
  </div>

  <div class="blog-card-info">
    <h1>{{ post.title }}</h1>
    <p>{{ post.date | date: "%Y年%m月%d日" }}</p>
  </div>
</a>

{% endfor %}

### カテゴリー別
[トップページへ戻る](../index.html)





