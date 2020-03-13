---
sidebarDepth : 0
---

# Node.js使用

[[toc]]

## ejs - Node.js模板的引擎的选择

### 常用语法

- 用<%...%>包含js代码
- 用<%=...%>输出变量 变量若包含 '<' '>' '&'等字符 会被转义
- 用<%-...%>输出变量 不转义
- 用<%- include('user/show') %>引入其他模板 包含 ./user/show.ejs
- 用<%# some comments %>来注释，不执行不输出
- <%% 转义为 '<%'
- <% ... -%> 删除新的空白行模式?
- <%_ ... _%> 删除空白符模式




## 为什么选择ejs

[参考了这个讨论](https://www.zhihu.com/question/20355486)

看过了pug(以前叫jade)的语法，确实简洁，

class提示功能等不方便，对于编写前端Html的人来说，真的不习惯。

格式要求比较严格


ejs语法比较符合 我们的需求，在Html里面嵌套，符合长期编写前端页面的人。

## 基本功能使用

### 安装


```
npm install ejs
```

### 在APP.js配置


```

var ejs = require('ejs');

//注册ejs模板为html页。简单的讲，就是原来以.ejs为后缀的模板页，现在的后缀名可以//是.html了

app.engine('.html', ejs.__express);

//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');

//设置模板文件文件夹,__dirname为全局变量,表示网站根目录
app.set('views', __dirname + '/views');

// 设置可访问静态资源目录
app.use(express.static(__dirname + '/'));


```

### 在路由中index.js中设置


```
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    var users = [
    	{name: 'tobi', email: 'tobi@learnboost.com'},
    	{name: 'loki', email: 'loki@learnboost.com'},
    	{name: 'jane', email: 'jane@learnboost.com'}
    ];
    
    //渲染模板
    res.render('index', {
    	list: users,
    	title: "EJS example",
    	header: "Some users"
    });

});

module.exports = router;

```

### 在模板中 views/index.html中设置


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta content="telephone=no" name="format-detection">
    <meta content="email=no" name="format-detection">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <meta name="apple-touch-fullscreen" content="yes"/>
    <title> <%= title %></title>
</head>
<body>
<header class="navbar navbar-collapse">
    <div class="container"><h2><%= header %></h2></div>
</header>
<div class="container">

    <table class="table table-responsive table-hover">
        <tr>
            <th>名字</th>
            <th>邮箱</th>
        </tr>

        <% for(var i in list) { %>
        <tr>
            <td><%= list[i].name  %></td>
            <td><%= list[i].email  %></td>
        </tr>
        <% } %>
    </table>
</div>

</body>
</html>

```
![效果图](http://www.fengdb.com/public/images/express03.png)






