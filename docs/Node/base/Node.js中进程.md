在操作系统中，每个应用程序都是一个进程类的实例对象。在Node.js中，使用process对象代表Node.js应用程序。该对象是一个全局对象，可以在REPL环境中或任何模块中访问该对象。该对象具有一些可被用来获取Node.js应用程序以及运行该应用程序的用户、运行环境的各种信息的属性、方法与事件。

### process对象下面有比较多的属性比如version、平台、处理器架构等。详情查看文档

### process对象下有一些方法

- memoryUsage

memoryUsage方法用于获取运行Node.js应用程序的进程的内存使用量。

- nextTick
nextTick方法用于将一个函数推迟到代码中所书写的下一个同步方法执行完毕时或异步方法的事件回调函数开始执行时调用，
```
process.nextTick(callback)
```
- exit方法

使用指定的 code 结束进程。如果忽略，将会使用 code 0。

- abort方法

这将导致 node 触发 abort 事件。会让 node 退出并生成一个核心文件。

- cwd方法
返回当前进程的工作目录

## 创建多进程

在Node.js中，同样提供一个child_process模块。通过该模块的使用，在Node.js应用程序的主进程运行之后，可以开启多个子进程。在多个子进程之间可以共享内存空间，可以通过子进程之间的互相通信来实现信息的交换，多个子进程之间也可以通过共享端口的方式将请求分配给多个子进程来执行。

在child_process模块中，提供多个可以开启子进程的方法。接下来，我们对这些方法进行详细介绍。

### 使用spawn方法开启子进程

```
child_process.spawn(command,[args],[options])
```
在spawn方法中，使用三个参数，其中command参数为必须指定的参数，args参数与options参数为可选参数。command参数值为一个字符串，用于指定需要运行的命令。args参数值为一个数组，其中存放了所有运行该命令时需要使用的参数，参数的指定顺序与数组中的元素顺序保持一致，如果不使用args参数，默认参数值为一个空数组。options参数值为一个对象，用于指定开启子进程时使用的选项。

```
var cp = require('child_process');
var sp1 = cp.spawn('node', ['test1.js', 'one', 'two', 'three', 'four'], {
    cwd: './test'
});
var sp2 = cp.spawn('node', ['test2.js'], {
    stdio: 'pipe'
});
sp1.stdout.on('data', function (data) {
    console.log('子进程标准输出: ' + data);
    sp2.stdin.write(data);
});
sp1.on('exit', function (code, signal) {
    console.log('子进程退出，退出代码为：' + code);
    process.exit();
});
```

### 使用fork方法开启子进程

在child_process模块中，可以使用fork方法开启一个专用于运行Node.js中的某个模块文件的子进程。该方法的使用方式如下所示。

```
child_process.fork(modulePath,[args],[options])
```
在fork方法中，使用三个参数，其中modulePath参数为必须指定的参数，args参数与options参数为可选参数。mod-ulePath参数值为一个字符串，用于指定需要运行的Node.js模块文件路径及文件名。args参数值为一个数组，其中存放了所有运行该模块文件时需要使用的参数，参数的指定顺序与数组中的元素顺序保持一致，如果不使用args参数，默认参数值为一个空数组。options参数值为一个对象，用于指定开启子进程时使用的选项。

- 示例
```
var cp = require('child_process');
var sp1 = cp.fork('./test/test1.js', ['one', 'two', 'three', 'four'], {
    silent: true
});
var sp2 = cp.fork('test2.js');
sp1.stdout.on('data', function (data) {
    console.log('子进程标准输出: ' + data);
    sp2.send(data.toString());
});
sp1.on('exit', function (code, signal) {
    console.log('子进程退出，退出代码为：' + code);
    process.exit();
});
sp1.on('error', function (err) {
    console.log('子进程开启失败: ' + err);
    process.exit();
});
```
### 使用execFile方法开启子进程

在child_process模块中，可以使用exec方法开启一个用于运行某个命令的子进程并缓存子进程中的输出结果。该方法的使用方式如下所示。
```
child_process.exec(command,[options],[callback])
```

### 使用exec方法开启子进程

在exec方法中，使用三个参数，其中command参数为必须指定的参数，options参数与callback参数为可选参数。com-mand参数值为一个字符串，用于指定需要运行的命令。options参数值为一个对象，用于指定开启子进程时使用的选项。

```
child_process.exec(command,[optio
```

- 示例

```
var cp = require('child_process');
var sp1 = cp.exec('node test1.js one two three four', {
    cwd: './test'
}, function (err, stdout, stderr) {
    if (err) {
        console.log('子进程开启失败: ' + err);
        process.exit();
    } else {
        console.log('子进程标准输出: ' + stdout.toString());
        sp2.stdin.write(stdout.toString());
    }
});
var sp2 = cp.exec('node test2.js', function (err, stdout, stderr) {
    process.exit();
});
```
## 在子进程中运行Node程序
在child_process模块中，可以使用execFile方法开启一个专用于运行某个可执行文件的子进程。该方法的使用方式如下所示。

```
child_process.execFile(file,[args],[options],[callback])
```

- 示例

```
var cp = require('child_process');
var sp1 = cp.execFile('test1.bat', ['one', 'two', 'three', 'four'], {
    cwd: './test'
}, function (err, stdout, stderr) {
    if (err) {
        console.log('子进程开启失败: ' + err);
        process.exit();
    } else {
        console.log('子进程标准输出: ' + stdout.toString());
        sp2.stdin.write(stdout.toString());
    }
});
var sp2 = cp.execFile('test2.bat');
```

## 在多个子进程中运行Node.js应用程序

一个Node.js应用程序只能使用在一个线程中。最近，为了充分发挥多核CPU的优势，Node.js中提供了一个cluster模块，允许在多个子进程中运行不同的Node.js应用程序

### 使用fork方法创建worker对象
在cluster模块中，可以使用fork方法开启多个子进程，在每个子进程中创建一个Node.js应用程序的实例，并且在该应用程序中运行一个模块文件（默认为当前运行的Node.js应用程序中使用的主模块文件，但可以使用稍后介绍的setupMaster方法修改需要在子进程中运行的模块文件）。。

```
cluster.fork([env])
```
在fork方法中，使用一个可选参数，参数值为一个对象，用于以“键名/键值”的形式为子进程指定环境变量。

fork方法返回一个隐式创建的worker对象，代表使用fork方法开启的子进程中运行的Node.js应用程序实例对象。

另外，在cluster模块中，分别提供了一个isMaster属性与一个isWorker属性，这两个属性的属性值均为一个布尔值。如果Node.js应用程序的实例对象运行在主进程中，则isMaster属性值为true，如果Node.js应用程序的实例对象运行在子进程中，则isWorker属性值为true。

- 示例

```
var cluster = require('cluster');
var http = require('http');
if (cluster.isMaster) {
    cluster.fork();
    console.log('这段代码被运行在主进程中。');
} else {
    http.createServer(function (req, res) {
        if (req.url !== "/favicon.ico") {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write('<head><meta charset="utf-8"/></head>');
            res.end('你好\n');
            console.log("这段代码被运行在子进程中。");
        }
    }).listen(1337);
}
```
### worker对象的方法与事件
