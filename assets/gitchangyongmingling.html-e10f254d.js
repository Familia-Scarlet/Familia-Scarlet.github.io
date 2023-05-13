import{_ as i,p as e,q as n,Z as s}from"./framework-eb6cfbb5.js";const l={},a=s(`<h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><p>git config --[system|global] 配置项 配置值</p><p>--system 对系统所有仓库配置</p><p>--global 对本仓库配置，缺省--system和--global时相当于--global</p><p>--list 查看配置</p><p>git config user.name &quot;test user&quot; 设置用户名，因为用户名中存在空格，要用&quot;&quot;包裹</p><p>git config user.email 1692662759@qq.com 设置用户邮箱，因为不存在空格，可以省略&quot;&quot;</p><p>git config credential.helper store 保存用户名和邮箱</p><h2 id="子模块" tabindex="-1"><a class="header-anchor" href="#子模块" aria-hidden="true">#</a> 子模块</h2><p>既然有子模块，那么就有主模块，这里可以理解为主仓库。在下面可以认为，子模块=子项目=子仓库，主模块=主项目=主仓库。</p><p>举一个使用场景，主仓库的项目需要依赖多个子项目，这些子项目都是子模块。主仓库应该由主管来管理，子仓库可以分给各位实习生管理。实习生完成自己的开发任务后，将子模块推送到子仓库中，主管可以在本地主仓库同时拉取主仓库和子仓库的内容，然后再推送仓库到远端完成远程主仓库的更新。</p><p>如果不更新主仓库中的子模块，那么即使子模块仓库进行了更新，在主仓库的子模块也是原来的那个。</p><ul><li><p>在本地主仓库中创建子模块</p><p>git submodule add <code>&lt;url&gt;</code> <code>&lt;path&gt;</code></p></li><li><p>在本地主仓库中更新子模块</p><p>git submodule update --remote</p></li><li><p>递归克隆远程主仓库</p><p>git clone --recursive url</p></li></ul><h2 id="github-action" tabindex="-1"><a class="header-anchor" href="#github-action" aria-hidden="true">#</a> Github Action</h2><p>Github Action本质是个脚本，它是一个自动化工具，常用于同步仓库，发布网站。脚本定义了触发器，当满足条件时候会进行执行。</p><p>Github Action的脚本是个yml类型的文本，保存在.github/workflow目录下。</p><p>下面是一个推送仓库到远程仓库时，打包发布到github pages和gitee pages网站的应用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),d=[a];function r(t,c){return e(),n("div",null,d)}const u=i(l,[["render",r],["__file","gitchangyongmingling.html.vue"]]);export{u as default};
