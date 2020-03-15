# Node.js中交互式环境-REPL

在Node.js中，提供了一个交互式运行环境——REPL。在命令行中只需要输入“node”,并按下回车键即可进入REPL运行环境。命令行窗口中将会显示REPL运行环境中的命令提示符（默认为“>”）。接下来就可以进入进行一些如同在浏览器console控制台上的环境。可以方便的使用很多命令进行调试。

[](http://nodejs.cn/api/repl.html)

<a name="fRjgT"></a>
## 常用的命令

<a name="lgDNK"></a>
### 下划线“_”: 用来使用最近的变量
先定义一个变量a,然后"_"就可以获取到变量a的值。<br />![node02-01.png](https://cdn.nlark.com/yuque/0/2020/png/424641/1583549244018-910df66d-7b75-4a2d-b7b5-ef0c84433c32.png#align=left&display=inline&height=363&name=node02-01.png&originHeight=363&originWidth=589&size=27307&status=done&style=none&width=589)

<a name="9KRtA"></a>
### 在REPL运行函数
可以在REPL运行环境中直接运行某个函数。在REPL运行环境中，可以将一个表达式（如本例中的一个函数）分为多行进行书写，当该表达式未书写完成时，REPL运行环境将为该表达式的每一行（第一行除外）添加英文省略符（三个小圆点），输入表达式及其执行结果如图2-3所示。<br />![node02-02.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/424641/1583549396592-292a0fe1-1f5a-492c-acc7-28ab49c4a566.jpeg#align=left&display=inline&height=230&name=node02-02.jpg&originHeight=230&originWidth=698&size=45920&status=done&style=none&width=698)

<a name="Mkri8"></a>
## 其他一些命令

- **ctrl + c** - 退出当前终端。<br />
- **ctrl + c 按下两次** - 退出 Node REPL。<br />
- **ctrl + d** - 退出 Node REPL.<br />
- **向上/向下 键** - 查看输入的历史命令<br />
- **tab 键** - 列出当前命令<br />
- **.help** - 列出使用命令<br />
- **.break** - 退出多行表达式<br />
- **.clear** - 退出多行表达式<br />
- **.save _filename_** - 保存当前的 Node REPL 会话到指定文件<br />
- **.load _filename_** - 载入当前 Node REPL 会话的文件内容。

更多详细信息参考官方文档
> [Node.js-REPL API文档](http://nodejs.cn/api/repl.html)

