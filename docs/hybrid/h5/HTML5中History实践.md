---
sidebarDepth : 0
---

# HTML5 一 history API

[[TOC]]

## 简介
history:接口允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录。





## 兼容性支持

## pushState（H5新增）

**pushState**：pushState用来新增历史记录。

- pushState() 带有三个参数：一个状态对象，一个标题（现在被忽略了），以及一个可选的URL地址。下面将对这三个参数进行细致的检查：

    - state object — 状态对象是一个由 pushState()方法创建的、与历史纪录相关的JS对象。当用户定向到一个新的状态时，会触发popstate事件。事件的state属性包含了历史纪录的state对象。（译者注：总而言之，它存储JSON字符串，可以用在popstate事件中。）state 对象可以是任何可以序列化的东西。由于 火狐 会将这些对象存储在用户的磁盘上，所以用户在重启浏览器之后这些state对象会恢复，我们施加一个最大640k 的字符串在state对象的序列化表示上。如果你像pushState() 方法传递了一个序列化表示大于640k 的state对象，这个方法将扔出一个异常。如果你需要更多的空间，推荐使用sessionStorage或者localStorage。
    
    - title — 火狐浏览器现在已经忽略此参数，将来也许可能被使用。考虑到将来有可能的改变，传递一个空字符串是安全的做法。当然，你可以传递一个短标题给你要转变成的状态。（译者注：现在大多数浏览器不支持或者忽略这个参数，最好用null代替）
    
    - URL — 这个参数提供了新历史纪录的地址。请注意，浏览器在调用pushState()方法后不会去加载这个URL，但有可能在之后会这样做，比如用户重启浏览器之后。新的URL不一定要是绝对地址，如果它是相对的，它一定是相对于当前的URL。新URL必须和当前URL在同一个源下;否则，pushState() 将丢出异常。这个参数可选，如果它没有被特别标注，会被设置为文档的当前URL。
    
    
```

history.pushState({'history':'history'},'history','#hisory')


```

## replaceState（H5新增）
**replaceState**：pushState用来替换当前的增历史记录。


```
history.repalceState({'history':'repalceState'},'repalceState','#hisory')
```

<p>带有三个参数：一个状态对象，一个标题（现在被忽略了），以及一个可选的URL地址。下面将对这三个参数进行细致的检查：</p> <p><strong >state object ：</strong>— 状态对象是一个由 pushState()方法创建的、与历史纪录相关的JS对象。当用户定向到一个新的状态时，会触发popstate事件。事件的state属性包含了历史纪录的state对象。（译者注：总而言之，它存储JSON字符串，可以用在popstate事件中。）state 对象可以是任何可以序列化的东西。由于 火狐 会将这些对象存储在用户的磁盘上，所以用户在重启浏览器之后这些state对象会恢复，我们施加一个最大640k 的字符串在state对象的序列化表示上。如果你像pushState() 方法传递了一个序列化表示大于640k 的state对象，这个方法将扔出一个异常。如果你需要更多的空间，推荐使用sessionStorage或者localStorage。 </p> <p> <strong >title ：</strong>— 火狐浏览器现在已经忽略此参数，将来也许可能被使用。考虑到将来有可能的改变，传递一个空字符串是安全的做法。当然，你可以传递一个短标题给你要转变成的状态。（译者注：现在大多数浏览器不支持或者忽略这个参数，最好用null代替） </p> <p> <strong >URL ：</strong>— 这个参数提供了新历史纪录的地址。请注意，浏览器在调用pushState()方法后不会去加载这个URL，但有可能在之后会这样做，比如用户重启浏览器之后。新的URL不一定要是绝对地址，如果它是相对的，它一定是相对于当前的URL。新URL必须和当前URL在同一个源下;否则，pushState() 将丢出异常。这个参数可选，如果它没有被特别标注，会被设置为文档的当前URL。

## popstate事件（H5新增）

触发历史记录改变的事件，比如用户前进、后退等操作 会触发popstate事件。进而获取到通过pushState和replaceState传递的值。



```
 // 监听state事件
window.addEventListener('popstate',function (event) {
	
    console.log(event.state);

});
```


## history.back 回退

- 回退到上一个history记录

## history.forward 前进

- 前进一个history记录

## history.go 去往第n条记录

- 去往第几个history记录

## history.length 长度

- 获取浏览history记录的长度

## history.state 当前地址

- 获取当前的记录