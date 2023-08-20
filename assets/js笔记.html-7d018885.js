import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as l,d as t,e}from"./app-4dea10e3.js";const s="/assets/截图_20230610003732-e5c8b3ac.png",r={},c=e(`<h2 id="js是什么" tabindex="-1"><a class="header-anchor" href="#js是什么" aria-hidden="true">#</a> js是什么</h2><p>js用于实现人机交互，可以做网页特效、表单验证、数据交互、服务端编程（nodejs）。</p><p>JavaScript由ECMAScript、WebAPIs组成，ECMAScript规定了js基础语法的基础知识，WebAPIs提供了操作文档（DOM）和浏览器（BOM）的接口。</p><h2 id="js注意" tabindex="-1"><a class="header-anchor" href="#js注意" aria-hidden="true">#</a> js注意</h2><p>js编写时候，分好结束符<code>;</code>可写可不写，主要以团队文档为主</p><p>字面量（literal），可以理解成右值</p><p>js的变量只允许出现$和_</p><p>遵守小驼峰命名法</p><h2 id="js的编写位置" tabindex="-1"><a class="header-anchor" href="#js的编写位置" aria-hidden="true">#</a> js的编写位置</h2><ol><li><p>内部js，在body标签中</p><p>注意，由于html文档是按顺序加载，所以js代码应该写在body标签中的<mark>最后部分</mark>。比如，如果js要获取某个DOM，那必须先加载前面的html结构后才能获取到。</p></li><li><p>外部js，在body标签中</p><p>这种方式的script标签中不需要写js代码，即使写了也会被忽略</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
	&lt;script src=&quot;js路径&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>内联js，写在标签中</p><p>主要在vue中会碰到</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
	&lt;button onclick=&quot;alert(&quot;2333&quot;)&quot;&gt;我是按钮&lt;/button&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js输入和输出语法" tabindex="-1"><a class="header-anchor" href="#js输入和输出语法" aria-hidden="true">#</a> js输入和输出语法</h2><h3 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h3><ol><li><p>document.write(&quot;&quot;)</p><p>可以输出普通内容，也可以输出html结构到文档中</p></li><li><p>alert(&quot;&quot;)</p></li><li><p>console.log(&quot;&quot;)</p></li></ol><h3 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h3><ol><li><p>prompt(&quot;请输入你的年龄：&quot;)</p><p>弹出对话框来进行输入</p></li></ol><h2 id="let、var、const的区别" tabindex="-1"><a class="header-anchor" href="#let、var、const的区别" aria-hidden="true">#</a> let、var、const的区别</h2><p>var是历史遗留，已经被let代替</p><p>var存在以下问题：</p><ol><li>可以先使用再声明</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>num = 10
var num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>var声明过的变量可以重复声明</li><li>变量提升、全局变量、没有块级作用域</li></ol><p>const用于声明常量，声明的同时必须进行赋值，且不允许重新赋值</p><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><ol><li><p>基本数据类型</p><ul><li><p>number</p><p>NaN是一个计算错误，是一个不正确或未定义的number类型</p></li><li><p>string</p><p>单引号、双引号、反引号包裹的数据都是string类型，单引号和双引号在js中没有本质的区别，但嵌套引号时候就可能要用到两种引号了，不能自己嵌套自己</p></li><li><p>boolean</p></li><li><p>undefined</p><p>只声明但没有赋值时候，变量的类型就是undefined</p></li><li><p>null</p><p>赋值了，但内容为空，例如有个变量未来将存放一个对象，但对象还没创建好，就先给个null，本质是对象类型的一个特例</p></li></ul></li><li><p>引用数据类型</p><ul><li>object</li></ul></li></ol><h2 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h2><p>用于拼接字符串和变量，用反引号(\`\`)包裹，变量用\${}</p><p>有了模板字符串就不用大量的+来进行拼接了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let age = 20
document.write(\`我今年\${age}岁了\`)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检测类型与显示类型转换" tabindex="-1"><a class="header-anchor" href="#检测类型与显示类型转换" aria-hidden="true">#</a> 检测类型与显示类型转换</h2><ol><li>运算符形式</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>typeof num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>函数形式</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>typeof(num)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>显示转换</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Number(&#39;123&#39;)
parseInt(&#39;123.92px&#39;) //取整型数字
parseFloat(&#39;123.92px&#39;) //取整个float类型的数字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js函数命名规范" tabindex="-1"><a class="header-anchor" href="#js函数命名规范" aria-hidden="true">#</a> js函数命名规范</h2><ol><li>和变量命名基本一致</li><li>使用小驼峰</li><li>前缀用动词</li><li>常用动词约定 <ul><li>can 判断是否可执行某动作</li><li>has 判断是否还有某个值</li><li>is 判断是否为某个值</li><li>get 获取某个值</li><li>set 设置某个值</li><li>load 加载某些数据</li></ul></li></ol><h2 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数" aria-hidden="true">#</a> 匿名函数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 声明
let fn = function() { 
   console.log(&#39;函数表达式&#39;)
}
// 调用
fn()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string类型属性和方法" tabindex="-1"><a class="header-anchor" href="#string类型属性和方法" aria-hidden="true">#</a> string类型属性和方法</h2><p>length</p><p>split 分割</p><p>slice 提取</p><p>concat 合并</p><p>trim 去空格</p><p>toUpperCase</p><p>toLowerCase</p><h2 id="array类型属性和方法" tabindex="-1"><a class="header-anchor" href="#array类型属性和方法" aria-hidden="true">#</a> array类型属性和方法</h2><p>length</p><p>concat</p><p>fill</p><p>join</p><p>push</p><p>pop</p><p>reverse</p><p>sort 按字符排序，而不是按数字大小排序</p><p>slice</p><h2 id="日期对象" tabindex="-1"><a class="header-anchor" href="#日期对象" aria-hidden="true">#</a> 日期对象</h2><h3 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化" aria-hidden="true">#</a> 实例化</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const date = new Date()

const date = new Date(&#39;2022-5-1&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象方法" tabindex="-1"><a class="header-anchor" href="#对象方法" aria-hidden="true">#</a> 对象方法</h3><p>getFullYear() 获取年份</p><p>getMonth() 获取月份</p><p>getDate() 获取日期</p><p>getDay() 获取星期</p><p>getHours() 获取小时</p><p>getMinutes() 获取分钟</p><p>getSeconds() 获取秒</p><p>toLocaleString() yyyy-mm-dd HH:MM:SS</p><p>toLocaleDateString()</p><p>toLocaleTimeString()</p><p>+new Date() 获取当前时间戳</p><p>getTime() 获取指定时间对象的时间戳</p><p>now() 获取时间戳（无需实例化，但只能获取当前的时间戳）</p><h2 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h2><p>== 数值相等，如10==&#39;10&#39;为true</p><p>=== 数值和类型都相等，如10===&#39;10&#39;为false</p><h2 id="数组方法" tabindex="-1"><a class="header-anchor" href="#数组方法" aria-hidden="true">#</a> 数组方法</h2><ul><li><p>forEach 遍历</p><p>形参：</p><p>​ callbackFn形参：element、index、array</p><p>​ thisArg</p><p>返回值：undefined</p></li><li><p>map 收集回调函数的返回值形成新数组</p><p>形参：</p><p>​ callbackFn形参：element、index、array</p><p>​ thisArg</p><p>返回值：array</p></li><li><p>find 找到第一个回调函数返回值为true的元素</p><p>形参：</p><p>​ callbackFn形参：element、index、array</p><p>​ thisArg</p><p>返回值：第一个找到的element</p></li><li><p>filter 收集回调函数返回值为true的元素</p><p>形参：</p><p>​ callbackFn形参：element、index、array</p><p>​ thisArg</p><p>返回值：由原数组元素浅拷贝（shallow copy）后组成的数组</p></li><li><p>reduce 对各个元素遍历，然后将返回值累加</p><p>形参：</p><p>​ callbackFn形参：accumulator、currentValue、currentIndex、array</p><p>​ initialValue</p></li></ul><h2 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数" aria-hidden="true">#</a> 回调函数</h2><p>函数可以作为参数进行传递，传递过去的参数可以被调用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function printHello() {

    console.log(&#39;Hello&#39;);

 }

  

function printGoodbye(
callback
) { 

    callback();

    console.log(&#39;Goodbye&#39;);

}


printGoodbye(
printHello
); 

//Expected output:  &#39;Hello&#39;

//Expected output:  &#39;Goodbye&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bom概述" tabindex="-1"><a class="header-anchor" href="#bom概述" aria-hidden="true">#</a> BOM概述</h2><p>BOM（Browser Object Model）即浏览器对象模型，它提供了独立于DOM文档内容的与浏览器窗口进行交互的对象，核心对象是windows。</p><p>BOM由一系列浏览器相关的对象构成，并且各个对象都提供了很多方法和属性。</p><p>BOM缺乏标准，JS语法的标准化组织是ECMA，DOM的标准化组织是W3C，BOM最初是Netscape浏览器标准的一部分。</p><h3 id="bom与dom的对比" tabindex="-1"><a class="header-anchor" href="#bom与dom的对比" aria-hidden="true">#</a> BOM与DOM的对比</h3><table><thead><tr><th>DOM</th><th>BOM</th></tr></thead><tbody><tr><td>文档对象模型</td><td>浏览器对象模型</td></tr><tr><td>顶级对象是document</td><td>顶级对象是windows</td></tr><tr><td>主要是操作页面元素</td><td>主要操作浏览器</td></tr><tr><td>都遵从W3C标准规范</td><td>各个浏览器规范不同</td></tr></tbody></table>`,91),p=e(`<h2 id="window对象" tabindex="-1"><a class="header-anchor" href="#window对象" aria-hidden="true">#</a> window对象</h2><p>以前使用document对象来获取DOM元素的写法的完整版如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.querySelector()

window.document.querySelector()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>window是个全局对象，定义在全局作用域的变量、函数都会变成window对象的属性和方法，包括自己写的全局变量和函数，其实都是属于window对象的。</p><p>name是window对象下的一个特殊属性，所以一般不要用name作为变量名。</p><h3 id="window对象的常见事件" tabindex="-1"><a class="header-anchor" href="#window对象的常见事件" aria-hidden="true">#</a> window对象的常见事件</h3><ul><li><p>load事件</p><p>当文档内容，包括图像、脚本文件、css文件都被加载完毕后会触发该事件，需要为该事件注册事件处理函数。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.onload = function(){}
或者
window.addEventListener(&quot;load&quot;,function(){})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 注意，方法一只能同时注册一次，以最后一次的注册为准。而方法二能为事件注册多个方法，这些方法会按顺序执行。</p><ul><li><p>DOMContentLoaded事件</p><p>当DOM加载完成后触发，不包括css文件、图片等等，主要用于图片很多时候使用。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.addEventListener(&quot;DOMContentLoaded&quot;,function(){})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>resize事件</p><p>窗口调整时候触发</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.onresize = function(){}
或者
window.addEventListener(&quot;resize&quot;,function(){
	if(window.innerWidth &lt;=800){
		窗口大小小于等于800时进行处理;
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器" aria-hidden="true">#</a> 定时器</h2><ol><li><p>setTimeout(回调函数,间隔时间)</p><p>倒计时定时器，倒计时到了就执行，倒计时单位是ms。</p></li><li><p>clearTimeout(定时器对象)</p><p>用于关闭定时器，需要传递定时器对象作为参数。</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function callback(){
	console.log(&#39;爆炸了&#39;)
}
timer = setTimeout(callback,3000)//推荐写法，没有括号表示传函数，有括号表示调用
timer = setTimeout(&#39;callback()&#39;,3000)//不推荐写法

clearTimeout(timer)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>setInterval(回调函数,间隔时间)</p><p>重复定时器，每间隔一定时间就执行一次回调函数</p></li><li><p>clearInterval(定时器对象)</p><p>用于关闭定时器</p></li></ol><h2 id="this的指向" tabindex="-1"><a class="header-anchor" href="#this的指向" aria-hidden="true">#</a> this的指向</h2><p>this指向的是调用者，哪个对象访问this，this就是指向哪个对象。</p><p>this指向是可以更改的，后续再学习</p><h2 id="js执行机制" tabindex="-1"><a class="header-anchor" href="#js执行机制" aria-hidden="true">#</a> js执行机制</h2><h3 id="同步与异步" tabindex="-1"><a class="header-anchor" href="#同步与异步" aria-hidden="true">#</a> 同步与异步</h3><ul><li><p>同步</p><p>程序的执行按顺序进行</p></li><li><p>异步</p><p>程序执行时中断执行其他任务，然后在某个时间点再继续之前被中断的任务</p></li></ul><p>js中的任务分为同步任务和异步任务，两种任务都各自有一个执行的队列，分别是同步队列和异步队列。</p><p>用下面的代码作为例子来演示js的执行机制，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(1)
setTimeout(fn,0)
console.log(2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上的3条函数都是在同步队列中的任务，同步队列的任务依次放到执行任务队列中执行，当执行到setTimeout函数时候会向异步队列中添加异步任务。同步任务执行完毕后，再查看异步队列中是否有任务，如果有就将异步任务依次加入到任务队列中进行执行。</p><figure><img src="`+s+'" alt="截图_20230610003732" tabindex="0" loading="lazy"><figcaption>截图_20230610003732</figcaption></figure><h2 id="promise对象" tabindex="-1"><a class="header-anchor" href="#promise对象" aria-hidden="true">#</a> Promise对象</h2>',29);function o(u,v){const i=n("Mermaid");return d(),l("div",null,[c,t(i,{id:"mermaid-554",code:"eJxLL0osyOAqz8xLyS9X0NXVVUjJTy7NTc0rQRbLyU9OLMnMz0MWy0ssy0zHEC1OLkpNRRHJyCwuyS+q5AIAck4jpA=="}),p])}const b=a(r,[["render",o],["__file","js笔记.html.vue"]]);export{b as default};
