import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,a as t}from"./app-358ad391.js";const n={},d=t(`<h2 id="react概述" tabindex="-1"><a class="header-anchor" href="#react概述" aria-hidden="true">#</a> React概述</h2><p>React是一个用于构建用户界面的JavaScript库。</p><p>React起源于Facebook的网站。</p><h3 id="react特点" tabindex="-1"><a class="header-anchor" href="#react特点" aria-hidden="true">#</a> React特点</h3><ol><li><p>声明式</p><p>程序员声明组件即可，不需要关心渲染过程。</p></li><li><p>基于组件</p></li></ol><h3 id="react基本使用" tabindex="-1"><a class="header-anchor" href="#react基本使用" aria-hidden="true">#</a> React基本使用</h3><ol><li><p>引入js文件</p><p>react包是必须导入</p><p>reactDOM包仅用于web应用</p></li><li><p>创建react元素</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const title = React.createElement(元素名称,元素属性,元素的子节点)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>渲染react元素</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ReactDOM.render(title,document.getElementById(&#39;root&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="react脚手架基本使用" tabindex="-1"><a class="header-anchor" href="#react脚手架基本使用" aria-hidden="true">#</a> React脚手架基本使用</h3><ol><li>初始化项目</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx create-react-app app-name
或
npm init react-app app-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>启动项目</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>导入react和react-dom两个包</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React from &#39;react&#39;
import ReactDOM from &#39;react-dom&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>创建react元素</li><li>渲染react元素</li></ol><h2 id="jsx语法概述" tabindex="-1"><a class="header-anchor" href="#jsx语法概述" aria-hidden="true">#</a> JSX语法概述</h2><h3 id="jsx语法简介" tabindex="-1"><a class="header-anchor" href="#jsx语法简介" aria-hidden="true">#</a> JSX语法简介</h3><p>JSX是JavaScript XML的简写，表示在JavaScript中写XML格式的代码。</p><p>这种语法更加直观，类似HTML的结构，就想vue中的<code>&lt;template&gt;</code>标签中的内容。</p><h3 id="jsx语法的基本使用" tabindex="-1"><a class="header-anchor" href="#jsx语法的基本使用" aria-hidden="true">#</a> JSX语法的基本使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React from &#39;react&#39;
import ReactDOM from &#39;react-dom&#39;

const title = &lt;h1&gt;Hello&lt;/h1&gt;

ReactDOM.render(title,document.getElementById(&#39;app&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jsx语法要通过babel编译处理后变成原生的js语法，然后就可以在浏览器中运行了。</p><h3 id="jsx语法注意点" tabindex="-1"><a class="header-anchor" href="#jsx语法注意点" aria-hidden="true">#</a> JSX语法注意点</h3><ol><li>React元素的<mark>属性名</mark>使用驼峰命名法</li><li>特殊属性名，如className、htmlFor、tabIndex</li><li>没有子节点的react元素可以用<code>/&gt;</code>结束</li><li>推荐使用小括号<code>()</code>包裹JSX语法</li></ol><h2 id="jsx语法" tabindex="-1"><a class="header-anchor" href="#jsx语法" aria-hidden="true">#</a> JSX语法</h2><h3 id="插值表达式" tabindex="-1"><a class="header-anchor" href="#插值表达式" aria-hidden="true">#</a> 插值表达式</h3><p>类似vue，但是，是使用<mark>单</mark>花括号<code>{}</code></p><p>花括号内可以使用js表达式，也可以使用函数表达式</p><h3 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h3><h3 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染</h3><p>使用数组中的map函数</p><p>和vue一样，列表渲染时候要设置好id，而且不能使用索引号作为id，因为id是可变的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const list = {
	&lt;ul&gt;
		{songs.map(item =&gt; &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;)}
	&lt;/ul&gt;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样式处理" tabindex="-1"><a class="header-anchor" href="#样式处理" aria-hidden="true">#</a> 样式处理</h3><ol><li>import语句引入css文件</li><li>指定类名和编写css样式</li></ol><h3 id="react和vue的区别" tabindex="-1"><a class="header-anchor" href="#react和vue的区别" aria-hidden="true">#</a> react和vue的区别</h3><p>react是完全利用js语言自身的能力来编写UI，而不是像VUE那样通过造轮子来增强html的功能。</p><h2 id="react组件" tabindex="-1"><a class="header-anchor" href="#react组件" aria-hidden="true">#</a> react组件</h2><h3 id="react组件的创建" tabindex="-1"><a class="header-anchor" href="#react组件的创建" aria-hidden="true">#</a> react组件的创建</h3><ol><li><p>使用函数创建组件</p><p>函数组件又叫做无状态组件</p><p>函数名称必须以大写字母开头,react根据是否是首字母大写来区分react组件和react普通元素</p><p>函数组件必须有返回值</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Hello(){
	return {
		&lt;div&gt;233&lt;/div&gt;
	}
}
或者使用箭头函数
const Hello = ()=&gt; &lt;div&gt;233&lt;/div&gt;

ReactDOM.render(&lt;Hello/&gt;,document.getElementById(&#39;root&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>使用类创建组件</p><p>类组件又叫做有状态组件</p><p>使用ES6的class创建的组件</p><p>类名称必须是以大写字母开头</p><p>类组件要继承React.Compoent父类，从而可以使用父类中提供的方法和属性</p><p>类组件必须提供render()方法</p><p>render()方法必须有返回值，这个返回值表示该组件的结构</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Hello extends React.Componet{
	render(){
		return {&lt;div&gt;233&lt;/div&gt;}
	}
}

ReactDOM.render(&lt;Hello/&gt;,document.getElementById(&#39;root&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽离出单独的react组件" tabindex="-1"><a class="header-anchor" href="#抽离出单独的react组件" aria-hidden="true">#</a> 抽离出单独的react组件</h3><ol><li>创建Hello.js</li><li>导入React</li><li>创建组件</li><li>导出组件</li></ol><h2 id="react事件处理" tabindex="-1"><a class="header-anchor" href="#react事件处理" aria-hidden="true">#</a> react事件处理</h2><h3 id="事件绑定方式" tabindex="-1"><a class="header-anchor" href="#事件绑定方式" aria-hidden="true">#</a> 事件绑定方式</h3><ol><li><p>类组件绑定事件</p><p>需要用this调用当前类的方法</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Hello extends React.Componet{
	handleClick(){
		console.log(&#39;单击一次&#39;)
	}

	render(){
		return {
			&lt;button onClick={this.handleClick}&gt;&lt;/button&gt;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>函数组件绑定事件</p><p>没用this</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function App(){
	function handleClick(){
		console.log(&#39;单击一次&#39;)
	}
	
	return {
		&lt;button onClick={handleClick}&gt;&lt;/button&gt;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象" aria-hidden="true">#</a> 事件对象</h3><p>事件对象可通过事件处理函数的参数来获取</p><p>react中的事件对象叫做合成事件，合成事件可以用来实现阻止浏览器行为</p><p>合成时间兼容所有浏览器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Hello extends React.Componet{
	handleClick(e){
		e.preventDefault()
		console.log(&#39;事件对象&#39;,e)
	}

	render(){
		return {
			&lt;button onClick={this.handleClick}&gt;&lt;/button&gt;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件中的state和setstate-方法" tabindex="-1"><a class="header-anchor" href="#组件中的state和setstate-方法" aria-hidden="true">#</a> 组件中的state和setState()方法</h2><p>state就是数据，是组件内部的私有数组，且只能在组件内使用</p><p>类似vue中的data</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Hello extends React.Componet{
	constructor(){
		super()
		this.state = {
			count: 0
		}
	}
	或者简化语法
	state = {
		count: 0
	}
	

	render(){
		return {
			&lt;button&gt;我是按钮：{this.state.count}&lt;/button&gt;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setState()用于更新state的数据，而且只能用这个方法来进行修改，而不能直接修改state中的数据。</p><p>使用setState()修改数据时，需要修改哪个数据就传什么数据，没有传的数据是不会被</p><h2 id="react-hooks" tabindex="-1"><a class="header-anchor" href="#react-hooks" aria-hidden="true">#</a> react hooks</h2><p>react16.7才推出的特性，它改变了react的规则，让react只有函数，同时也不再需要redux来管理组件状态。</p><p>react hooks可以让开发者在不使用类组件的情况下使用state和其他react功能。</p><p>react hooks就是react的未来，他杀死了类组件以及类组件相关的特性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function App(){
	//第一个hook，useState()
	const [count,setCount] = useState(0)
	
	//第二个hook，useEffect()，这个hook会在每次页面重新渲染时候执行
	useEffect(()=&gt;{
		document.title = \`点击\${count}次\`
	},[])//第二个参数是用来限制只在第一次渲染时执行
	
	const increment = ()=&gt;setCount(count+1)
	
	
	return {
		&lt;button onClick = {increment}&gt;点击&lt;/button&gt;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,70),l=[d];function s(r,c){return i(),a("div",null,l)}const o=e(n,[["render",s],["__file","React笔记.html.vue"]]);export{o as default};
