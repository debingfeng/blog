---
sidebarDepth : 0
---

# 设计实现一套Vue-UI组件库

- 创建项目

- 设计目录

- 构造统一引入组件库入口
```javascript
// 导入button组件
import Button from './Button'

// 组件列表
const components = [
  Button
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 单个导出
export  {
    Button
}
// 整体导出
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
}


```

- 编写单个组件


```javascript
import ArchButton from './src/index.vue';

ArchButton.install = function(Vue) {
    Vue.component(ArchButton.name, ArchButton);
};

export default ArchButton;

```

- 组件使用


- 组件发布至NPM
作为一个组件库,我们必须按照npm的发包规则来编写我们的package.json, 我们先来解决组件库打包的问题,首先我们需要让脚手架编译我们的组件代码,并输出到指定目录下,我们按照发包规范一般会输出到lib目录下,代码如下:

```js

"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lib": "vue-cli-service build --target lib --name dbui --dest lib packages/index.js"
  }


```

### 1、文档说明

### 2、demo示例

### 3、组件列表

- 1)、源码以Typescript开发
- 2)、支持按需加载

### 4、单元测试


### 5更新发布

### 6、参考资料

开发Vue插件四种方式<br />[https://juejin.im/post/5cf78ded518825391725ee27#heading-8](#heading-8)

# Vue.js 在复杂信息流场景下的实践

[https://www.infoq.cn/article/6tJy_6ovzbpEySuLITku](https://www.infoq.cn/article/6tJy_6ovzbpEySuLITku)<br /> 

从0开始搭建Vue UI组件库<br />[https://www.cnblogs.com/tiedaweishao/p/7825997.html](https://www.cnblogs.com/tiedaweishao/p/7825997.html)

实现按需加载组件库<br />[https://www.toutiao.com/a6720454287287124483/?timestamp=1582849667&app=news_article&group_id=6720454287287124483&req_id=2020022808274601001504416223820E54](https://www.toutiao.com/a6720454287287124483/?timestamp=1582849667&app=news_article&group_id=6720454287287124483&req_id=2020022808274601001504416223820E54)

详解：Vue-cli3 库模式搭建组件库并发布到 npm<br />[https://juejin.im/post/5bbab9de5188255c8c0cb0e3](https://juejin.im/post/5bbab9de5188255c8c0cb0e3)

如何开发一个Vue的UI组件库<br />[https://buptsteve.github.io/blog/posts/017.how-to-build-a-vue-ui-lib-1.html](https://buptsteve.github.io/blog/posts/017.how-to-build-a-vue-ui-lib-1.html)

如何开发一个基于Vue自己的UI库<br />[https://github.com/BuptStEve/blog/issues/23](https://github.com/BuptStEve/blog/issues/23)

从0到1教你基于Vue开发一个组件库<br />[https://juejin.im/post/5e63d1c36fb9a07cb427e2c2](https://juejin.im/post/5e63d1c36fb9a07cb427e2c2)
