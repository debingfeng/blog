# 学习Node.js从express开始

[toc]

## 安装依赖

- [Node.js安装](https://nodejs.org/zh-cn/) 选择稳定版本安装


http://www.expressjs.com.cn/starter/installing.html

// 进入常用代码目录或者本地web服务器根目录
## 启动nodejs基本应用 开启Hello world!
```
mkdir myapp

```

- 通过 npm init 命令为你的应用创建一个 package.json 文件。需要配合输入相关选项然后按enter下一步就好。 欲了解 package.json 是如何起作用,百度一下，你就知道

```
npm init

```
- 全局安装express

```
npm install express

```

- 本地工作目录安装

```
npm install express --save

```

- 进入 myapp 目录，创建一个名为 app.js 的文件，然后将下列代码复制进去：
```
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
```

- 启动nodejs应用，开启hello world

```
node app.js

```
## 使用Nodejs生成器，进入正常开发

- 全局安装express生成器

```
npm install express-generator -g

```

- 创建express应用


```
express myapp

```

- 然后安装所有依赖包：
```
cd myapp 

npm install

```
- 启动这个应用：

```
// （MacOS 或 Linux 平台）
DEBUG=myapp npm start

// windows平台

set DEBUG=myapp & npm start

```
![image](http://www.fengdb.com/public/images/express01.png)
-  浏览器中查看 http://localhost:3000/ 


![image](http://www.fengdb.com/public/images/express02.png)


 



