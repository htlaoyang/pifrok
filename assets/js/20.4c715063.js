(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{506:function(s,a,t){"use strict";t.r(a);var n=t(9),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[s._v("操作系统    Linux\n目标        安装 NODE 与NPM\n版本要求    npm 5.6\n            node 10.0\n安装目录    /usr/local/nodejs\n")])])]),t("h2",{attrs:{id:"初始工具安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始工具安装"}},[s._v("#")]),s._v(" 初始工具安装")]),s._v(" "),t("p",[s._v("yum -y install wget")]),s._v(" "),t("h2",{attrs:{id:"_1-新建目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建目录"}},[s._v("#")]),s._v(" 1. 新建目录")]),s._v(" "),t("p",[s._v("mkdir /usr/local/nodejs")]),s._v(" "),t("h2",{attrs:{id:"_2-下载安装文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载安装文件"}},[s._v("#")]),s._v(" 2. 下载安装文件")]),s._v(" "),t("p",[s._v("10.0版本地址[https://nodejs.org/dist/latest-v10.x/]")]),s._v(" "),t("p",[s._v("所有版本地址 [https://nodejs.org/en/download/releases/]")]),s._v(" "),t("p",[s._v("cd /usr/local/nodejs")]),s._v(" "),t("p",[s._v("wget https://nodejs.org/dist/latest-v10.x/node-v10.19.0-linux-x64.tar.xz")]),s._v(" "),t("h2",{attrs:{id:"_3-解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-解压"}},[s._v("#")]),s._v(" 3. 解压")]),s._v(" "),t("p",[s._v("tar -xvf node-v10.19.0-linux-x64.tar.xz")]),s._v(" "),t("h2",{attrs:{id:"_4-将node-v10-13-0-linux-x64下的文件全部移到-usr-local-nodejs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-将node-v10-13-0-linux-x64下的文件全部移到-usr-local-nodejs"}},[s._v("#")]),s._v(" 4.  将node-v10.13.0-linux-x64下的文件全部移到 /usr/local/nodejs/")]),s._v(" "),t("p",[s._v("mv node-v10.13.0-linux-x64/* /usr/local/nodejs/")]),s._v(" "),t("h2",{attrs:{id:"_5-建立软连接-变为全局即可"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-建立软连接-变为全局即可"}},[s._v("#")]),s._v(" 5.  建立软连接，变为全局即可")]),s._v(" "),t("p",[s._v("ln -s /usr/local/nodejs/bin/node /usr/local/bin/node")]),s._v(" "),t("p",[s._v("ln -s /usr/local/nodejs/bin/npm /usr/local/bin/npm")]),s._v(" "),t("ZanShang")],1)}),[],!1,null,null,null);a.default=e.exports}}]);