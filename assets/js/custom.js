'use strict';
document.addEventListener("DOMContentLoaded", function() {
  // Caymanテーマの本文エリアを指定
  const content = document.querySelector('.main-content'); 
  if (content) {
    // 本文中の「。」をすべてクラス付きのspanに置き換え
    content.innerHTML = content.innerHTML.replace(/。/g, '<span class="hidden-kuten">。</span>');
  }
});
