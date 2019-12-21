[TOC]
# 发布平台问题解决与经验总结

## Vue的底层原理实现 

## [Vue组件的生命周期示例图](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)

## 打包构建资源引用问题

### 根据环境变量的不同构建不同环境的代码

1、在公共Js中根据生产环境、测试环境和开发环境域名不同来定义不同的域名



```
// 示例
const production = host.indexOf("static.watch.okii.com") > -1;

// 定位接口域名
export const location_domain = production
    ? `${protocol}//location.watch.okii.com`
    : `${protocol}//location.module.okii.com`;
    
```


2、在构建的时候根据node环境变量来判断来构建打包

示例参考
[webpack生产环境官方配置说明](https://www.webpackjs.com/guides/production/#%E9%85%8D%E7%BD%AE)




### CSS引用字体路径不正确的问题

http://deploy.test/front/static/css/static/fonts/ionicons.24712f6.ttf


http://deploy.test/front/static/fonts/ionicons.24712f6.ttf


在 webpack 出现之前，前端开发人员会使用 grunt 和 gulp 等工具来处理资源，并将它们从 /src 文件夹移动到 /dist 或 /build 目录中。同样方式也被用于 JavaScript 模块，但是，像 webpack 这样的工具，将动态打包(dynamically bundle)所有依赖项（创建所谓的依赖图(dependency graph)）。这是极好的创举，因为现在每个模块都可以_明确表述它自身的依赖，我们将避免打包未使用的模块。

webpack 最出色的功能之一就是，除了 JavaScript，还可以通过 loader 引入任何其他类型的文件。也就是说，以上列出的那些 JavaScript 的优点（例如显式依赖），同样可以用来构建网站或 web 应用程序中的所有非 JavaScript 内容。让我们从 CSS 开始起步，或许你可能已经熟悉了这个设置过程。

[示例说明参考官方配置](https://www.webpackjs.com/guides/asset-management/#loading-css)


## 计算属性

- 计算属性的初衷

> 设计的初衷是用于简单运算的，避免在模板中有太多的计算。 

- 计算属性缓存与方法
- 计算属性与侦听器
- [计算属性的基本实现原理](https://juejin.im/post/5b98c4da6fb9a05d353c5fd7)


## vue中的render渲染函数

## vuex全局状态管理的问题

[vuex官方网站](https://vuex.vuejs.org/zh/guide/)

状态管理的问题


## 路由设置

子路由、嵌套路由

### 路有监听



### 路由设置的问题


## axios设置问题

[详细查看中文文档](https://www.kancloud.cn/yunye/axios/234845)

- 全局设置


```
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

- 拦截器

> 在请求或响应被 then 或 catch 处理前拦截它们。


```
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

> 如果你想在稍后移除拦截器，可以这样：

```
var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

> 可以使用 validateStatus 配置选项定义一个自定义 HTTP 状态码的错误范围。


```
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // 状态码在大于或等于500时才会 reject
  }
})
```


##  布局Flex

[Flex参考文档](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)




## promise异步返回问题

### promise基本使用

```
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

- 介绍一下Then方法

Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。它的作用是为 Promise 实例添加状态改变时的回调函数。前面说过，then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。 



```
getJSON("/posts.json").then(function(json) {
  return json.post;
}).then(function(post) {
  // ...
});
```
- catch方法

Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。

```
p.then((val) => console.log('fulfilled:', val))
  .catch((err) => console.log('rejected', err));

// 等同于
p.then((val) => console.log('fulfilled:', val))
  .then(null, (err) => console.log("rejected:", err));
