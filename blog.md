---
layout: default
title: "ブログ一覧"
---

## ブログ

{% for post in site.posts %}

<div class="blog-card">
  <a href="{{ post.url }}">
    <div class="blog-card-image">
      <img src="{{ post.image }}">
    </div>
    <div class="blog-card-info">
      <h1>{{ post.title }}</h1>
      <p>{{ post.date | date: "%Y年%m月%d日" }}</p>
    </div>
  </a>
</div>

{% endfor %}

### カテゴリー別
[トップページへ戻る](../index.html)





