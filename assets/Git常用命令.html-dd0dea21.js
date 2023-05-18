import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as r,a as e,b as i,d as s,e as u}from"./app-7003ff35.js";const c={},o=e("h2",{id:"初始化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#初始化","aria-hidden":"true"},"#"),i(" 初始化")],-1),v=e("p",null,"git config --[system|global] 配置项 配置值",-1),m=e("p",null,"--system 对系统所有仓库配置",-1),b=e("p",null,"--global 对本仓库配置，缺省--system和--global时相当于--global",-1),h=e("p",null,"--list 查看配置",-1),p=e("p",null,"--quiet 不提示信息",-1),g={href:"http://user.name",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[i("git config user.email "),e("a",{href:"mailto:1692662759@qq.com"},"1692662759@qq.com"),i(' 设置用户邮箱，因为不存在空格，可以省略""')],-1),x=e("p",null,"git config credential.helper store 保存用户名和邮箱",-1),f=e("h2",{id:"git-submodule",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-submodule","aria-hidden":"true"},"#"),i(" git submodule")],-1),S=e("p",null,"既然有子模块，那么就有主模块，这里可以理解为主仓库。在下面可以认为，子模块=子项目=子仓库，主模块=主项目=主仓库。",-1),A=e("p",null,"举一个使用场景，主仓库的项目需要依赖多个子项目，这些子项目都是子模块。主仓库应该由主管来管理，子仓库可以分给各位实习生管理。实习生完成自己的开发任务后，将子模块推送到子仓库中，主管可以在本地主仓库同时拉取主仓库和子仓库的内容，然后再推送仓库到远端完成远程主仓库的更新。",-1),E=e("p",null,"如果不更新主仓库中的子模块，那么即使子模块仓库进行了更新，在主仓库的子模块也是原来的那个。",-1),G=e("p",null,"所以，包含子模块的主仓库的更新过程应该如下，",-1),k=u(`<p>不过，子模块仓库好像要公开才能被github action拉取，除非配置token。</p><p><mark>子模块无法实现最新引用，即父仓库每次拉取最新代码时候也自动拉取子模块的最新代码</mark>，所以子模块有些鸡肋，建议使用subtree进行代替。</p><ul><li>在本地主仓库中创建子模块</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git submodule add &lt;repository&gt; [&lt;path&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在本地主仓库中更新子模块信息，但不拉取代码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git submodule update --remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在本地主仓库中递归拉取子模块代码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git submodule update --recursive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>递归克隆远程主仓库</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone --recursive &lt;repository&gt; [&lt;path&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除子模块</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rm --cache &lt;path&gt;
删除子模块仓库目录
add并commit主仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-subtree" tabindex="-1"><a class="header-anchor" href="#git-subtree" aria-hidden="true">#</a> git subtree</h2><p>subtree与submodule的作用是一样的，但是subtree出现得比submodule晚，它的出现是为了弥补submodule存在的问题：</p><ol><li>submodule不能在父版本库中修改子版本库的代码，只能在子版本库中修改，是单向的；</li><li>submodule没有直接删除子版本库的功能；</li></ol><p>而subtree则可以实现双向数据修改。官方推荐使用subtree替代submodule。子项目对主项目是完全透明的</p><ul><li>在主项目中添加subtree</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git subtree add --prefix=&lt;path&gt; &lt;url&gt; &lt;branch&gt; --squash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 该命令是将url仓库的branch分支拉取到path目录下</p><p>​ --squash 参数表示只生成一条commit信息，不拉取历史信息</p><h2 id="submodule和subtree的区别" tabindex="-1"><a class="header-anchor" href="#submodule和subtree的区别" aria-hidden="true">#</a> submodule和subtree的区别</h2><p>submodule和subtree最大的区别就是subtree允许在父仓库修改subtree，而submodule不允许在父仓库对submodule进行修改。</p><p>因为，对于需要被多个项目引用的共有仓库，建议用submodule，当然subtree的功能更加多一下。</p><h2 id="github-action" tabindex="-1"><a class="header-anchor" href="#github-action" aria-hidden="true">#</a> Github Action</h2><p>Github Action本质是个脚本，它是一个自动化工具，常用于同步仓库，发布网站。脚本定义了触发器，当满足条件时候会进行执行。</p><p>Github Action的脚本是个yml类型的文本，保存在.github/workflow目录下。</p><p>下面是一个推送仓库到远程仓库时，打包发布到github pages和gitee pages网站的应用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
name: 发布博客

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - master

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: 拉取仓库
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: 构建博客
        env:
          # node的环境变量，用于分配足够的内存给nodejs打包
          NODE_OPTIONS: --max_old_space_size=8192
        run:
          npm install &amp;&amp; npm run build

      - name: 部署github博客
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          token: \${{ secrets.TOKEN }}
          # 这是博客部署到的目标仓库和分支名称
          repository-name: Familia-Scarlet/Familia-Scarlet.github.io
          branch: master
          # 这是待提交的目录
          folder: .vuepress/dist/

      - name: 推送打包到Gitee仓库
        uses: wearerequired/git-mirror-action@master
        env:
          # 注意在 Settings-&gt;Secrets 配置 GITEE_RSA_PRIVATE_KEY
          SSH_PRIVATE_KEY: \${{ secrets.GITEE_RSA_PRIVATE_KEY }}
        with:
          # GitHub 源仓库地址
          source-repo: git@github.com:Familia-Scarlet/Familia-Scarlet.github.io.git
          # Gitee 目标仓库地址
          destination-repo: git@gitee.com:Familia-Scarlet/Familia-Scarlet.git

      - name: 点一下gitee pages的更新按钮
        uses: yanglbme/gitee-pages-action@main
        with:
          gitee-username: \${{ secrets.GITEE_NAME }}
          gitee-password: \${{ secrets.GITEE_PASSWORD }}
          # 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错
          gitee-repo: Familia-Scarlet/Familia-Scarlet
          # 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）
          branch: master

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-action套娃" tabindex="-1"><a class="header-anchor" href="#github-action套娃" aria-hidden="true">#</a> GitHub Action套娃</h2><p>意思就是在一个GitHub Action中调用另一仓库的GitHub Action。</p>`,30);function y(I,T){const l=n("ExternalLinkIcon"),a=n("FlowChart");return d(),r("div",null,[o,v,m,b,h,p,e("p",null,[i("git config "),e("a",g,[i("user.name"),s(l)]),i(' "test user" 设置用户名，因为用户名中存在空格，要用""包裹')]),_,x,f,S,A,E,G,s(a,{id:"flowchart-42",code:"eJxLSk3PzLO1Ky5JLCqxUni6p+Hp8m6u/AJDW7v8gtSixJLM/Dyg8NoJz1YsfDp3+pPdk5/umpycn5ubWfJ057aC0uIMoGIjFMVPduyGKCstSEksSX3Rt/1p/zS4Cc9ntTybveXZtA1A7VBzJvWAzUnNS7G1AxJWCs93T342dz4X2GkaRZnpGSWaukAbDJHYRnA2UAcXAD6kXrU=",preset:"vue"}),k])}const J=t(c,[["render",y],["__file","Git常用命令.html.vue"]]);export{J as default};
