# Node.js中创建HTTP服务端及客户端

在Node.js中，提供了http模块与https模块，专用于创建HTTP服务器、HTTP客户端，以及HTTPS服务器及HTTPS客户端，同时实现这些服务器端与客户端之中所需进行的处理。

[http官方文档](https://nodejs.org/docs/latest-v13.x/api/http.html)
<a name="rIeBI"></a>
## 创建HTTP Server
server.listen(port,[host],[backlog],[callback])

```javascript
var http = require('http');

const server = http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});

    // 发送响应数据 "Hello World"
    response.end('<h2>Hello World</h2>\n');
}).listen(8888);


```
<a name="jlieh"></a>
### 监听连接

```javascript
// 服务端监听
server.on('listening', , function () {
    console.log('服务器端开始监听。');
    server.close();
});
```

<a name="9WKm5"></a>
### 连接关闭监听

```javascript
// 服务器端关闭
server.on('close', function () {
    console.log('服务器已被关闭。');
});
```

<a name="BJAuj"></a>
### 连接出现错误时监听

```javascript

// 服务器出现错误时
server.on('error', function (e) {
  if (e.code == 'EADDRINUSE') { // 当地址及端口被占用时错误代码为'EADDRINUSE'      
    // 可以在此处指定当地址及端口被占用时所需执行的处理    
  }
});
```

<a name="r9eTb"></a>
### 连接超时监听

```javascript

// 连接出现超时时
server.on('timeout',function(socket){// 回调函数代码略
});
```

<a name="2MpAL"></a>
### 获取客户端信息
HTTP服务器接收到客户端请求时调用的回调函数中的第一个参数值为一个http.IncomingMessage对象，该对象用于读取客户端请求流中的数据，因此，当从客户端请求流中读取到新的数据时触发data事件，当读取完客户端请求流中的数据时触发end事件。

```javascript
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  // req为客户端的信息包括请求方法、请求地址、请求头信息、http版本等信息
    if (req.url !== "/favicon.ico") {
        var out = fs.createWriteStream('./request.log');
        out.write('客户端请求所用方法为：' + req.method + '\r\n');
        out.write('客户端请求所用url字符串为:' + req.url + '\r\n');
        out.write('客户端请求头对象为：' + JSON.stringify(req.headers) + '\r\n');
        out.end('客户端请求所用HTTP版本为：' + req.httpVersion);
    }
    res.end();
}).listen(1337, "127.0.0.1");
```

<a name="Mvrx3"></a>
### 转换URL字符串与查询字符串
在Node.js中，提供了一个url模块与一个Query String模块，分别用来转换完整URL字符串与URL中的查询字符串。

**querystring.parse(str,[sep],[eq],[options])**<br />**在parse方法中，可以使用4个参数，其中str参数为必须指定参数，sep参数、eq参数与options参数为可选参数。

```javascript
> querystring.parse('userName=Lulingniu&age=40&sex=male'); {
    username: 'Lulingniu',
    age: '40',
    sex: 'male'
} > querystring.parse('userName=Lulingniu&age=40&sex=male', '!'); {
    username: 'Lulingniu&age=40&sex=male'
} >
```


<a name="FOWJc"></a>
### HTTP Server响应客户端
在createServer方法的参数值回调函数或服务器对象的re-quest事件函数中的第二个参数值为一个http.ServerResponse对象，可以利用该对象发送服务器端响应流。

**response.writeHead(statusCode,[reasonPhrase],[headers])**<br />**
```javascript
var http = require('http');
var server = http.createServer(function (req, res) {
    if (req.url !== "/favicon.ico") {
        res.setHeader("Content-Type", "text/plain");
        res.setHeader("Access-Control-Allow-Origin", "http:// localhost");
        res.write("你好");
    }
    res.end();
}).listen(1337, "localhost");
```

<a name="gZLKR"></a>
## HTTP客户端
在Node.js中，也可以很轻松地向任何网站发送请求并读取该网站响应数据并且很方便监听各种请求事件。

在http模块中，可以使用request方法向其他网站请求数据。request方法的使用方式如下所示。

```javascript
var req=http.request(options,callback)
```

- 示例

```javascript
var http = require('http');
var options = {
    hostname: 'www.microsoft.com',
    port: 80,
    path: '/',
    method: 'GET'
};
var req = http.request(options, function (res) {
    console.log('状态码: ' + res.statusCode);
    console.log('响应头: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('响应内容: ' + chunk);
    });
});
req.end();
```

<a name="l910D"></a>
### 可以向本地server请求数据

```javascript
var http = require('http');
var server = http.createServer(function (req, res) {
    if (req.url !== "/favicon.ico") {
        req.on('data', function (data) {
            console.log('服务器端接收到数据：' + data);
            res.end();
        });
    }
}).listen(1337, "127.0.0.1");
```

```javascript
var http = require('http');
var options = {
    hostname: 'localhost',
    port: 1337,
    path: '/',
    method: 'POST'
};
var req = http.request(options);
req.write('你好。');
req.end('再见。');
```

<a name="iUvst"></a>
## 作为代理服务器
在Node.js中，可以轻松地实现一个代理服务器。接下来，我们看一个代理服务器的制作示例。在该示例代码中，我们首先创建一个HTTP服务器，当服务器接收到客户端请求后，向“http://www.amazon.cn”网站请求数据，当从“http://www.amazon.cn”网站接收到响应数据后，将响应数据发送给客户端。

```javascript
var http = require('http');
var url = require('url');
var server = http.createServer(function (sreq, sres) {
    var url_parts = url.parse(sreq.url);
    var opts = {
        host: 'www.amazon.cn',
        port: 80,
        path: url_parts.pathname,
        headers: sreq.headers
    };
    var creq = http.get(opts, function (cres) {
        sres.writeHead(cres.statusCode, cres.headers);
        cres.pipe(sres);
    });
    sreq.pipe(creq);
});
server.listen(1337, '127.0.0.1');
```

