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
      <div class="blog-card-title">{{ post.title }}</div>
      <p>{{ post.date | date: "%Y年%m月%d日" }}</p>
    </div>
  </a>
</div>

{% endfor %}

### カテゴリー別
[トップページへ戻る](../index.html)





