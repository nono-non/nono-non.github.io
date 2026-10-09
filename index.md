---
layout: default
title: "ふぇりーちぇ"
paginate: true
---

{% if paginator.page == 1 %}

<div class="top-page" markdown="1">

## ブログ
[ブログ](blog.html)

## プログラムで作ったもの
1. [恐竜ゲーム](https://nono-non.github.io/DinosaurGame/dino.html)

</div>
## 新着記事
{% endif %}

{% for post in paginator.posts %}

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
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="previous">
      Previous
    </a>
  {% else %}
    <span class="previous">Previous</span>
  {% endif %}
  <span class="page_number ">
    Page: {{ paginator.page }} of {{ paginator.total_pages }}
  </span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">Next</a>
  {% else %}
    <span class="next ">Next</span>
  {% endif %}
</div>

