---
sidebarDepth : 0
---
# Webpack优化实践

webpack 的优化瓶颈，主要是两个方面：

- webpack 的构建过程太花时间
- webpack 打包的结果体积太大


## 减少load的工作量 - 以babel为例

最常见的优化方式是，用 include 或 exclude 来帮我们避免不必要的转译，比如 webpack 官方在介绍 babel-loader 时给出的示例：

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

## 优化第三方库的打包和更新

处理第三方库的姿势有很多，其中，Externals 不够聪明，一些情况下会引发重复打包的问题；而 CommonsChunkPlugin 每次构建时都会重新构建一次 vendor；出于对效率的考虑，我们这里为大家推荐 DllPlugin。

DllPlugin 是基于 Windows 动态链接库（dll）的思想被创作出来的。这个插件会把第三方库单独打包到一个文件中，这个文件就是一个单纯的依赖库。这个依赖库不会跟着你的业务代码一起被重新打包，只有当依赖自身发生版本变化时才会重新打包。

用 DllPlugin 处理文件，要分两步走：

- 基于 dll 专属的配置文件，打包 dll 库
- 基于 webpack.config.js 文件，打包业务代码

```js
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
      // 依赖的库数组
      vendor: [
        'prop-types',
        'babel-polyfill',
        'react',
        'react-dom',
        'react-router-dom',
      ]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      library: '[name]_[hash]',
    },
    plugins: [
      new webpack.DllPlugin({
        // DllPlugin的name属性需要和libary保持一致
        name: '[name]_[hash]',
        path: path.join(__dirname, 'dist', '[name]-manifest.json'),
        // context需要和webpack.config.js保持一致
        context: __dirname,
      }),
    ],
}
```

## 使用Happypack——将 loader 由单进程转为多进程

webpack 是单线程的，就算此刻存在多个任务，你也只能排队一个接一个地等待处理。这是 webpack 的缺点，好在我们的 CPU 是多核的，[Happypack](https://www.npmjs.com/package/happypack) 会充分释放 CPU 在多核并发方面的优势，帮我们把任务分解给多个子进程去并发执行，大大提升打包效率。

HappyPack 的使用方法也非常简单，只需要我们把对 loader 的配置转移到 HappyPack 中去就好，我们可以手动告诉 HappyPack 我们需要多少个并发的进程：

## 构建结果体积压缩

### 文件结构可视化，找出导致体积过大的原因

使用[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)插件，可以可视化各个包的文件大小，进而进行相应地优化。


### Tree-Shaking

Tree-Shaking 的针对性很强，它更适合用来处理模块级别的冗余代码。至于粒度更细的冗余代码的去除，往往会被整合进 JS 或 CSS 的压缩或分离过程中。


### 按需加载

使用异步加载，实现按需加载。require.ensure(dependencies, callback, chunkName)
