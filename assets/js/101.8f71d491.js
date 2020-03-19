(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{243:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.infoq.cn/article/6tJy_6ovzbpEySuLITku",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.infoq.cn/article/6tJy_6ovzbpEySuLITku"),n("OutboundLink")],1),n("br")]),t._v(" "),n("p",[t._v("从0开始搭建Vue UI组件库"),n("br"),n("a",{attrs:{href:"https://www.cnblogs.com/tiedaweishao/p/7825997.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/tiedaweishao/p/7825997.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("实现按需加载组件库"),n("br"),n("a",{attrs:{href:"https://www.toutiao.com/a6720454287287124483/?timestamp=1582849667&app=news_article&group_id=6720454287287124483&req_id=2020022808274601001504416223820E54",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.toutiao.com/a6720454287287124483/?timestamp=1582849667&app=news_article&group_id=6720454287287124483&req_id=2020022808274601001504416223820E54"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("详解：Vue-cli3 库模式搭建组件库并发布到 npm"),n("br"),n("a",{attrs:{href:"https://juejin.im/post/5bbab9de5188255c8c0cb0e3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5bbab9de5188255c8c0cb0e3"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("如何开发一个Vue的UI组件库"),n("br"),n("a",{attrs:{href:"https://buptsteve.github.io/blog/posts/017.how-to-build-a-vue-ui-lib-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://buptsteve.github.io/blog/posts/017.how-to-build-a-vue-ui-lib-1.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("如何开发一个基于Vue自己的UI库"),n("br"),n("a",{attrs:{href:"https://github.com/BuptStEve/blog/issues/23",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/BuptStEve/blog/issues/23"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("从0到1教你基于Vue开发一个组件库"),n("br"),n("a",{attrs:{href:"https://juejin.im/post/5e63d1c36fb9a07cb427e2c2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5e63d1c36fb9a07cb427e2c2"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"设计实现一套vue-ui组件库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计实现一套vue-ui组件库","aria-hidden":"true"}},[this._v("#")]),this._v(" 设计实现一套Vue-UI组件库")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("创建项目")])]),this._v(" "),s("li",[s("p",[this._v("设计目录")])]),this._v(" "),s("li",[s("p",[this._v("构造统一引入组件库入口")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入button组件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Button "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Button'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件列表")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" components "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  Button\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("install")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否安装")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("install"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("installed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历注册全局组件")]),t._v("\n  components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("component")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否是直接引入文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单个导出")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Button\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 整体导出")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导出的对象必须具有 install，才能被 Vue.use() 方法安装")]),t._v("\n  install"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("编写单个组件")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ArchButton "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nArchButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("install")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ArchButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ArchButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" ArchButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("组件使用")])]),this._v(" "),s("li",[s("p",[this._v("组件发布至NPM\n作为一个组件库,我们必须按照npm的发包规则来编写我们的package.json, 我们先来解决组件库打包的问题,首先我们需要让脚手架编译我们的组件代码,并输出到指定目录下,我们按照发包规范一般会输出到lib目录下,代码如下:")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serve"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service serve"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lib"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build --target lib --name dbui --dest lib packages/index.js"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1、文档说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、文档说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、文档说明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2、demo示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、demo示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 2、demo示例")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3、组件列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、组件列表","aria-hidden":"true"}},[this._v("#")]),this._v(" 3、组件列表")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("1)、源码以Typescript开发")]),this._v(" "),s("li",[this._v("2)、支持按需加载")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4、单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、单元测试","aria-hidden":"true"}},[this._v("#")]),this._v(" 4、单元测试")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_5更新发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5更新发布","aria-hidden":"true"}},[this._v("#")]),this._v(" 5更新发布")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_6、参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 6、参考资料")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("开发Vue插件四种方式"),s("br"),s("a",{attrs:{href:"#heading-8"}},[this._v("https://juejin.im/post/5cf78ded518825391725ee27#heading-8")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue-js-在复杂信息流场景下的实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-在复杂信息流场景下的实践","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue.js 在复杂信息流场景下的实践")])}],!1,null,null,null);s.default=e.exports}}]);