```
 
- finally方法

用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

- Promise.all()

 Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
 
 ### Promise实现原理
 
 
 - Promise 状态
 
Promise 必须为以下三种状态之一：等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）。一旦Promise被resolve或reject，不能再迁移至其他任何状态（即状态 immutable）。
为保持代码清晰，暂无异常处理。同时为表述方便，约定如下：

fulfilled 使用 resolved 代替
onFulfilled 使用 onResolved 代替




- Promise 构造函数

从构造函数开始，我们一步步实现符合 Promsie A+ 规范的 Promise。大概描述下，Promise构造函数需要做什么事情。

- 初始化 Promise 状态（pending）
- 初始化 then(..) 注册回调处理数组（then 方法可被同一个 promise 调用多次）
- 立即执行传入的 fn 函数，传入Promise 内部 resolve、reject 函数
- ...


```
function Promise (fn) {
  // 省略非 new 实例化方式处理
  // 省略 fn 非函数异常处理

  // promise 状态变量
  // 0 - pending
  // 1 - resolved
  // 2 - rejected
  this._state = 0;
  // promise 执行结果
  this._value = null;
 
  // then(..) 注册回调处理数组
  this._deferreds = [];

  // 立即执行 fn 函数
  try {
    fn(value => {
      resolve(this, value);
    },reason => {
      reject(this, reason);
    })
  } catch (err) {
    // 处理执行 fn 异常
    reject(this, err);
  }
}

```
_state 和 _value 变量很容易理解，_deferreds变量做什么？规范描述：then 方法可以被同一个 promise 调用多次。为满足多次调用 then 注册回调处理，内部选择使用 _deferreds 数组存储处理对象。具体处理对象结构，见 then 函数章节。
最后执行 fn 函数，并调用 promise 内部的私有方法 resolve 和 reject。resolve 和 reject 内部细节随后介绍。

- then 函数

Promise A+提到规范专注于提供通用的 then 方法。then 方法可以被同一个 promise 调用多次，每次返回新 promise 对象 。then 方法接受两个参数onResolved、onRejected（可选）。在 promise 被 resolve 或 reject 后，所有 onResolved 或 onRejected 函数须按照其注册顺序依次回调，且调用次数不超过一次。
根据上述，then 函数执行流程大致为：

实例化空 promise 对象用来返回（保持then链式调用）
构造 then(..) 注册回调处理函数结构体
判断当前 promise 状态，pending 状态存储延迟处理对象 deferred ，非pending状态执行 onResolved 或 onRejected 回调
...


```
Promise.prototype.then = function (onResolved, onRejected) {

  var res = new Promise(function () {});
  // 使用 onResolved，onRejected 实例化处理对象 Handler
  var deferred = new Handler(onResolved, onRejected, res);

  // 当前状态为 pendding，存储延迟处理对象
  if (this._state === 0) {
    this._deferreds.push(deferred);
    return res;
  }

  // 当前 promise 状态不为 pending
  // 调用 handleResolved 执行onResolved或onRejected回调
  handleResolved(this, deferred);
  
  // 返回新 promise 对象，维持链式调用
  return res;
};

```
Handler 函数封装存储 onResolved、onRejected 函数和新生成 promise 对象。


```
function Handler (onResolved, onRejected, promise) {
  this.onResolved = typeof onResolved === 'function' ? onResolved : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

```

- 链式调用为什么要返回新的 promise
如我们理解，为保证 then 函数链式调用，then 需要返回 promise 实例。但为什么返回新的 promise，而不直接返回 this 当前对象呢？看下面示例代码：

```
var promise2 = promise1.then(function (value) {
  return Promise.reject(3)
})
```

复制代码假如 then 函数执行返回 this 调用对象本身，那么 promise2 === promise1，promise2 状态也应该等于 promise1 同为 resolved。而 onResolved 回调中返回状态为 rejected 对象。考虑到 Promise 状态一旦 resolved 或 rejected就不能再迁移，所以这里 promise2 也没办法转为回调函数返回的 rejected 状态，产生矛盾。
handleResolved 函数功能为根据当前 promise 状态，异步执行 onResolved 或 onRejected 回调函数。因在 resolve 或 reject 函数内部同样需要相关功能，提取为单独模块。往下翻阅查看。

[ECMAScript 6 - 阮一峰](http://es6.ruanyifeng.com/#docs/promise)

[Promises/A+ 规范](https://promisesaplus.com/)

[参考文章掘金上的文章](https://juejin.im/post/5a30193051882503dc53af3c)
