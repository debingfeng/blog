# Node.js基础知识

<a name="Mff2E"></a>
## Node.js控制台命令

在Node.js中，使用console对象代表控制台（在操作系统中的表现形式为一个操作系统中指定的字符界面，例如，在Win-dows操作系统中为一个命令提示窗口）。在Node.js中，可以通过console对象的各种方法向控制台中进行标准输出流与标准错误输出流的输出。
<a name="bjxHE"></a>
### 常用命令

| 命令 | 作用 |
| :--- | --- |
| console.log | 用于进行标准输出流的输出 |
| console.error | 用于进行标准错误输出流的输出 |
| console.dir | 用于查看一个对象中的内容并且将该对象的信息输出到控制台中。 |
| console.time与Endtime | 当需要统计一段代码的执行时间时，可以使用console.time方法与console.timeEnd方法，其中con-sole.time方法用于标记开始时间，console.timeEnd方法用于标记结束时间，并且将结束时间与开始时间之间经过的毫秒数在控制台中输出 |
| console.trace | 用于将当前位置处的栈信息作为标准错误信息进行输出 |
| console.asset | 用于对一个表达式的执行结果进行评估，如果该表达式的执行结果为false，则输出一个消息字符串并抛出AssertionError异常。 |

<a name="vVYp7"></a>
## Node.js中的全局作用域及全局函数

<a name="ntOql"></a>
### 定时器函数介绍、调用与取消调用

- setTimeout函数与clearTimeout函数
- setInterval函数与clearInterval函数
- 定时器对象的unref方法与ref方法

怎么使用相信学过Js的人都会使用，主要介绍调用和取消调用<br />unref用于取消定时器对象回调函数的调用，ref则用于恢复调用。

```javascript

var testTimer = setTimeout(()=>{ console.log('xxx')},2000);

testTimer.unref()// 这里取消了定时器调用

testTimer.ref()// 恢复调用



```

<a name="dywwh"></a>
## 与模块相关的函数和变量

- require: 引用模块
- require.resolve：  获取完整的模块路径
- require.cache：  获取缓存中的模块

-  __filename变量： 获取当前模块的文件名称
- __dirname变量：获取当前模块的目录名称
- exports
- module.exports

 


<a name="fBwbU"></a>
## 事件与事件环机制

Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。<br />Node.js 几乎每一个 API 都是支持回调函数的。<br />Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。<br />Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

在Node.js的用于实现各种事件处理的event模块中，定义了一个EventEmitter类。所有可能触发事件的对象都是一个继承了EventEmitter类的子类的实例对象，在Node.js中，为Even-tEmitter类定义了许多方法，所有与对象的事件处理函数的绑定及解除相关的处理均依靠这些方法的调用来执行。

![node01.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/424641/1583593395295-620ff24b-451e-4dbd-800d-9ac9c4d80f68.jpeg#align=left&display=inline&height=345&name=node01.jpg&originHeight=345&originWidth=1024&size=67136&status=done&style=none&width=1024)
<a name="a9mkX"></a>
### EventEmitter类

在Node.js的用于实现各种事件处理的event模块中，定义了一个EventEmitter类。所有可能触发事件的对象都是一个继承了EventEmitter类的子类的实例对象，在Node.js中，为Even-tEmitter类定义了许多方法，所有与对象的事件处理函数的绑定及解除相关的处理均依靠这些方法的调用来执行。这些方法见表3-1（表中的event代表事件名，listener代表事件处理函数，中括号内的参数代表该参数为可选参数）。

![node_event.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/424641/1584111643581-d3aea4f8-998c-4678-a7a7-7a1ea0581394.jpeg#align=left&display=inline&height=345&name=node_event.jpg&originHeight=345&originWidth=1024&size=67136&status=done&style=none&width=1024)
