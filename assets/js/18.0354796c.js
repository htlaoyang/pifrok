(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{500:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("本文，仅针对开发过程的记录，具体配置，请移步 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",title:"VuePress 官网",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress 官网"),a("OutboundLink")],1),t._v(" AND "),a("a",{attrs:{href:"https://vuepress-theme-blog.ulivz.com/",title:"@vuepress/theme-blog 官网",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/theme-blog 官网"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"一、准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、准备工作"}},[t._v("#")]),t._v(" 一、准备工作")]),t._v(" "),a("h3",{attrs:{id:"创建-github-新项目-并将项目克隆到本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-github-新项目-并将项目克隆到本地"}},[t._v("#")]),t._v(" 创建 "),a("a",{attrs:{href:"https://github.com",title:"github",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),a("OutboundLink")],1),t._v(" 新项目，并将项目克隆到本地")]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),t._v(" "),a("em",[t._v("创建项目时选择 "),a("code",[t._v(".gitignore")]),t._v(" 为 "),a("code",[t._v("Node")])]),t._v(", 这样初始化项目时，会自动生成 "),a("code",[t._v(".gitignore")]),t._v(" 文件，并自动将 "),a("code",[t._v("node_modules")]),t._v(" 等文件加加入其中， 这样避免了 "),a("code",[t._v("IDE")]),t._v(" 监听 "),a("code",[t._v("node_modules")]),t._v(" 中大量的文件而造成 "),a("code",[t._v("IDE")]),t._v(" 卡顿的问题")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:zhb333/readme-blog.git  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆到本地")]),t._v("\n")])])]),a("h3",{attrs:{id:"使用-npm-初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-npm-初始化项目"}},[t._v("#")]),t._v(" 使用 "),a("code",[t._v("NPM")]),t._v(" 初始化项目")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" readme-blog     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化过程，根据实际情况填写配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ……")]),t._v("\n")])])]),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress @vuepress/theme-blog -D "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install the dependencies")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install vuepress @vuepress/theme-blog -D")]),t._v("\n")])])]),a("h3",{attrs:{id:"依赖版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖版本"}},[t._v("#")]),t._v(" 依赖版本")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@vuepress/theme-blog"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vuepress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.4.0"')]),t._v("\n")])])]),a("h2",{attrs:{id:"二、开发阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、开发阶段"}},[t._v("#")]),t._v(" 二、开发阶段")]),t._v(" "),a("h3",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),a("p",[t._v("├── _posts (存放文章)"),a("br"),t._v("\n│   └── 2020-03-21-VuePress开发静态博客.md"),a("br"),t._v("\n│   └── ..."),a("br"),t._v("\n├── .vuepress (vuepress 相关)"),a("br"),t._v("\n│   ├── public"),a("br"),t._v("\n│   │ └── favicon.ico (ico图标)"),a("br"),t._v("\n│   ├── styles (样式)"),a("br"),t._v("\n│   │   ├── index.styl (自定义样式)"),a("br"),t._v("\n│   │   └── palette.styl (stylus 预设)"),a("br"),t._v("\n│   ├── theme (主题)"),a("br"),t._v("\n│   │     ├── layouts(布局)"),a("br"),t._v("\n│   │     │    ├── clock.js(主页效果用)"),a("br"),t._v("\n│   │     │    └── IndexHome.vue(主页布局)"),a("br"),t._v("\n│   │     └── index.js(主题入口)"),a("br"),t._v("\n│   └── config.js (Vuepress配置)"),a("br"),t._v("\n│"),a("br"),t._v("\n└── package.json")]),t._v(" "),a("h3",{attrs:{id:"主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题"}},[t._v("#")]),t._v(" 主题")]),t._v(" "),a("blockquote",[a("p",[t._v("官方博客主题 "),a("code",[t._v("@vuepress/theme-blog")]),t._v("，没有主页的功能，为了让博客有个炫酷的主页，因此继承 "),a("code",[t._v("@vuepress/theme-blog")]),t._v("，自定义主题")])]),t._v(" "),a("h4",{attrs:{id:"vuepress-theme-index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-theme-index-js"}},[t._v("#")]),t._v(" .vuepress/theme/index.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  extend"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/theme-blog'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 继承`@vuepress/theme-blog")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"编写基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写基本配置"}},[t._v("#")]),t._v(" 编写基本配置")]),t._v(" "),a("p",[a("strong",[t._v(".vuepress/config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'forapi.cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 站点名称")]),t._v("\n  description"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'学习记录 代码分享 经验总结 开发教程'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 描述")]),t._v("\n  lange"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-CN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 语言")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./theme/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用自定义主题")]),t._v("\n  markdown"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// markdown 配置")]),t._v("\n    lineNumbers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @vuepress/theme-blog 配置")]),t._v("\n    dateFormat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导航")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/posts/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tags'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tag/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    directories"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 目录分类器")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        dirname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_posts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/posts/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        itemPermalink"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/posts/:year/:month/:day/:slug'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    footer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页脚")]),t._v("\n      contact"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/zhb333/readme-blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      copyright"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'粤ICP备20016112号'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://beian.miit.gov.cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MIT Licensed | Copyright © 2020-present forapi.cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/zhb333/readme-blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"编写-npm运行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-npm运行脚本"}},[t._v("#")]),t._v(" 编写 "),a("code",[t._v("NPM")]),t._v("运行脚本")]),t._v(" "),a("h4",{attrs:{id:"package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[t._v("#")]),t._v(" package.json")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev ."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build ."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"启动开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动开发环境"}},[t._v("#")]),t._v(" 启动开发环境")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev\n")])])]),a("p",[a("strong",[t._v("默认端口是"),a("code",[t._v("8080")]),t._v(" 如果"),a("code",[t._v("8080")]),t._v("端口已被占用，会自动分配其它空闲端口，请注意！")])]),t._v(" "),a("p",[t._v("不出意料，可以在浏览器中看到项目已经启动，由于在 "),a("code",[t._v("themeConfig.directories")]),t._v(" 中，没有定义 "),a("code",[t._v("/")]),t._v(" 路径的目录分类，所以首页目前为 "),a("code",[t._v("404")]),t._v(" 页面，点击导航栏中的 "),a("code",[t._v("Blog")]),t._v(" 可以看到存放在 "),a("code",[t._v("_posts")]),t._v(" 目录下的文章列表")]),t._v(" "),a("h3",{attrs:{id:"特别强调-重启服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特别强调-重启服务"}},[t._v("#")]),t._v(" 特别强调 - 重启服务")]),t._v(" "),a("blockquote",[a("p",[t._v("在开发环境下，修改配置，新增任何文件都必须"),a("strong",[t._v("重启服务")]),t._v("，不然，"),a("code",[t._v("Vuepress")]),t._v(" 默认监听不到这些变化，编写或修改已经存在的 "),a("code",[t._v("markdown")]),t._v(" 文件，页面会热更新, 但是修改 "),a("code",[t._v("markdown")]),t._v(" 文件中 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/frontmatter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Front Matter"),a("OutboundLink")],1),t._v(" 的内容，还是得"),a("strong",[t._v("重启服务")]),t._v("才能生效！")])]),t._v(" "),a("h3",{attrs:{id:"主页配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主页配置"}},[t._v("#")]),t._v(" 主页配置")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("@vuepress/theme-blog")]),t._v(" 认为一个 "),a("code",[t._v("URL")]),t._v(" 路径对应一个文章目录，如我们存放文章的 "),a("code",[t._v("_posts")]),t._v(" 目录，但是，我们的主页只是为了展示炫酷效果，所以我们可以采用比较 "),a("code",[t._v("Hack")]),t._v(" 的方法，解决这个问题")])]),t._v(" "),a("h4",{attrs:{id:"themeconfig-directories-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig-directories-配置"}},[t._v("#")]),t._v(" "),a("code",[t._v("themeConfig.directories")]),t._v(" 配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("directories"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主页配置，自定义主题就是为了这")]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dirname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_posts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    layout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'IndexHome'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义首页布局组件")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dirname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_posts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/posts/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    itemPermalink"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/posts/:year/:month/:day/:slug'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"编写炫酷的主页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写炫酷的主页"}},[t._v("#")]),t._v(" 编写炫酷的主页")]),t._v(" "),a("blockquote",[a("p",[t._v("主页编写，就像在开发一个 "),a("code",[t._v("Vue")]),t._v(" 组件一样，具体想实现什么样的效果，全凭个人喜好，可以参考本人的，但我希望您能自己编写！")])]),t._v(" "),a("h4",{attrs:{id:"编写-vuepress-theme-layouts-indexhome-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-vuepress-theme-layouts-indexhome-vue"}},[t._v("#")]),t._v(" 编写 .vuepress/theme/layouts/IndexHome.vue")]),t._v(" "),a("p",[a("strong",[t._v("点击 "),a("a",{attrs:{href:"https://github.com/zhb333/readme-blog/tree/master/.vuepress/theme/layouts",target:"_blank",rel:"noopener noreferrer"}},[t._v("主页布局组件"),a("OutboundLink")],1),t._v(" 查看相关代码")])]),t._v(" "),a("p",[a("strong",[t._v("提醒：")]),t._v(" 修改配置或新增文件时，不要忘记随时 "),a("strong",[t._v("重启服务")])]),t._v(" "),a("h3",{attrs:{id:"样式调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式调整"}},[t._v("#")]),t._v(" 样式调整")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("相信 @vuepress/theme-blog")]),t._v(" 的紫色主题，并不是每个人都喜欢，因此可以通过 "),a("code",[t._v(".vuepress/styles/palette.styl")]),t._v(" 修改主题配色等，通过 "),a("code",[t._v(".vuepress/styles/index.styl")]),t._v(" 调整全局样式")])]),t._v(" "),a("p",[a("strong",[t._v("以下是本人研究并修改的样式，仁者见仁智者见智吧！")])]),t._v(" "),a("h4",{attrs:{id:"vuepress-styles-palette-styl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-styles-palette-styl"}},[t._v("#")]),t._v(" "),a("code",[t._v(".vuepress/styles/palette.styl")])]),t._v(" "),a("div",{staticClass:"language-styl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-styl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$accentColor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#42A5F5")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$footerBgColor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lighten")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$accentColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token unit"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$footerColor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#fff")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$headerHeight")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token unit"}},[t._v("px")])]),t._v("\n")])])]),a("h4",{attrs:{id:"vuepress-styles-index-styl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-styles-index-styl"}},[t._v("#")]),t._v(" "),a("code",[t._v(".vuepress/styles/index.styl")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  padding 0 32px\n  padding-top 10px\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".header-wrapper .title a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  text-transform none\n  color $accentColor\n  font-size 24px\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#mobile-header .mobile-header-title .mobile-home-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  text-transform none\n  color $accentColor\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#vuepress-theme-blog__post-layout .vuepress-blog-theme-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  padding 0\n  box-shadow none\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#vuepress-theme-blog__post-layout .vuepress-blog-theme-content  .post-title")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  margin-top 0\n  font-size 26px\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content-wrapper")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  padding-top 90px\n  padding-bottom 20px\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100vh - 80px - 90px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"三、功能增强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、功能增强"}},[t._v("#")]),t._v(" 三、功能增强")]),t._v(" "),a("h3",{attrs:{id:"评论功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#评论功能"}},[t._v("#")]),t._v(" 评论功能")]),t._v(" "),a("blockquote",[a("p",[t._v("使用 "),a("code",[t._v("@vuepress/theme-blog")]),t._v(" 内置的 "),a("code",[t._v("@vssue/vuepress-plugin-vssue")]),t._v(" 插件")])]),t._v(" "),a("blockquote",[a("p",[t._v("代码托管平台遵从 OAuth 2 spec 提供了 OAuth API。Vssue 利用平台提供的 OAuth API，使得用户可以登录并发表评论。")])]),t._v(" "),a("h4",{attrs:{id:"使用之前需要创建-oauth-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用之前需要创建-oauth-app"}},[t._v("#")]),t._v(" 使用之前需要创建  "),a("code",[t._v("OAuth App")])]),t._v(" "),a("p",[t._v("点击 "),a("a",{attrs:{href:"https://vssue.js.org/zh/guide/github.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub OAuth App"),a("OutboundLink")],1),t._v(" 查看创建步骤")]),t._v(" "),a("p",[t._v("创建好 "),a("a",{attrs:{href:"https://vssue.js.org/zh/guide/github.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub OAuth App"),a("OutboundLink")],1),t._v(" 之后，将得到 "),a("code",[t._v("Client ID")]),t._v(" 以及 "),a("code",[t._v("Client Secret")])]),t._v(" "),a("h4",{attrs:{id:"themeconfig-comment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig-comment"}},[t._v("#")]),t._v(" themeConfig.comment")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vssue")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  service"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vssue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  owner"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'You'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// github 用户名")]),t._v("\n  repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your repo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 仓库名")]),t._v("\n  clientId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your clientId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  clientSecret"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your clientSecret'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"订阅功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#订阅功能"}},[t._v("#")]),t._v(" 订阅功能")]),t._v(" "),a("blockquote",[a("p",[t._v("使用  "),a("code",[t._v("@vuepress/theme-blog")]),t._v(" 内置的 "),a("code",[t._v("vuepress-plugin-mailchimp")]),t._v(" 插件")])]),t._v(" "),a("p",[t._v("使用订阅功能之前，需要先到 "),a("a",{attrs:{href:"https://mailchimp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mailchimp"),a("OutboundLink")],1),t._v(" 注册一个账号")]),t._v(" "),a("p",[t._v("注册成功后，点击 "),a("a",{attrs:{href:"https://vuepress-plugin-mailchimp.billyyyyy3320.com/#config",target:"_blank",rel:"noopener noreferrer"}},[t._v("获取 endpoint"),a("OutboundLink")],1),t._v(" 的方法")]),t._v(" "),a("h4",{attrs:{id:"themeconfig-newsletter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig-newsletter"}},[t._v("#")]),t._v(" themeConfig.newsletter")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'邮件订阅'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请输入您的邮箱...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  submitText"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'订阅'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  endpoint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"网站增强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站增强"}},[t._v("#")]),t._v(" 网站增强")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sitemap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sitemap generator plugin for vuepress.")]),t._v("\n    hostname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://forapi.cn'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  feed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// RSS, Atom, and JSON feeds generator plugin for VuePress 1.x")]),t._v("\n    canonical_base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://forapi.cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  smoothScroll"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// allows you to enable smooth scrolling")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("p",[t._v("点击 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("部署"),a("OutboundLink")],1),t._v(" 进入官网查看具体的部署步骤")]),t._v(" "),a("p",[t._v("（完！） 😅")])])}),[],!1,null,null,null);s.default=n.exports}}]);