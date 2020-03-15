---
sidebarDepth : 0
---
# webpack4的打包配置实践

[webpack官方文档](https://www.webpackjs.com/guides/)

## 安装依赖

- 安装Node.js

- 安装webpack

```

npm install --global webpack webpack-cli

```

[本文项目配置代码示例](https://gitee.com/fengdb/webpack4-tutorial)

## 打包功能与插件说明



- 使用style-loader css-loader加载CSS，处理css预处理器

- 使用file-loader加载图片

- 使用file-loader 和 url-loader 加载字体

- 处理对应文件加载对应数据

例如 处理csv和xml格式数据使用 csv-loader xml-loader 

- 使用指定静态目录打包全局资源

例如使用存放在assert目录里面  统一全局处理

- 使用html-webpack-plugin和clean-webpack-plugin管理输出和清理


- 使用webpack-dev-server建立本地server

- [使用webpack4内置的开启模块热替换](https://www.webpackjs.com/guides/hot-module-replacement/#%E5%90%AF%E7%94%A8-hmr)

例如 官方文档介绍到如下，详情见官方文档有详细说明。
```
devServer: {
      contentBase: './dist',
+     hot: true
},
```

- Tree shakeing

tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块系统中的静态结构特性，例如 import 和 export。这个术语和概念实际上是兴起于 ES2015 模块打包工具 rollup。

新的 webpack 4 正式版本，扩展了这个检测能力，通过 package.json 的 "sideEffects" 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "pure(纯的 ES2015 模块)"，由此可以安全地删除文件中未使用的部分。


- 使用webpack-merge区分开发配置与产品环境配置,[详情见文档](https://www.webpackjs.com/guides/production/#%E9%85%8D%E7%BD%AE)



- 通过标记 import(/* webpackChunkName: "print" */ './print')实现懒加载，[见文档示例说明](https://www.webpackjs.com/guides/lazy-loading/#%E7%A4%BA%E4%BE%8B)

- 其他webpack打包性能优化，请详细阅读官方文档说明

> 附件是