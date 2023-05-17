import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as t}from"./app-d0100446.js";const s={},l=t(`<p>先回顾下positino属性：</p><ol><li><p>fixed</p><p>生成固定定位的元素，相对于浏览器窗口进行定位。</p></li><li><p>relative</p><p>生成相对定位的元素，相对于其正常位置进行定位。</p></li><li><p>absolute</p><p>生成绝对定位的元素，相对所在的有设置position属性的DOM节点来进行定位。</p></li><li><p>sticky</p><p>粘性定位，该定位基于用户滚动的位置。</p><p>它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。</p></li></ol><p>再回顾下after和before两个伪元素</p><p>​ 这两个伪元素默认是不会出现的，当在css中设置了content属性后就会出现在html结构中。</p><p>​ 比如div节点设置了伪元素的content属性后，伪元素就会出现并成为这个div节点的子节点，而这个div节点就是父节点。</p><p>​ 同理，对于不是用于布局的h1节点，设置了h1的伪元素后，h1也会成为父节点，在html结构中如下排列。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1&gt;
::before
我是h1的内容
::after
&lt;/h1&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ before伪元素是父元素的第一个子元素，after伪元素是父元素的最后一个子元素。</p><p>现在碰到的一个问题是关于伪元素的position问题。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;head&quot;&gt;头部菜单栏&lt;/div&gt;
&lt;div class=&quot;content&quot;&gt;内容&lt;div&gt;

.head{
	position: sticky;
}
.content{
	
}
.content::before{
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上面的html结构，头部菜单栏的position是sticky。</p><p>如果.content不设置position属性，.content::before设置position属性为absolute，那么before伪元素就会相对整个html来进行定位。</p><p>如果这时把.contentdposition属性设置为relative，那么before伪元素就只会相对于父元素内部空间来进行定位。</p><p>另外，如果用伪元素做模糊背景时，出现覆盖原内容的问题，可以给原内容加上z-index属性</p>`,14),d=[l];function o(a,p){return i(),n("div",null,d)}const v=e(s,[["render",o],["__file","关于absolute和relative的position定位问题.html.vue"]]);export{v as default};
