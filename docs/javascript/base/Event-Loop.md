---
sidebarDepth : 0
---

## **event loop是什么**

event loop顾名思义就是事件循环，为什么要有事件循环呢？因为V8是单线程的，即同一时间只能干一件事情，但是呢文件的读取，网络的IO处理是很缓慢的，并且是不确定的,如果同步等待它们响应，那么用户就起飞了。于是我们就把这个事件加入到一个 事件队列里(task),等到事件完成时，event loop再执行一个事件队列。

值得注意的是，每一种异步事件加入的 事件队列是不一样的。唯一的两个限制是同一个任务源中的事件必须属于同一个队列，并且必须在每个队列中按插入顺序处理任务。 也就是说由系统提供的执行task的方法，如 setTimeout setInterval setimmediate 会在一个task，网络IO会在一个task，用户的事件会在一个task。event-loop将会按照以下顺序执行


##  JavaScript的事件分两种

- 宏任务(macro-task)

> 包括整体代码script，setTimeout，setInterval

- 微任务(micro-task)
> Promise.then(非new Promise)，process.nextTick(node中)


## 事件的执行顺序

先执行宏任务，然后执行微任务，这个是基础，任务可以有同步任务和异步任务，同步的进入主线程，异步的进入Event Table并注册函数，异步事件完成后，会将回调函数放入Event Queue中(宏任务和微任务是不同的Event Queue)，同步任务执行完成后，会从Event Queue中读取事件放入主线程执行，回调函数中可能还会包含不同的任务，因此会循环执行上述操作。


[参考博客园文章](https://www.cnblogs.com/hanzhecheng/p/9046144.html)
