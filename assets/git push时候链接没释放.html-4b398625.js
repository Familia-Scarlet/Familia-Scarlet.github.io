import{_ as e,o as i,c as a,a as t}from"./app-09c9e424.js";const s={},n=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Administrator@Familiar-Desktop MINGW64 /f/Desktop/familiar-article (master)
$ git push
fatal: unable to access &#39;https://github.com/Familiar/familiar-article.git/&#39;: Recv failure: Connection was reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>清理DNS缓存即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ipconfig/flushdns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),l=[n];function c(r,d){return i(),a("div",null,l)}const u=e(s,[["render",c],["__file","git push时候链接没释放.html.vue"]]);export{u as default};
