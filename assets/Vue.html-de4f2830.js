import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as d,a as e,t,b as l,e as i}from"./app-2ddb4e67.js";const s="/assets/截图_20230225181437-b5876e21.png",r="/assets/截图_20230225183226-cae9d573.png",u="/assets/截图_20230225183921-a02eff39.png",v="/assets/截图_20230225184536-805fd4a1.png",c="/assets/截图_20230319165016-8477ae11.png",o="/assets/截图_20230311111820-72272b0e.png",m="/assets/截图_20230301114550-5050ba75.png",p="/assets/截图_20230301160248-26500d30.png",b="/assets/截图_20230301191556-fd1ba573.png",h={},g=i(`<h2 id="前端工程化" tabindex="-1"><a class="header-anchor" href="#前端工程化" aria-hidden="true">#</a> 前端工程化</h2><ol><li><p>模块化：js、css、媒体资源模块化</p></li><li><p>组件化：UI结构、样式复用</p></li><li><p>规范化：目录划分、编码规范、接口规范、git分支管理</p></li><li><p>自动化：自动化构建、自动化部署、自动化测试</p></li></ol><h2 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h2><h3 id="webpack简介" tabindex="-1"><a class="header-anchor" href="#webpack简介" aria-hidden="true">#</a> webpack简介</h3><p>目前主流的前端工程化的解决方案，前端项目工程化的具体解决方案，提供了友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器之间的js兼容性问题、性能优化等功能，从而让程序员把工作重心放在具体功能实现上，以提高开发效率。</p><h3 id="标签和节点的关系" tabindex="-1"><a class="header-anchor" href="#标签和节点的关系" aria-hidden="true">#</a> 标签和节点的关系</h3><p>一个基本的html文档可解析成DOM树的结构，DOM树上的每个节点就是这里所说的节点，节点包括了文档节点、标签节点、属性节点、文本节点、注释节点等，因此标签即是节点的一种。</p><h3 id="npm-install-xxx的选项" tabindex="-1"><a class="header-anchor" href="#npm-install-xxx的选项" aria-hidden="true">#</a> npm install xxx的选项</h3><p>-S = --save 记录到dependencies(上线时也会用到)</p><p>-D = --save-dev 记录到devDependencies(开发阶段用)</p><p>-g 全局安装</p><p>安装的方式可以查看www.npmjs.com的官方文档</p><h3 id="安装并配置webpack" tabindex="-1"><a class="header-anchor" href="#安装并配置webpack" aria-hidden="true">#</a> 安装并配置webpack</h3><ol><li>npm install webpack@xxx -D</li><li>创建webpack.config.js，用于配置webpack的运行模式，development模式不进行代码压缩混淆，而production会。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>moudle.exports {
    mode: &#39;development&#39; //mode用来指定构建模式，可选development和production
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在package.json的script节点中添加dev脚本。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;script&quot;：{
    &quot;dev&quot;: &quot;webpack&quot;  //script节点下的脚本可通过npm run执行，如npm run dev
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>用npm run dev启动webpack进行项目的打包构建，启动时会先读取配置，然后执行script脚本。</li></ol><h3 id="webpack的默认约定" tabindex="-1"><a class="header-anchor" href="#webpack的默认约定" aria-hidden="true">#</a> webpack的默认约定</h3><p>默认打包入口为src/index.js，默认输出的文件为dist/main.js</p><p>在webpack.config.js配置文件中，通过entry节点可指定打包入口，通过output节点可指定输出目录。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const path = require(&#39;path&#39;)//nodejs中的模块

moudle.exports {
	mode: &#39;development&#39;, //mode用来指定构建模式，可选development和production
	
	entry：path.join(__dirname,&#39;./src/index1.js&#39;),  //__dirname表示当前目录
	output：{
		path:path.join(__dirname,&#39;./dist&#39;),
		filename:&#39;main.js&#39;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack插件" tabindex="-1"><a class="header-anchor" href="#webpack插件" aria-hidden="true">#</a> webpack插件</h3><ul><li><p>webpack-dev-server：用于项目的自动化重新构建重新构建的，重新构建的输出目标是保存在内存中的。</p></li><li><p>html-webpack-plugin：webpack中的html插件，可用于重定义index.html页面的位置，从而达成打开localhost:8080即可打开网页的效果 。</p></li><li><p>devServer：可实现初次打包时直接打开浏览页面，以及修改运行时的地址和端口。</p></li><li><p>loader：出于模块化的工程需求，html文件中不会引入css文件，而是以模块的形式在index.js中进行impart导入。但是，</p><p>webpack默认只能打包处理.js后缀名的模块，而其他非js后缀名的无法处理，需要调用loader加载器才能正常进行打包，如css-loader可打包处理.css文件，less-loader可打包处理.less文件，babel-loader可打包处理webpack无法处理的高级JS语法，以处理css文件为例</p><ol><li>代码中有.css文件，webpack无法处理</li><li>webpack查找webpack.config.js这个配置文件，看module.rules数组中是否配置了loader加载器。</li><li>webpack将css文件转交给后一个loader，即css-loader</li><li>当css-loader处理完毕后，会将结果交给下一个loader，即style-loader</li><li>当style-loader处理完毕后，发现没有下一个loader则会将处理结果交给webpack</li><li>webpack会将处理的结果合并到js文件中，并最终生成打包好的文件</li></ol></li></ul><h3 id="安装并配置webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#安装并配置webpack-dev-server" aria-hidden="true">#</a> 安装并配置webpack-dev-server</h3><ol><li>npm install webpack-dev-server -D</li><li>在package.json的script节点中修改dev脚本。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;script&quot;：{
    &quot;dev&quot;: &quot;webpack serve&quot;//script节点下的脚本可通过npm run xxx执行，如npm run dev
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>index.html中引入的js文件路径改成&quot;/js文件名&quot;</li><li>npm run dev运行脚本</li><li>在localhost:8080查看效果，进入src目录，浏览器会自动展示，且用该插件时输出到内存而不是硬盘中。</li></ol><h3 id="安装并配置html-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#安装并配置html-webpack-plugin" aria-hidden="true">#</a> 安装并配置html-webpack-plugin</h3><ol><li>npm install html-webpack-plugin</li><li>在webpack.config.js中添加配置</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//导入插件，并用HtmlPlugin获取插件的构造函数
const HtmlPlugin = require(&#39;html-webpack-plugin&#39;)
//创建插件的实例对象，且设置要复制的页面和输出的路径
const htmlPlugin = new HtmlPlugin({
	template:&#39;./src/index.html&#39;
	filename:&#39;./index.html&#39;
})
//使用Node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
	mode: &#39;development&#39;,
	plugins: [htmlPlugin],//通过plugins节点，使htmlPlugin插件生效。
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置devserver" tabindex="-1"><a class="header-anchor" href="#配置devserver" aria-hidden="true">#</a> 配置devServer</h3><ol><li>在webpack.config.js中添加devServer节点</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>devServer:{
	open: true,//初次打包完成后可直接打开浏览页面
	port：80，//修改运行的端口
	host：&#39;127.0.0.1&#39;,//修改运行时的地址，可用IP或域名
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装并配置css-loader" tabindex="-1"><a class="header-anchor" href="#安装并配置css-loader" aria-hidden="true">#</a> 安装并配置css-loader</h3><ol><li>npm install style-loader -D，安装css加载器</li><li>在index.js中导出css文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;./src/index.css&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>在webpack.config.js的module-&gt;rules数组中，添加loader规则</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module:{
	rules:[
	//test表示匹配的文件类型，//中的内容是正则表达式，&quot;\\&quot;为转义符号，use表示要调用的loader，调用的loader顺序不能反
		{test: /\\.css$/,use:[&#39;style-loader&#39;,&#39;css-loader&#39;]}
	]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装并配置less-loader" tabindex="-1"><a class="header-anchor" href="#安装并配置less-loader" aria-hidden="true">#</a> 安装并配置less-loader</h3><ol><li>npm install less-loader less -D</li><li>在index.js中导入less文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;./src/index.less&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>在webpack.config.js的module-&gt;rules数组中，添加loader规则</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module:{
	rules:[
	//test表示匹配的文件类型，//中的内容是正则表达式，&quot;\\&quot;为转义符号，use表示要调用的loader，调用的loader顺序不能反
		{test: /\\.css$/,use:[&#39;style-loader&#39;,&#39;css-loader&#39;]}
	]
	rules:[
		{
			test:/\\.less$/,
			use:[&#39;style-loader&#39;,&#39;css-loader&#39;,&#39;less-loader&#39;]
		}
	]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="base64图片" tabindex="-1"><a class="header-anchor" href="#base64图片" aria-hidden="true">#</a> base64图片</h3><p>base64图片是一串关于图片的字符串，可以减少网络请求。</p><p>但是，base64图片的体积会比原来更大，所以仅logo等小图片才适合。</p><h3 id="安装并配置图片loader" tabindex="-1"><a class="header-anchor" href="#安装并配置图片loader" aria-hidden="true">#</a> 安装并配置图片loader</h3><ol><li>npm install url-loader file-loader -D</li><li>在index.js中导出图片</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import logo from &#39;./images/logo.png&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>在webpack.config.js的module-&gt;rules数组中，添加loader规则。其中的limit参数是告诉loader，如果大于limit则不转成base64图片，否则转换。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module:{
	rules:[
		{
			test:/.\\jpg|png|gif$/,
			//如果需要调用的loader可以不用数组来指定loader
			use:&#39;url-loader?limit=470&#39;,
		}
	]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="import导入语法" tabindex="-1"><a class="header-anchor" href="#import导入语法" aria-hidden="true">#</a> import导入语法</h3><p>形如import a from b，如果不需要接收可写成import b</p><h3 id="安装并配置babel-boader" tabindex="-1"><a class="header-anchor" href="#安装并配置babel-boader" aria-hidden="true">#</a> 安装并配置babel-boader</h3><ol><li>npm install babel-loader @babel/core @babel/plugin-proposal-decoraters</li><li>在webpack.config.js中的module-&gt;rules中添加规则，其中exclude属性用来排除不需要转换的包，第三方包不需要使用，需要排除掉。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module:{
	rules:[
		{
			test:/\\.js$/,
			use:&#39;babel-loader&#39;,
			exclude：/node_modules/
		}
	]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在项目根目录下添加配置文件babel.config.js，用来告诉loader如何解析转换语法</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.export = {
	//声明babel可用插件
	plugins：[[&#39;不用记忆，看官网的即可&#39;]]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包发布" tabindex="-1"><a class="header-anchor" href="#打包发布" aria-hidden="true">#</a> 打包发布</h3><ol><li>在package.json文件的script节点下，新增build命令。这里的--mode会覆盖webpack配置文件中的mode选项.</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
	&quot;dev&quot;: &quot;webpack serve&quot;,
	&quot;build&quot;: &quot;webpack --mode producation&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>将js文件都存放在js文件夹中，修改输出的文件名</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const path = require(&#39;path&#39;)//nodejs中的模块

moudle.exports {
	mode: &#39;development&#39;, //mode用来指定构建模式，可选development和production
	
	entry：path.join(__dirname,&#39;./src/index1.js&#39;),  //__dirname表示当前目录
	output：{
		path:path.join(__dirname,&#39;./dist&#39;),
		filename:&#39;./js/main.js&#39;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>将图片统一存放在image文件夹中，修改图片loader的规则的参数outputPath</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module:{
	rules:[
		{
			test:/.\\jpg|png|gif$/,
			//如果需要调用的loader可以不用数组来指定loader
			use:&#39;url-loader?limit=470&amp;outputPath=images&#39;,
		}
	]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clean-webpack-plugin插件的简介" tabindex="-1"><a class="header-anchor" href="#clean-webpack-plugin插件的简介" aria-hidden="true">#</a> clean-webpack-plugin插件的简介</h3><p>在每次打包发布dist文件前会自动删除旧的dist文件，安装与配置查文档</p><h3 id="source-map的简介" tabindex="-1"><a class="header-anchor" href="#source-map的简介" aria-hidden="true">#</a> Source Map的简介</h3><p>Source Map是一个信息文件，里面存储这位置信息，记录了压缩混淆后的代码后转换之前的映射信息。之所以需要这样，是因为打包运行后的代码不再是原有的代码，为了调试方便需要这个Source Map。</p><h3 id="source-map的使用" tabindex="-1"><a class="header-anchor" href="#source-map的使用" aria-hidden="true">#</a> Source Map的使用</h3><p>在webpack.config.js中添加选项devtool：&#39;eval-source-map&#39;,这样之后报错提示的出错位置和源代码的位置一致。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>moudle.exports {
    mode: &#39;development&#39;
    devtool：&#39;eval-source-map&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果改为==devtool：&#39;nosource-source-map&#39;==将只映射报错行号，但不会显示正常的未混淆的源代码。</p><p>因此，在开发时候使用eval-source-map，在生产环境下用nosource-source-map</p><h3 id="模块导入时的路径和" tabindex="-1"><a class="header-anchor" href="#模块导入时的路径和" aria-hidden="true">#</a> 模块导入时的路径和@</h3><p>@代表src目录，可理解为绝对路径，这样可以避免太多../../</p><p>import msg from &#39;../../msg&#39;</p><p>import msg from &#39;@/msg.js&#39;</p><p>但是使用前需要进行配置，在webpack.config.js中进行配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const path = require(&#39;path&#39;)//nodejs中的模块
moudle.exports {
    mode: &#39;development&#39;
    devtool：&#39;eval-source-map&#39;
    resolve：{
    	alias：{
    		&#39;@&#39;:path.join(__dirname,&#39;./src/&#39;)
    	}
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue简介" tabindex="-1"><a class="header-anchor" href="#vue简介" aria-hidden="true">#</a> VUE简介</h2><h3 id="什么是框架" tabindex="-1"><a class="header-anchor" href="#什么是框架" aria-hidden="true">#</a> 什么是框架</h3><ul><li>框架是一套现成的解决方案，程序员只能遵循框架中的规范来编写自己的业务功能</li><li>学习框架，就是学习框架规定的用法</li></ul><h3 id="vue的特性" tabindex="-1"><a class="header-anchor" href="#vue的特性" aria-hidden="true">#</a> VUE的特性</h3><ul><li><p>数据驱动视图</p><ul><li>页面所依赖的数据发生变化后，VUE会监听到这些变化并将页面重新渲染。</li><li>数据驱动视图是单向的数据绑定，即只有从数据到页面的绑定，而如果页面发生变化，数据是不会发生变化的。</li></ul></li><li><p>双向数据绑定</p><ul><li>form表单负责采集数据，ajax负责提交更新。</li><li>js数据的变化会被自动渲染上页面上。</li><li>页面上表单采集的数据会被vue自动获取并更新到js数据中。</li></ul></li></ul><h3 id="mvvm" tabindex="-1"><a class="header-anchor" href="#mvvm" aria-hidden="true">#</a> MVVM</h3><p>MVVM是指Model、ViewModel、View，它是实现<mark>数据驱动视图</mark>和<mark>双向数据绑定</mark>的核心。</p><ul><li>Model 当前页面渲染时所依赖的数据源</li><li>View 当前页面所渲染的DOM结构</li><li>ViewModel VUE的实例，是MVVM的核心</li></ul><h3 id="vue的基本使用" tabindex="-1"><a class="header-anchor" href="#vue的基本使用" aria-hidden="true">#</a> VUE的基本使用</h3><ol><li>导入vue.js的script脚本文件</li><li>创建View视图区域，即DOM结构</li><li>创建Model和ViewModel</li></ol><h3 id="vue简单例子" tabindex="-1"><a class="header-anchor" href="#vue简单例子" aria-hidden="true">#</a> Vue简单例子</h3><p>el用于指定vue的控制范围，如果使用标签选择器，vue只会处理第一个相应的标签。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;
        {{ uasername }}
      &lt;/div&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        var vm = new Vue({
            el: &#39;#app&#39;,
            data:{
                uasername: &#39;zs&#39;
            }
        })
    &lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue指令" tabindex="-1"><a class="header-anchor" href="#vue指令" aria-hidden="true">#</a> Vue指令</h2><p>指令是vue为开发者提供的模板语法，用于辅助开发者渲染页面的基本结构。按照不同的用途，指令可分为：</p><ol><li>内容渲染指令</li><li>属性绑定指令</li><li>事件绑定指令</li><li>双向绑定指令</li><li>条件渲染指令</li><li>列表渲染指令</li></ol><h3 id="内容渲染指令" tabindex="-1"><a class="header-anchor" href="#内容渲染指令" aria-hidden="true">#</a> 内容渲染指令</h3><p>用来辅助开发者渲染DOM元素的文本内容，常用的有3个：</p><ol><li>v-text：会覆盖原有的文本内容</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p v-text:&quot;uasername&quot;&gt;&lt;/p&gt;
&lt;p v-text:&quot;gender&quot;&gt;性别&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,101),x={start:"2"},f=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;性别：{{gender}}&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>v-html：可渲染带标签的文本内容为真正的页面结构</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div v-html:&quot;info&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="属性绑定指令" tabindex="-1"><a class="header-anchor" href="#属性绑定指令" aria-hidden="true">#</a> 属性绑定指令</h3><p><mark>v-bind</mark>：为DOM元素的属性动态绑定值，由于会经常使用到属性绑定指令,故规定可用==:缩写==。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;text&quot; v-bind:placeholder=&quot;tips&quot;&gt;

&lt;img v-bind:src=&quot;photo&quot; alt=&quot;&quot;&gt;

&lt;input type=&quot;text&quot; :placeholder=&quot;tips&quot;&gt;

&lt;img :src=&quot;photo&quot; alt=&quot;&quot;&gt;

//下面是script标签的部分代码
&lt;script&gt;
	const vm = new Vue({
	el:&#39;#app&#39;,
	data:{
		tips:&#39;请输入用户名&#39;，
		photo：&#39;https://............&#39;
	}
	})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用javascript表达式" tabindex="-1"><a class="header-anchor" href="#使用javascript表达式" aria-hidden="true">#</a> 使用javascript表达式</h3><p>在vue提供的模板渲染语法中，除了简单的值绑定外，也能使用javascript表达式。</p><p><mark>在下面代码中双引号括住的是js代码，单引号括住的是字符串，如果把单引号去掉就会把box当做是变量</mark></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{number+1}}

{{ok?&#39;yes&#39;:&#39;no&#39;}}

&lt;div&gt;{{tip}}反转的结果：{{tip.split(&#39;&#39;).reverse().join(&#39;&#39;)}}&lt;/div&gt;

&lt;div&gt;{{1+2}}&lt;/div&gt;

&lt;div :title=&quot;&#39;box&#39;+index&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件绑定指令" tabindex="-1"><a class="header-anchor" href="#事件绑定指令" aria-hidden="true">#</a> 事件绑定指令</h3><p>类似javafx中的动态变量，动态变量发生变化时，监听器会监听到变化，然后会转到事件处理并将监听到的事件作为参数传入。</p><p>而在vue中，动态变量是data中的变量，监听者是vue，事件处理函数是method中的函数，事件处理函数在相应的标签，主要是按钮标签中使用<mark>v-on</mark>进行声明，在methods中进行定义。</p><p>通过vm可以修改data，因为data就是vm的成员，但不推荐这么用，建议用this即可。</p><p>methods中的方法如果想要传参，那么在进行声明绑定事件时就要进行传参。</p><p>由于v-on使用频繁，可简写成==@==。</p><p>上面介绍的都是点击事件click，相应的也会有input事件、keyup事件。</p><p>methods中的事件处理函数默认被传递了一个事件对象==$event==，这个对象名是固定写法，事件对象中有个属性是target，是被绑定的对象。注意，在形参列表中不需要固定写$event，用简单的e即可，如果事件函数本身就没有参数，那么这里的e和$event可以省略掉。</p><p><mark>事件修饰符</mark>，加在事件绑定后面，如@click.prevent，改修饰符可阻止事件的执行。事件修饰符实际上就是js语法的简化，例如冒泡事件修饰符，本来的写法是在事件处理函数中进行事件的阻止e.stopPropagation()，而对应的事件修饰符如下。常用的事件修饰符如下，</p><pre><code>1. .prevent：阻止默认行为，如阻止a链接的跳转，阻止表单的提交
1. .stop：阻止事件冒泡
1. .capture：以捕获模式触发当前的事件处理函数
1. .once：绑定的事件只触发1次
1. .self：只有在$event.target是当前元素自身时触发事件处理函数
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;count={{count}}&lt;/p&gt;
&lt;button v-on:click=&quot;add($event)&quot;&gt;+1&lt;/button&gt;
&lt;button @click=&quot;sub(1)&quot;&gt;+1&lt;/button&gt;
&lt;a @click.prevent=&quot;&quot;&gt;&lt;/a&gt;

//下面是script标签的部分代码
&lt;script&gt;
	const vm = new Vue({
	el:&#39;#app&#39;,
	data:{
		count:0
	}，
	methods:{
		add:function(){
			vm.count+=1
		}
		//下面的add属性是上面的简写。
		add(e){
			this.count+=1
		}
	}
	})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按键修饰符" tabindex="-1"><a class="header-anchor" href="#按键修饰符" aria-hidden="true">#</a> 按键修饰符</h3><p>在监听键盘事件时，常常要进行按键键值的判断，于是就有了按键修饰符来简化对键值的判断。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;text&quot; @keyup.esc=&quot;clearInput() @keyup.enter=&quot;commit()&quot;&gt;&lt;/input&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="双向绑定指令" tabindex="-1"><a class="header-anchor" href="#双向绑定指令" aria-hidden="true">#</a> 双向绑定指令</h3><p>可用来辅助开发者在不操作DOM的情况下，快速获取表单数据。</p><p>可以将v-model与v-bind对比学习，</p><p>v-bind只能将Model渲染到View，</p><p>而v-model<mark>既能将Model渲染到View，也能将View同步到Model</mark>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;用户的名字是：{{username}}&lt;/p&gt;
&lt;input type=&quot;text&quot; v-model=&quot;username&quot;&gt;
&lt;input type=&quot;text&quot; v-bind:value=&quot;username&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>v-model可用于如下标签，只要有value属性即可使用</p><ul><li>input的radio、checkbox、text</li><li>textArea</li><li>select</li></ul><h3 id="v-model指令的修饰符" tabindex="-1"><a class="header-anchor" href="#v-model指令的修饰符" aria-hidden="true">#</a> v-model指令的修饰符</h3><ul><li>.number：自动将用户输入内容转换成数值类型。</li><li>.trim：自动将用户输入内容去掉首尾空白字符。</li><li>.lazy：懒更新，只在被绑定对象失去焦点时才进行数据的改变。</li></ul><h3 id="条件渲染指令" tabindex="-1"><a class="header-anchor" href="#条件渲染指令" aria-hidden="true">#</a> 条件渲染指令</h3><p>辅助开发者按需控制DOM节点的显示与隐藏，有两个v-if和v-show。</p><p>v-show通过style=&quot;display:none;&quot;方式隐藏DOM对象，性能更好。</p><p>v-if通过修改DOM树来隐藏DOM对象，需要动态修改DOM树，性能差些。</p><p>v-if可用于不需要频繁隐藏显示的情况。实际开发中，不需要考虑性能问题，直接使用v-if即可，因为短，且能和v-else-if，v-else配套使用。</p><p><mark>PS：vue指令的属性是js代码。</mark></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p v-if=&quot;flag&quot;&gt;这是被v-if控制&lt;/p&gt;
&lt;p v-show=&quot;flag&quot;&gt;这是被v-show控制&lt;/p&gt;
&lt;hr&gt;
&lt;div v-if=&quot;type===&#39;A&#39;&quot;&gt;优秀&lt;/div&gt;
&lt;div v-else-if=&quot;type===&#39;B&#39;&quot;&gt;良好&lt;/div&gt;
&lt;div v-else=&quot;type===&#39;C&#39;&quot;&gt;合格&lt;/div&gt;


//data数据
flag:true
type:&#39;A&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列表渲染指令" tabindex="-1"><a class="header-anchor" href="#列表渲染指令" aria-hidden="true">#</a> 列表渲染指令</h3><p>辅助开发者基于一个数组来循环渲染一个列表结构。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul&gt;
	&lt;li v-for= &quot;item in list&quot;&gt;姓名是：{{item.name}}&lt;/li&gt;
&lt;/ul&gt;

//data数据
list:[
	{id:1,name:&#39;张三&#39;},
	{id:2,name:&#39;王五&#39;}，
	{id:3,name:&#39;王五&#39;}，
	{id:4,name:&#39;王五&#39;}，
	{id:5,name:&#39;王五&#39;}，
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要使用索引，vue指令用v-for=&quot;(item,index) in list&quot;</p><p><mark>官方建议，只要使用了v-for指令就一定要绑定一个：key属性，并将id作为key的值，key的值只能是字符串或数字类型。</mark></p><p>key的值必须具有唯一性，如果重复会报错。</p><p>index不具备唯一性，所以不能作为key的值，因为index与列表相关，列表变长可能会导致index发生变化。index值当key没有任何意义。</p><h3 id="input标签与label标签混用时的一个问题" tabindex="-1"><a class="header-anchor" href="#input标签与label标签混用时的一个问题" aria-hidden="true">#</a> input标签与label标签混用时的一个问题</h3><p>关键在于要将input的id与label的for属性绑定起来，这样就能将这两一一联系。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;checkbox&quot; :id=&quot;&#39;cb&#39;+item.id&quot; v-model=&quot;item.status&quot;&gt;
&lt;label :for=&quot;&#39;cb&#39;+item.id&quot; v-if=&quot;item.status&quot;&gt;已启用&lt;/label&gt;
&lt;label :for=&quot;&#39;cb&#39;+item.id&quot; v-else&gt;已禁用&lt;/label&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h3><p>过滤器用于<mark>文本的格式化</mark>，可用于插值表达式和v-bind属性绑定。</p><p>过滤器应该被添加在Javascript表达式尾部，由管道符&quot;|&quot;进行调用。</p><p>过滤器需要在filters中进行定义，定义时要写形参，且必须有返回值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//&quot;|capitalize&quot;就是过滤器的用法，这里的作用是首字母大写，本质是个function函数
&lt;p&gt;{{message|capitalize}}&lt;/p&gt;

//vue部分
filters:{
	capitalize(val){
		const first = val.charAt(0).toUpperCase()
		const other = val.slice(1)
		return first+other
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="私有过滤器与全局过滤器" tabindex="-1"><a class="header-anchor" href="#私有过滤器与全局过滤器" aria-hidden="true">#</a> 私有过滤器与全局过滤器</h4><p>定义在vue实例内的filters都是私有过滤器</p><p>全局过滤器定义方式如下，使用Vue构造函数的filter方法，第一个参数是过滤器名字，第二个参数是过滤器的处理函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.filter(&#39;capitalize&#39;,function(str){
	const first = val.charAt(0).toUpperCase()
	const other = val.slice(1)
	return first+other
})
const vm = new Vue({...})
const vm2 = new Vue({...})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="连续使用过滤器" tabindex="-1"><a class="header-anchor" href="#连续使用过滤器" aria-hidden="true">#</a> 连续使用过滤器</h4><p>如下，首先将message作为参数传到过滤器capitalize，capitalize的处理结果再传给下一个过滤器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;{{message|capitalize|format}}&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="过滤器传参" tabindex="-1"><a class="header-anchor" href="#过滤器传参" aria-hidden="true">#</a> 过滤器传参</h4><p>过滤器的本质是js函数，姑也可以接收参数。</p><p>过滤器的第一个形参一定是管道符前的值。</p><h4 id="过滤器的兼容性" tabindex="-1"><a class="header-anchor" href="#过滤器的兼容性" aria-hidden="true">#</a> 过滤器的兼容性</h4><p>vue3中把过滤器砍掉了</p><h3 id="侦听器" tabindex="-1"><a class="header-anchor" href="#侦听器" aria-hidden="true">#</a> 侦听器</h3><p>可以理解为javafx中的监听者，用来监听data中数据的变化，发生变化后可执行相应的处理函数。</p><p>侦听器的处理函数要定义watch节点中，要侦听什么变量，就用什么样的函数名，即变量名与函数名一致。数据发生变化就会触发侦听器，进而执行处理函数。</p><p>侦听器的函数的形参固定有两个，一个是新值，一个是旧值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data:{
	username:&#39;&#39;
},
watch:{
	username(newVal,oldVal){
	
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="侦听器的快速触发" tabindex="-1"><a class="header-anchor" href="#侦听器的快速触发" aria-hidden="true">#</a> 侦听器的快速触发</h4><ol><li><p>方法格式的侦听器：无法在刚进入页面的时候触发侦听。</p></li><li><p>对象格式的侦听器：可以在刚进入页面是触发侦听器。</p><p>将immediate属性设置为true即可使得在刚进入页面是触发侦听器。</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch:{
	username:{
		handler:function(){//&quot;:function可省略&quot;
		
		}
		handler(newVal,oldVal){//&quot;:function&quot;已省略
		
		},
		immediate:true
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>为了编写方便，优先考虑方法格式的侦听器。如果有需求才使用对象格式侦听器</mark></p><h4 id="深度侦听" tabindex="-1"><a class="header-anchor" href="#深度侦听" aria-hidden="true">#</a> 深度侦听</h4><p>如果侦听的对象是对象类型，而不是数值或字符串类型，那么对象中的属性发生变化时并不会触发侦听器。解决方式是使用对象格式的侦听器，使用<mark>deep</mark>进行对象的深度侦听。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch:{
	info:{
		handler(newVal){
		
		},
		deep:true
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对象子属性侦听" tabindex="-1"><a class="header-anchor" href="#对象子属性侦听" aria-hidden="true">#</a> 对象子属性侦听</h4><p>但是原始的深度侦听有缺陷，如果不是想侦听的属性发生变化，会产生多余的处理。于是就有了子属性的侦听。给对象的子属性加上<mark>单引号</mark>即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;info.username&#39;(newVal){

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> 计算属性</h3><p>计算属性本质就是方法，定义在computed下，要定义成方法格式。</p><p>计算属性依赖data中的属性，随data中的属性变化，只要是出现在计算属性中的当前组件的属性的值发生了变化，那么计算属性就会被执行一次。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const vm = new Vue({
	el:&#39;#app&#39;,
	data:{
		r:0,
		b:0,
		b:0
	},
	computed:{
		rgb(){
			return \`rgb(\${this.r},\${this.g},\${this.b})\`
		}
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h2><p>Axios是个专注于网络请求的库！</p><p>基本语法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    const result = axios({
        method:&#39;请求类型&#39;,
        url:&#39;&#39;
    })
    result.then(function(res){
    	//res.data才是真正的返回数据
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>axios在请求到数据之后，在真正的数据外套了一层壳。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	config:{},
	data:{真正的返回数据},
	headers:{},
	request:{},
	status:xxx,
	statusText:&#39;&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面的基本用法再简化，如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    axios({
        method:&#39;请求类型&#39;,
        url:&#39;&#39;,
        params:{get传参用},
        data:{post传参用}
    }).then(function(res){
    	//res.data才是真正的返回数据
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果调用某个方法的返回值是个Promise实例，则前面可以添加await，加了之后的返回结果是真实的结果。</p><p>await只能用在被async“修饰”的方法中。</p><p>于是，axios又可被简写成</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
	document.querySelector(&#39;#btn&#39;).addEventListener(&#39;click&#39;,async function(){
		const res = await axios({
    		method:&#39;请求类型&#39;,
    		url:&#39;&#39;,
    		params:{get传参用},
    		data:{post传参用}
    	})
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h4><p>由于只关心返回结果中的data，于是可用解构赋值，只接收data部分。用一对花括号{}括住</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
	document.querySelector(&#39;#btn&#39;).addEventListener(&#39;click&#39;,async function(){
		const { data } = await axios({
    		method:&#39;请求类型&#39;,
    		url:&#39;&#39;,
    		params:{get传参用},
    		data:{post传参用}
    	})
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解构赋值的时候可使用&quot;:&quot;进行重命名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { data:res } = await axios({...})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="与-对比" tabindex="-1"><a class="header-anchor" href="#与-对比" aria-hidden="true">#</a> 与$对比</h4><p>$.ajax() $.get() $.post()</p><p>axios() axios.get() axios.post() axios.delete() axios.put()</p><h4 id="axios直接发起get或post请求" tabindex="-1"><a class="header-anchor" href="#axios直接发起get或post请求" aria-hidden="true">#</a> axios直接发起get或post请求</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
	document.querySelector(&#39;#btn&#39;).addEventListener(&#39;click&#39;,async function(){
		const {data:res} = await axios.get(&#39;url&#39;,{params:{/*get请求参数*/}})
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
	document.querySelector(&#39;#btn&#39;).addEventListener(&#39;click&#39;,async function(){
		const {data:res} = await axios.get(&#39;url&#39;,{/*post请求体*/})
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="把axios挂载到vue原型上" tabindex="-1"><a class="header-anchor" href="#把axios挂载到vue原型上" aria-hidden="true">#</a> 把axios挂载到vue原型上</h3><p>在main.js中将axios挂载到vue原型上，这样vue就不需要再导入了。其中$http是自定义的名字。后续发起请求的时候不用再导入axios，直接调用vue实例自己的被挂载上来的自定义属性即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.prototype.$http = axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="挂载到原型的缺陷" tabindex="-1"><a class="header-anchor" href="#挂载到原型的缺陷" aria-hidden="true">#</a> 挂载到原型的缺陷</h4><p>无法实现API接口的复用，于是需要进行axios的封装，所以不建议这样使用</p><h3 id="配置请求根路径" tabindex="-1"><a class="header-anchor" href="#配置请求根路径" aria-hidden="true">#</a> 配置请求根路径</h3><p>在main.js中配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>axios.defaults.baseURL = &#39;http://www.xxx.com:3336&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="封装axios请求" tabindex="-1"><a class="header-anchor" href="#封装axios请求" aria-hidden="true">#</a> 封装axios请求</h3><ol><li>在utils中创建request.js，用axios创建小axios，每个小axios对应一个bashURL，从而提高复用性</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import axios from &#39;axios&#39;
const request = axios.create({
	baseURL:&#39;http://www.xxx.com&#39;
})
export default request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>建立文件夹request，在里面建立http.jshttp.js封装函数，并导出</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import request from &#39;request.js&#39; 
export const getBookAPI = (param1,param2)=&gt;{
	return request.get()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>vue组件接收函数</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {getBookAPI} from &#39;xxx&#39;

async initArticleList(){
	const {data:res} = await getBookAPI(x,x)
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-cli" tabindex="-1"><a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a> Vue-cli</h2><p>vue-cli是vue开发的标准工具，简化了程序员基于webpack创建工程化的vue项目的过程。</p><p>不需要再纠结于webpack的配置问题。</p><p>vue-cli是npm上的全局包，安装命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g npm//先更新npm
npm install -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建vue项目命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue create 项目名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>手动创建项目的几个选项：</p><ul><li>Babel：loader</li><li>TypeScript：微软的</li><li>Progressive Web App (PWA) Support</li><li>Router</li><li>Vuex</li><li>CSS Pre-processors：less-loader</li><li>Linter/Formatter：规范团队代码的工具</li><li>Unit Testing：测试用</li><li>E2E Testing：测试用</li></ul><p><mark>npm run serve就相当于npm run dev</mark>，因为package.json中script脚本的名称不再是dev而是serve。</p><p>npm run build是开发结束后上线时才使用的</p><h3 id="vue项目结构" tabindex="-1"><a class="header-anchor" href="#vue项目结构" aria-hidden="true">#</a> vue项目结构</h3><ul><li>./src/assets：存放项目中用到的静态资源文件，如css样式表、图片等</li><li>./src/components：程序员封装的可复用的模块的存放目录</li><li>./src/main.js：项目的入口文件</li><li>./src/App.vue：项目的根组件</li><li>./public/index.html：里面有些奇怪的代码，带不能注释，不能动，因为在打包发布时会使用到。</li></ul><h3 id="vue项目的运行流程" tabindex="-1"><a class="header-anchor" href="#vue项目的运行流程" aria-hidden="true">#</a> vue项目的运行流程</h3><p>通过main.js把App.vue渲染到index.html中的指定区域中。</p><h3 id="main-js的结构" tabindex="-1"><a class="header-anchor" href="#main-js的结构" aria-hidden="true">#</a> main.js的结构</h3><p>Vue实例的$mount(&#39;#app&#39;)方法和在属性中的el:&#39;#app&#39;相同作用，二选一。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//导入vue库
import Vue from &#39;vue&#39;
//导入App.vue根组件，将来要把App.vue中的模板结构渲染到HTML页面中
import App from &#39;./App.vue&#39;

Vue.config.productionTip = false

new Vue({
  //render函数指定的组件就是根组件
  render: h =&gt; h(App),
}).$mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue组件" tabindex="-1"><a class="header-anchor" href="#vue组件" aria-hidden="true">#</a> Vue组件</h2><p>vue是支持组件化的框架。</p><p>组件的后缀名是.vue，之前接触的App.vue文件的本质就是一个vue组件。</p><p>每个.vue组件都由3部分组成</p><ul><li><p>template：组件的结构</p><p>vue组件中只允许有一个根元素，即template标签下只允许有一个标签，而不允许有同级的其他标签</p></li><li><p>script：组件的js行为、数据等</p><p>script标签中有个固定写法，默认导出。</p><p>.vue组件中的data不能像之前一样指定对象，组件中的data必须是个函数。</p><p>于是，数据定义到data函数的return中即可。</p><p><mark>但是</mark>，只是data是这样，但methods的用法依旧是使用对象的格式。</p><p>此时，这里的this是组件的实例，而不再是vue实例。</p><p>最后一定要进行默认导出。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
	
	export default{
		data(){
			return {
				username:&#39;admin&#39;
			}
		},
		methods:{
			函数名(){}
		},
		watch:{},
		computed:{},
		filters:{}
	}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>style：组件的样式</p><p>如果想启用less语法，style标签要添加属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style lang=&#39;css&#39;&gt;&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="vue组件的导入" tabindex="-1"><a class="header-anchor" href="#vue组件的导入" aria-hidden="true">#</a> Vue组件的导入</h3><p>组件在被封装好时候是没有什么关系的，当被使用的时候，根据彼此的嵌套关系，形成了<mark>父子关系</mark>或<mark>兄弟关系</mark></p><p>使用组件的三个步骤：</p><ol><li>在<code>&lt;script&gt;</code>标签下，使用import语法导入需要使用到的组件，如在根组件App.vue中导入Left.vue</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Left from &#39;@/components/Left.vue&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ vue-cli会自动配置好webpack，将@指向src目录。</p><ol start="2"><li>在<code>&lt;script&gt;</code>标签下，使用components节点注册组件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default{
	components:{
		//这里的全写形式为：&#39;Left&#39;:Left
		//当键值一致时候才可以简写
		Left
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在<code>&lt;template&gt;</code>标签下，使用标签的形式来使用Left组件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Left&gt;&lt;Left&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在vscode中使用插件path-autocomplete配置-的路径自动提示补全" tabindex="-1"><a class="header-anchor" href="#在vscode中使用插件path-autocomplete配置-的路径自动提示补全" aria-hidden="true">#</a> 在VScode中使用插件Path Autocomplete配置&quot;@&quot;的路径自动提示补全</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//导入文件时是否携带文件的扩展名
    &quot;path-autocomplete.extensionOnImport&quot;: true,
    //配置@的路径提示
    &quot;path-autocomplete.pathMappings&quot;: {
        &quot;@&quot;:&quot;\${folder}/src&quot;
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册全局组件" tabindex="-1"><a class="header-anchor" href="#注册全局组件" aria-hidden="true">#</a> 注册全局组件</h3><p>全局注册一次，任何地方想使用就不用再注册了，使用频繁的组件会比较适合这种全局注册。</p><p>全局组件的注册在main.js，通过Vue.component()方法可注册全局组件，第一个参数是组件的“注册名称”，第二个参数是组件名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Count from &#39;@/components/Count.vue&#39;

Vue.component(&#39;MyCount&#39;,Count)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数只有一行的情况" tabindex="-1"><a class="header-anchor" href="#函数只有一行的情况" aria-hidden="true">#</a> 函数只有一行的情况</h3><p>可以简写到函数绑定的地方</p><h2 id="props自定义属性" tabindex="-1"><a class="header-anchor" href="#props自定义属性" aria-hidden="true">#</a> props自定义属性</h2><p>props是组件的自定义属性，在封装通用组件的时候，合理地使用props可极大地提高组件的复用性。</p><p>props中的数据可以直接在模板结构<code>&lt;template&gt;</code>中直接被使用，但是只建议直接使用，但不建议修改，即应该认为props属性都是<mark>只读</mark>的。</p><p>于是，可以使用props初始值，data节点下的数据也使用props的值进行初始化。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Count :init=&quot;9&quot;&gt;&lt;/Count&gt;

export default{
	props:[&#39;init&#39;,&#39;自定义属性A&#39;,&#39;自定义属性B&#39;...]
	data(){
		return{
			count:this.init
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义属性的值的类型" tabindex="-1"><a class="header-anchor" href="#自定义属性的值的类型" aria-hidden="true">#</a> 自定义属性的值的类型</h3><p>一般情况时，属性里的内容是字符串</p><p><code>&lt;Count init=&quot;9&quot;&gt;&lt;Count&gt;</code></p><p>进行属性绑定后，双引号中的内容是js表达式，此时的数字9是数字而非字符串</p><p><code>&lt;Count :init=&quot;9&quot;&gt;&lt;Count&gt;</code></p><h3 id="props的default默认值" tabindex="-1"><a class="header-anchor" href="#props的default默认值" aria-hidden="true">#</a> props的default默认值</h3><p>如果想要定义默认值，此时的props不能再用数组的形式来进行定义，而是要改为对象的形式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default{
	props:{
		init:{
			default:0
		},
		自定义属性A:{/*配置选项*/}
	},
	data(){
		return{
		...
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props自定义属性的type值类型" tabindex="-1"><a class="header-anchor" href="#props自定义属性的type值类型" aria-hidden="true">#</a> props自定义属性的type值类型</h3><p>在上面的对象形式的props自定义属性中，添加type属性，可以用于类型校验。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props:{
		init:{
			default:0,
			type:Number
			
		}
	},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props自定义属性的require属性" tabindex="-1"><a class="header-anchor" href="#props自定义属性的require属性" aria-hidden="true">#</a> props自定义属性的require属性</h3><p>用于限定一定要填初始值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props:{
		init:{
			default:0,
			type:Number
			required:true
		}
	},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件样式冲突问题" tabindex="-1"><a class="header-anchor" href="#组件样式冲突问题" aria-hidden="true">#</a> 组件样式冲突问题</h2><h3 id="组件全局样式问题" tabindex="-1"><a class="header-anchor" href="#组件全局样式问题" aria-hidden="true">#</a> 组件全局样式问题</h3><p>组件中的<code>&lt;style&gt;</code>样式是全局的，因此会产生样式的冲突。</p><p>解决方法1：为页面结果都加上属性&quot;data-v-xxx&quot;，然后在写样式的时候，使用属性选择器，这样就不会对全局的vue组件造成影响了。</p><p>解决方法2：依旧方法1的原理就有了方法2，在<code>&lt;style&gt;</code>标签中加上属性&quot;scoped&quot;，即</p><p><code>&lt;style lang=&quot;less&quot; scoped&gt;&lt;/style&gt;</code></p><h3 id="使用deep修改子组件的样式" tabindex="-1"><a class="header-anchor" href="#使用deep修改子组件的样式" aria-hidden="true">#</a> 使用deep修改子组件的样式</h3><p>使用&quot;/deep/&quot;可修改子组件的样式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style lang=&quot;less&quot; scoped&gt;
	/deep/ h5{
	..........
	}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要是在使用第三方组件库且有修改样式的需求的时候，才会常用&quot;/deep/&quot;</p><p><mark>原理</mark>：&quot;/deep/&quot;本质就是属性，且是父组件的属性，通过属性选择器先选择到父组件，嵌套使用标签选择器，这样就可以对子组件的样式进行修改了。</p><h3 id="vue组件实例对象" tabindex="-1"><a class="header-anchor" href="#vue组件实例对象" aria-hidden="true">#</a> vue组件实例对象</h3><p>vue组件是通过vue-template-compiler渲染到网页上的，本身无法被浏览器解析。</p><p>当使用到vue组件的标签的时候，就相当于创建了一个组件的实例。</p><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><p>创建---运行----销毁</p><h3 id="生命周期函数" tabindex="-1"><a class="header-anchor" href="#生命周期函数" aria-hidden="true">#</a> 生命周期函数</h3><p>new Vue()-(初始化事件和生命周期函数)-beforeCreate-(初始化props、data、methods)-created</p><p>beforeMount-mounted</p><p>beforeUpdate-updated</p><p>beforeDestroy-destroyed</p><h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h3><figure><img src="`+s+'" alt="截图_20230225181437" tabindex="0" loading="lazy"><figcaption>截图_20230225181437</figcaption></figure><h4 id="beforecreate" tabindex="-1"><a class="header-anchor" href="#beforecreate" aria-hidden="true">#</a> beforeCreate</h4><p>在这阶段还无法使用props、data、methods，一般没什么用</p><h4 id="created" tabindex="-1"><a class="header-anchor" href="#created" aria-hidden="true">#</a> created</h4><p><mark>非常重要的一个</mark>，在这阶段已经可以使用methods方法了，常用来进行ajax请求来取数据，并将取到的数据转存到data中。但此时的DOM元素还没有被渲染上页面，所以无法对DOM树进行操作。</p><h3 id="编译页面结构" tabindex="-1"><a class="header-anchor" href="#编译页面结构" aria-hidden="true">#</a> 编译页面结构</h3><figure><img src="'+r+'" alt="截图_20230225183226" tabindex="0" loading="lazy"><figcaption>截图_20230225183226</figcaption></figure><p>有vue-template-compiler基于vue指令和模板在内存中编译html结构，但还没有构建DOM结构。</p><h3 id="渲染-由html结构到dom树-与更新" tabindex="-1"><a class="header-anchor" href="#渲染-由html结构到dom树-与更新" aria-hidden="true">#</a> 渲染(由HTML结构到DOM树)与更新</h3><figure><img src="'+u+'" alt="截图_20230225183921" tabindex="0" loading="lazy"><figcaption>截图_20230225183921</figcaption></figure><h4 id="beforemounte" tabindex="-1"><a class="header-anchor" href="#beforemounte" aria-hidden="true">#</a> beforeMounte</h4><p>和beforeCreate一样较少使用，因为这个时候还无法操作DOM树，html页面结构还没有被渲染到浏览器中。</p><h4 id="mounted" tabindex="-1"><a class="header-anchor" href="#mounted" aria-hidden="true">#</a> mounted</h4><p><mark>常使用</mark>，因为这个时候已经可以对DOM结构进行操作了</p><h4 id="beforeupdate" tabindex="-1"><a class="header-anchor" href="#beforeupdate" aria-hidden="true">#</a> beforeUpdate</h4><p>此时的DOM结构依旧是旧的，还没发生变化，而<mark>data中的数据</mark>已经是<mark>最新</mark>的值了。</p><h4 id="updated" tabindex="-1"><a class="header-anchor" href="#updated" aria-hidden="true">#</a> updated</h4><p><mark>常用</mark>，此时的DOM结构与data中的数据都是新的了。</p><h3 id="销毁" tabindex="-1"><a class="header-anchor" href="#销毁" aria-hidden="true">#</a> 销毁</h3><p><mark>极少使用</mark>，通过v-show、v-if来摧毁</p><figure><img src="'+v+`" alt="截图_20230225184536" tabindex="0" loading="lazy"><figcaption>截图_20230225184536</figcaption></figure><h2 id="组件间传值" tabindex="-1"><a class="header-anchor" href="#组件间传值" aria-hidden="true">#</a> 组件间传值</h2><h3 id="父向子传值" tabindex="-1"><a class="header-anchor" href="#父向子传值" aria-hidden="true">#</a> 父向子传值</h3><p>父可以用子标签的方式使用子组件，于是可以采用自定义属性的方式进行传值。父向子传简单类型的值的方式是复制一份再传过去，如果是像对象那样的复杂类型，则是传过去引用。</p><h3 id="子向父传值" tabindex="-1"><a class="header-anchor" href="#子向父传值" aria-hidden="true">#</a> 子向父传值</h3><p>子组件向父组件传值需要使用<mark>自定义事件</mark>，也可以使用ref由父组件直接控制，下面介绍的是<mark>自定义事件</mark>的方法。</p><p>子组件触发按钮，从而执行add()方法，add()方法会emit出numchange信号，由子组件的监听器接收到后，触发numchange事件，进而执行在父组件中的getNewCount方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//子组件
&lt;buttom @click=&quot;add&quot;&gt;按钮&lt;button&gt;

methods:{
	add(){
		this.count +=1
		this.$emit(&#39;numchange&#39;,this.count)
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//父组件
&lt;Son @numchange=&quot;getNewCount&quot;&gt;&lt;/Son&gt;

methods:{
	getNewCount(val){
		this.count = val
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="兄弟组件间的传值" tabindex="-1"><a class="header-anchor" href="#兄弟组件间的传值" aria-hidden="true">#</a> 兄弟组件间的传值</h3><p>在vue2中，兄弟组件间数据共享的方案是EventBus。</p><p>建立一个中间vue实例用来发射和接收，在发送方调用这个vue实例发射事件，在接收方接收事件并进行处理。</p><p>EventBus相当于为两兄弟牵线搭桥。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//发送方
import bus from &#39;./eventBus.js&#39;
export default{
	data(){
		return{
			msg:&#39;hello vue.js&#39;
		}
	},
	methods:{
		sendMsg(){
			bug.$emit(&#39;share&#39;,this.msg)
		}
	}	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//EventBus
import Vue from &#39;vue&#39;
export default new Vue()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//接收方
import bus from &#39;./eventBus.js&#39;
export default{
	data(){
		return{
			msgFromSend:&#39;&#39;
		}
	},
	created(){
		bus.$on(&#39;share&#39;,val=&gt;{
			this.msgFromSend = val
		})
	}	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ref引用" tabindex="-1"><a class="header-anchor" href="#ref引用" aria-hidden="true">#</a> ref引用</h2><p>在vue项目中不建议安装和使用JQuery，因为VUE中程序员不需要操作DOM，只需要将数据维护好即可，即数据驱动视图（MVVM）。于是，在VUE中，想要获取到DOM元素的数据，就需要用到<mark>ref引用</mark>。</p><h3 id="ref引用dom元素" tabindex="-1"><a class="header-anchor" href="#ref引用dom元素" aria-hidden="true">#</a> ref引用DOM元素</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;
	&lt;h2 ref=&quot;myH2&quot;&gt;233&lt;/h2&gt;
&lt;/div&gt;

methods:{
	setMyH2(){
		this.$refs.myH2.style.color = &#39;red&#39;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref引用组件实例" tabindex="-1"><a class="header-anchor" href="#ref引用组件实例" aria-hidden="true">#</a> ref引用组件实例</h3><p>这种方法相当于实现了父组件去子组件中取值，而且还能进行操控。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;
	&lt;Son ref=&quot;mySon&quot;&gt;&lt;/Son&gt;
&lt;/div&gt;

//子组件中有count这个变量
methods:{
	setMySon(){
		this.$refs.mySon.count = 0
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过方法使某dom元素获取焦点" tabindex="-1"><a class="header-anchor" href="#通过方法使某dom元素获取焦点" aria-hidden="true">#</a> 通过方法使某DOM元素获取焦点</h3><p>由于此时DOM元素还没有被渲染出来，所以下面代码执行时候会报错。如果能延迟下面语句的执行，直到updated完成再执行就能完成这条函数。</p><p>使用$nextTick(cb)函数就可以将cb回调函数延迟到DOM元素更新完毕后再执行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//下面是错误的
this.$refs.DOM.focus()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$nextTick(()=&gt;{
	this.$refs.DOM.focus()
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>错误的解决方法，将focus()写到updated函数中，每次更新都会触发updated函数，如果渲染完毕后DOM元素消失，那么focus()函数就会出现undefined错误。</p><h2 id="数组的方法" tabindex="-1"><a class="header-anchor" href="#数组的方法" aria-hidden="true">#</a> 数组的方法</h2><h3 id="foreach-循环问题" tabindex="-1"><a class="header-anchor" href="#foreach-循环问题" aria-hidden="true">#</a> forEach()循环问题</h3><p>js中的forEach一旦开始，就无法结束直到遍历结束。</p><h3 id="some-解决foreach-的循环问题" tabindex="-1"><a class="header-anchor" href="#some-解决foreach-的循环问题" aria-hidden="true">#</a> some()解决forEach()的循环问题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
	array.some((item,index)=&gt;{
		if(item === &#39;大宝&#39;)
			return true
	})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="every-item-item-state-方法" tabindex="-1"><a class="header-anchor" href="#every-item-item-state-方法" aria-hidden="true">#</a> every(item=&gt;item.state)方法</h3><p>every()方法会遍历array，当碰到item.state为false就会返回false，可用来判断是否被全选。</p><p>item=&gt;item.state就是的简写，理解为判断条件，全写如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const result = array.every(item=&gt;item.state)

const result = array.every(item=&gt;{
	return item.state === true
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filter-item-item-state-方法" tabindex="-1"><a class="header-anchor" href="#filter-item-item-state-方法" aria-hidden="true">#</a> filter(item=&gt;item.state)方法</h3><p>根据item=&gt;item.state的判断结果，如果是false就过滤掉数组中的这些item。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>array.filter(item=&gt;item.state)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="reduce-0-方法" tabindex="-1"><a class="header-anchor" href="#reduce-0-方法" aria-hidden="true">#</a> reduce((,)=&gt;{},0)方法</h3><p>reduce((累加结果，当前循环项)=&gt;{},累加结果的初始值)</p><p>reduce()就是累加器，每循环一次就执行一次箭头函数，amt是累加的结果也是最后的返回结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>array.reduce((amt,item)=&gt;{
	return amt+=item.price*item*count
},0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>reduce的简写如下，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>array.reduce((amt,item)=&gt;amt+=item.price*item*count,0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="截图_20230319165016" tabindex="0" loading="lazy"><figcaption>截图_20230319165016</figcaption></figure><h2 id="购物车案例-待补" tabindex="-1"><a class="header-anchor" href="#购物车案例-待补" aria-hidden="true">#</a> 购物车案例（待补）</h2><p>###略</p><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><p>插槽是vue为组件的封装者提供的能力。允许开发者在封装组件时，把不确定的、希望用户来指定的部分定义为插槽。</p><p>占位符是<code>&lt;slot&gt;</code>标签。</p><figure><img src="'+o+`" alt="截图_20230311111820" tabindex="0" loading="lazy"><figcaption>截图_20230311111820</figcaption></figure><h3 id="slot标签" tabindex="-1"><a class="header-anchor" href="#slot标签" aria-hidden="true">#</a> slot标签</h3><p>vue官方规定每个slot插槽都要有一个name名称，如果省略了name属性，那么插槽就有个默认的名称 default 。</p><p>默认的情况下，使用组件时，提供的内容都会被插到名为 default 的插槽中。具有名字的插槽叫具名插槽。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;slot name=&quot;default&quot;&gt;
	&lt;p&gt;内容&lt;/p&gt;
&lt;/slot&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插入到指定插槽" tabindex="-1"><a class="header-anchor" href="#插入到指定插槽" aria-hidden="true">#</a> 插入到指定插槽</h3><p>如果想要将提供的内容插到指定的插槽中，那么提供的内容首先要被<code>&lt;template&gt;</code>标签包含住，然后在<code>&lt;template&gt;</code>标签上使用<mark>v-slot</mark>来指定插入的插槽名。<mark>v-slot:<mark>的简写是</mark>#</mark></p><p>这样，<code>&lt;template&gt;</code>标签中的内容就会被插入到插槽中。<code>&lt;template&gt;</code>是个虚拟的标签，只起到包裹的作用，不会被渲染成任何实际性的html元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;SideBar&gt;
	&lt;template v-slot:default&gt;
		&lt;p&gt;&lt;/p&gt;
	&lt;template&gt;
&lt;/SideBar&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插槽后备内容-默认内容" tabindex="-1"><a class="header-anchor" href="#插槽后备内容-默认内容" aria-hidden="true">#</a> 插槽后备内容(默认内容)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;slot name=&quot;default&quot;&gt;
	&lt;p&gt;内容&lt;/p&gt;
&lt;/slot&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽" aria-hidden="true">#</a> 作用域插槽</h3><p>在定义插槽时候，为插槽添加自定义属性。在使用插槽的时候就可以访问到插槽定义的属性。相当于子向父传值。可以使用=或slot-scope来接收，但slot-scope基本用不到了，webstorm上面提示过时。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;SideBar&gt;
	&lt;template v-slot:default slot-scope:&quot;obj&quot;&gt;
		&lt;p&gt;{{obj}}&lt;/p&gt;
	&lt;template&gt;
&lt;/SideBar&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-来接收对象作用域插槽提供的属性" tabindex="-1"><a class="header-anchor" href="#使用-来接收对象作用域插槽提供的属性" aria-hidden="true">#</a> 使用=来接收对象作用域插槽提供的属性</h3><p>在使用插槽的时候，在指定插槽的同时加=来接收插槽的属性。接收的名称一般是scope，是个形参。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;SideBar&gt;
	&lt;template #default=&quot;obj&quot;&gt;
		&lt;p&gt;{{obj}}&lt;/p&gt;
	&lt;template&gt;
&lt;/SideBar&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象的解构赋值" tabindex="-1"><a class="header-anchor" href="#对象的解构赋值" aria-hidden="true">#</a> 对象的解构赋值</h3><p>插槽提供了多个属性，那么可以使用解构来获取整个插槽属性的对象中的指定属性。如下，插槽提供的是个对象，这个对象中包含了msg和user两个属性，使用解构赋值即可提取其中的某一个属性。如果在解构赋值后加:名字，则可以为解构出来的属性改名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//定义插槽处
&lt;slot name=&quot;default&quot; msg=&quot;hello&quot; user=&quot;liming&quot;&gt;
	&lt;p&gt;内容&lt;/p&gt;
&lt;/slot&gt;

//使用插槽处
&lt;SideBar&gt;
	&lt;template #default=&quot;{msg,usr:userName}&quot;&gt;
		&lt;p&gt;{{msg}}&lt;/p&gt;
		&lt;p&gt;{{userName}}&lt;/p&gt;
	&lt;template&gt;
&lt;/SideBar&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><p>路由就是指对应关系，指的是==哈希地址(url地址)<mark>和</mark>页面(组件)==之间的关系。</p><p>#，锚链接，不会导致页面的刷新，只会导致页面的变化，也会影响浏览历史记录。哈希地址其实也就是锚链接。</p><p>从#开始往后的地址都是哈希地址，也是锚链接。</p><h3 id="前端路由的工作方式" tabindex="-1"><a class="header-anchor" href="#前端路由的工作方式" aria-hidden="true">#</a> 前端路由的工作方式</h3><ol><li>用户点击了前端上的路由链接</li><li>导致了URL地址栏中hash值发生了变化</li><li>前端路由监听到了Hash地址的变化</li><li>前端路由会把当前Hash地址对应的组件渲染到浏览器中</li></ol><figure><img src="`+m+`" alt="截图_20230301114550" tabindex="0" loading="lazy"><figcaption>截图_20230301114550</figcaption></figure><h3 id="前端路由原理" tabindex="-1"><a class="header-anchor" href="#前端路由原理" aria-hidden="true">#</a> 前端路由原理</h3><p>使用window.onhashchange()来监听哈希地址的变化，但不够完善，自己封装路由是非常困难的，别自己写路由，一般用三方库实现路由。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>created(){
	window.onhashchange() = ()=&gt;{
		console.lgo(&#39;监听到hash地址发生了变化&#39;,location.hash)
		if(location.hash === &#39;#Home&#39;)
			this.comName = &#39;Home&#39;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hash地址大小写问题" tabindex="-1"><a class="header-anchor" href="#hash地址大小写问题" aria-hidden="true">#</a> hash地址大小写问题</h3><p>hash地址都是小写</p><h2 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> Vue-router</h2><p>vue-router是vue.js官方给出的路由解决方案</p><h3 id="vue-router的安装与配置" tabindex="-1"><a class="header-anchor" href="#vue-router的安装与配置" aria-hidden="true">#</a> vue-router的安装与配置</h3><ol><li>npm install vue-router -S，安装vue-router。</li><li>在src下新建router/index.js，这个就是当前项目的路由模块。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//1. 导入 Vue 和 VueRouter 包
import Vue from &#39;vue&#39;
import VueRouter from &#39;vue-router&#39;

//2. 调用 Vue 构造函数的 use() 函数，把VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

//3. 创建路由的实例对象
const router = new VueRouter()

//4. 向外导出VueRouter实例
export default router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在main.js中导入路由模块，目的是拿到路由实例。在模块导入的时候，如果给定的是文件夹，则<mark>默认导入</mark>该文件夹下命名为 index.js 的文件。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import router from &#39;@/router/index.js&#39;

new Vue({
	render: h=&gt;h(App),
	router: router
}).$mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由的基本用法" tabindex="-1"><a class="header-anchor" href="#路由的基本用法" aria-hidden="true">#</a> 路由的基本用法</h3><ol><li>用<code>&lt;a&gt;</code>标签建立哈希地址</li><li>用<code>&lt;router-view&gt;</code>标签建立占位符，组件会在这里进行展示</li><li>配置路由模块的哈希地址与组件的对应关系，这里的对应关系可称为<mark>路由规则</mark></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import VueRouter from &#39;vue-router&#39;

//1. 导入组件
import Home form &#39;@/componet/Home.vue&#39;
import Movie form &#39;@/componet/Movie.vue&#39;
import About form &#39;@/componet/About.vue&#39;

Vue.use(VueRouter)

//2. 配置路由关系
const router = new VueRouter({
	routes:[
		{path:&#39;/home&#39;,component:Home},
		{path:&#39;/movie&#39;,component:Movie},
		{path:&#39;/about&#39;,component:About}
	]
})

export default router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>将<code>&lt;a&gt;</code>标签改为<code>&lt;router-link&gt;</code>，使用<code>&lt;router-link&gt;</code>是官方推荐，本质也是<code>&lt;a&gt;</code>，其中可以把#去掉，因为在内部会为哈希链接加会#，只是单纯稍微简化程序员的操作。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//&lt;a href=&quot;#/home&quot;&gt;&lt;/a&gt;
&lt;router-link to=&quot;/home&quot;&gt;&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redirect重定向" tabindex="-1"><a class="header-anchor" href="#redirect重定向" aria-hidden="true">#</a> redirect重定向</h3><p>用户在访问地址A的时候，可以强制跳转到地址B，这就是重定向。</p><p>App主组件对应的hash地址是&quot;/&quot;，此时是什么内容都没用需要进行重定向到主页，即显示Home组件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 配置&quot;#/&quot;的路由规则
const router = new VueRouter({
	routes:[
	
		{path:&#39;/&#39;,redirect:Home}
		
		{path:&#39;/home&#39;,component:Home},
		{path:&#39;/movie&#39;,component:Movie},
		{path:&#39;/about&#39;,component:About}
	]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h3><p>通过路由实现组件的嵌套展示，嵌套如下。</p><figure><img src="`+p+`" alt="截图_20230301160248" tabindex="0" loading="lazy"><figcaption>截图_20230301160248</figcaption></figure><p>在父路由规则中配合属性children，且子路由的哈希链接地址<mark>不要加&#39;/&#39;</mark>，同样也需要导入子组件。同时子路由重定向，要在父路由的规则中配置，也可以使用默认子路由。</p><p>当子路由规则中，某条规则的path为&#39;&#39;时候，会在父组件中默认展示出对应路由对应的子组件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 配置嵌套路由的规则
const router = new VueRouter({
	routes:[
		{path:&#39;/&#39;,redirect:&#39;/home&#39;}
		{path:&#39;/home&#39;,component:Home},
		{path:&#39;/movie&#39;,component:Movie},
		{
			path:&#39;/about&#39;,
			component:About，
			redirect:&#39;/about/tab1&#39;
			children:[
				//默认子路由
				{path:&#39;&#39;,component:Tab1}
				//普通子路由
				{path:&#39;tab1&#39;,component:Tab1},
				{path:&#39;tab2&#39;,component:Tab2}
			]
		}
	]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由层级" tabindex="-1"><a class="header-anchor" href="#路由层级" aria-hidden="true">#</a> 路由层级</h3><p>&#39;/&#39;对应App.vue</p><p>&#39;/home&#39;对应App.vue的子组件，也对应着App.vue中的<code>&lt;router-view&gt;</code>标签</p><h2 id="动态路由" tabindex="-1"><a class="header-anchor" href="#动态路由" aria-hidden="true">#</a> 动态路由</h2><p>动态路由指把Hash地址中可变部分定义为参数项，从而提高路由规则的复用性。</p><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3><p>方法是在配置路由规则时候在path属性中的值后<mark>加动态参数项</mark>&quot;:xxx&quot;，如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;router-link to=&quot;movie/1&quot;&gt;&lt;/router-link&gt;
&lt;router-view&gt;&lt;/router-view&gt;

//路由模块中
{path:&#39;movie:id&#39;,component:Movie}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样切换页面时候会将这个id也带过去，然后通过this.$route.params.id即可访问到这个id的值，然后可以根据这个值来展示组件。</p><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3><p>方法二是在方法一的基础上开启props传参，开启后就可以用组件中的props自定义属性去接收传参。这种只有在设置了动态参数项的时候才有意义。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//父组件中
&lt;router-link to=&quot;movie/1&quot;&gt;&lt;/router-link&gt;

//子组件中
props:[&#39;mid&#39;]

//路由模块中
{path:&#39;movie:id&#39;,component:Movie,props:true}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li>在hash地址中，/后的参数项，叫做“路径参数”。</li><li>在hash地址中，?后的参数项，叫做“查询参数”。</li><li>路径参数和查询参数都被保存在route中</li><li>fullPath包括路径参数和查询参数，而path只包括路径参数。</li></ol><h2 id="编程式导航" tabindex="-1"><a class="header-anchor" href="#编程式导航" aria-hidden="true">#</a> 编程式导航</h2><ol><li>在浏览器中，点击链接实现导航的方式，叫做<mark>声明式导航</mark>。</li></ol><p>​ 如点击<code>&lt;a&gt;</code>或<code>&lt;router-link&gt;</code>进行的跳转就是声明式导航。</p><ol start="2"><li><p>在浏览器中，调用API实现导航的方式，叫做编程式导航。</p><p>例如，普通网页中调用location.href跳转到新页面的方式，属于编程式导航。而在VUE中，使用的是<mark>导航对象</mark>router中的方法作为API进行跳转。</p></li></ol><h3 id="vue中的编程式导航api" tabindex="-1"><a class="header-anchor" href="#vue中的编程式导航api" aria-hidden="true">#</a> Vue中的编程式导航API</h3><ol><li><p>this.$router.push(&#39;hash地址&#39;)</p><p>跳转到指定hash地址，并增加一条历史记录</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$router.push(&#39;/movie/1&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>this.$router.replace(&#39;hash地址&#39;)</li></ol><p>​ 跳转到指定的hash地址，并替换掉当前的历史记录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$router.replace(&#39;/moive/1&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><p>this.$router.go(数值n)</p><p>根据历史记录，前进或后退n个浏览记录，如果前进或后退的次数超过浏览记录则原地不动。</p><p>一般开发中只前进或后退一次，所以vue提供了back()和forward()两个方法，实际相当于go(-1)和go(1)</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$router.go(-1)//后退
this.$router.go(1)//前进
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><p>如果只是简单的跳转，可以直接将导航对象的函数写到行内。</p><p>如果是在行内使用编程式导航，this必须省略，否则会报错。</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button @click=&quot;$router.back()&quot;&gt;back 后退&lt;/button&gt;
&lt;button @click=&quot;$router.go(1)&quot;&gt;go 前进&lt;/button&gt;
&lt;button @click=&quot;$router.replace(&#39;movie/1&#39;)&quot;&gt;replace 替换&lt;/button&gt;
&lt;button @click=&quot;$router.push(&#39;/movie/1&#39;)&quot;&gt;push 跳转&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导航守卫" tabindex="-1"><a class="header-anchor" href="#导航守卫" aria-hidden="true">#</a> 导航守卫</h2><p>导航守卫可以控制路由的访问权限，示意图如下</p><figure><img src="`+b+`" alt="截图_20230301191556" tabindex="0" loading="lazy"><figcaption>截图_20230301191556</figcaption></figure><h3 id="全局前置守卫" tabindex="-1"><a class="header-anchor" href="#全局前置守卫" aria-hidden="true">#</a> 全局前置守卫</h3><p>每次发生路由的导航跳转时，都会触发全局前置守卫，使用如下：</p><p>在路由模块index.js中，使用vuerouter的实例调用beforeEach，形参是个回调函数，每次发生路由变化时候都会被调用一次，回调函数的三个参数是to、from、next。</p><p>to是将要访问的路由的信息对象</p><p>from是将要离开的路由的信息对象</p><p>next是一个函数，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const router = new VueRouter({...})
router.beforeEach((to,from,next)=&gt;{
	next()
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用next()表示放行，允许这次路由导航，不调用就不会发生跳转</p><p>如果调用next(&#39;hash地址&#39;)，则会强制跳转到对应的hash地址页面</p><p>如果调用next(false)，则会强制停留在当前页面</p><h3 id="控制访问权限" tabindex="-1"><a class="header-anchor" href="#控制访问权限" aria-hidden="true">#</a> 控制访问权限</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const router = new VueRouter({...})
router.beforeEach((to,from,next)=&gt;{
	if(to.path === &#39;/main&#39;){
		const token = localStorage.getItem(&#39;token&#39;)
		if(token){
			next()
		}else{
			next(&#39;/login&#39;)
		}
	}else{
		next()
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="登录案例" tabindex="-1"><a class="header-anchor" href="#登录案例" aria-hidden="true">#</a> 登录案例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>login() {
      if (this.username === &#39;admin&#39; &amp;&amp; this.password === &#39;666666&#39;) {
        // 登录成功
        // 1. 存储 token
        localStorage.setItem(&#39;token&#39;, &#39;Bearer xxxx&#39;)
        // 2. 跳转到后台主页
        this.$router.push(&#39;/home&#39;)
      } else {
        // 登录失败
        localStorage.removeItem(&#39;token&#39;)
      }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目结构的梳理" tabindex="-1"><a class="header-anchor" href="#项目结构的梳理" aria-hidden="true">#</a> 项目结构的梳理</h2><p>component和view都是放组件的，但view目录是放需要通过路由切换加载出来的组件。</p><h2 id="遗漏的课程内容" tabindex="-1"><a class="header-anchor" href="#遗漏的课程内容" aria-hidden="true">#</a> 遗漏的课程内容</h2><p>第8天--P204~P226</p><p>第5天--P127~P144</p>`,386);function q(k,w){return a(),d("div",null,[g,e("ol",x,[e("li",null,[e("mark",null,t(),1),l("：插值表达式，只能用在内容，不能用在属性，数据驱动视图，一般是占位符，不会覆盖默认内容")])]),f])}const V=n(h,[["render",q],["__file","Vue.html.vue"]]);export{V as default};
