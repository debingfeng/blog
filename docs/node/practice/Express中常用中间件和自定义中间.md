# Express中常用中间件和自定义中间



在Express框架中，一个中间件是一个用于处理客户端请求的函数。一个HTTP服务器中可能会使用到各种中间件。当接收到一个客户端请求时，首先将该请求提交给第一个中间件函数，每一个中间件函数内部封装一个next回调函数，在一个中间件函数内部可以判断是否调用next回调函数来处理该客户端请求。

```javascript
function middleware(req,res,next){next()}
```

在Express框架中，使用应用程序实例对象的use方法来调用一个中间件，该方法的使用方式如下所示。

```
app.use([path],function)
```

<a name="ed24f16c"></a>
## 自定义中间

- 定义明customMiddleware.js

```javascript
let setHeader = function () {
    return function (req, res, next) {
        res.statusCode = 200;
        res.header = {
            'Content-Type': 'text/html'
        };
        res.head = '<head><meta charset="utf-8"/></head>';
        next();
    };
};
exports.setHeader = setHeader;
```

- 使用中间件

```javascript
const express = require('express');
const customMiddleware = require('./customMiddleware');
const app = express();
app.use(customMiddleware.setHeader());
```


<a name="6pjNO"></a>
## express内置中间件
![node_mid.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/424641/1584111206120-68a99cee-ea18-41a4-8be2-1456217afd2c.jpeg#align=left&display=inline&height=739&name=node_mid.jpg&originHeight=739&originWidth=1024&size=141940&status=done&style=none&width=1024)
