---
layout: default
title: "ふぇりーちぇ"
---

<div class="top-page" markdown="1">

## ブログ
[ブログ](blog.html)

## プログラムで作ったもの
1. [恐竜ゲーム](https://nono-non.github.io/DinosaurGame/dino.html)

</div>

## 新着記事
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