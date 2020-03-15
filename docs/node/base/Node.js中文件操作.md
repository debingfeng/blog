# Node.js文件操作

在Node.js中，提供一个fs模块，以实现文件及目录的读写操作.<br />[Node.js v12.16.1 fs api参考文档](http://nodejs.cn/api/fs.html#fs_file_system)
<a name="GIRGl"></a>
## 读取与写入文件
<a name="y2Y8p"></a>
### 两种方法读取readFile和readFileSync

- 语法： fs.readFile(filename, [options], callback)

   在readFile方法中，使用三个参数，其中filename参数与callback参数为必须指定的参数，options参数为可选参数。file-name参数用于指定读取文件的完整文件路径及文件名，options参数值为一个对象，在其中指定读取文件时需要使用的选项，在该参数值对象中可以使用flag属性指定对该文件采取什么操作，默认值为'r'（如果指定读取的文件不存在，则抛出异常）.

| 操作 | 说明 |
| --- | --- |
| r | 读   |
| r+ | 读+写 |
| rs | 同步读取并通知忽略本地文件缓存 |
| w | 写入文件 |
| wx | 写以排他的形式 |
| w+ | 读写，如果不存在则新建文件 |
| wx+ | 写入文件以排他的方式 |
| a | 追加文件 |
| a+ | 追加并写入 |
| ax+ | 追加写入并以排他的形式 |


  
```javascript
// 同步方法
var fs = require('fs');
var data = fs.readFileSync('./index.html', 'utf8');// 等待操作返回结果，然后利用该结果
console.log(data);


// 异步方法
var fs = require('fs');fs.readFile('./index.html', 'utf8', function(err, data) {    
  // 操作结果作为回调函数的第二个参数返回
  console.log(data);
});

```

<a name="n5wbd"></a>
### 从指定位置处开始写文件
<br />fs模块中的open方法或openSync方法打开文件。这里首先介绍open方法。

```javascript
fs.open(filename, flags,[mode],callback)
```
在open方法中，可以使用4个参数，其中filename参数、flags参数与callback参数为必须指定的参数，mode参数为可选参数。filename参数、flags参数与mode参数的作用及其指定方法与readFile方法中的filename参数、options参数中的flags属性值与mode属性值的作用及指定方法完全相同。
<a name="XwsUA"></a>
## 创建与读取目录

<a name="C1QC9"></a>
### 创建目录
在fs模块中，可以使用mkdir方法创建目录，该方法的使用方式如下所示。

```javascript
fs.mkdir(path,[mode],callback)
```
在mkdir方法中，使用三个参数，其中path参数与callback参数为必须输入的参数，mode参数为可选参数。path参数用于指定需要被创建的目录的完整路径及目录名；mode参数值用于指定该目录的权限，默认值为0777（表示任何人可读写该目录）；callback参数用于指定创建目录操作完毕时调用的回调函数，该回调函数中使用一个参数，参数值为创建目录操作失败时触发的错误对象。

```javascript
var fs = require('fs');
fs.mkdir('./test', function (err) {
    if (err) console.log("创建目录操作失败。");
    else console.log("创建目录操作成功。");
});
```

<a name="u5TFW"></a>
### 读取目录
在fs模块中，可以使用readdir方法读取目录。**fs.readdir(path,callback)**在readdir方法中，使用两个参数，其中path参数用于指定需要被读取的目录的完整路径及目录名；callback参数用于指定读取目录操作完毕时调用的回调函数

```javascript
var fs = require('fs');
fs.readdir('./', function (err, files) {
    if (err) console.log('读取目录操作失败。');
    else console.log(files);
});
```

<a name="5PFib"></a>
## 查看与修改文件或者目录
在fs模块中，可以使用stat方法或lstat方法查看一个文件或目录的信息。这两个方法的唯一区别是当查看符号链接文件的信息时，必须使用lstat方法。这两个方法的使用方式如下所示。<br />**fs.stat(path, callback)**<br />**fs.lstat(path, callback)**<br />**<br />**callback(err,stats)**stats是一个对象包含了文件或者目录的详细信息。<br />**
```javascript
var fs = require('fs');
fs.stat('./message.txt', function (err, stats) {
  
    console.log(stats);
});
```

<a name="gznJo"></a>
### 检查文件是否存在fs.exists(path, callback)

<a name="qxFlM"></a>
### 获取文件或目录的绝对路径fs.realpath(path,[cache],callback)

<a name="Knzno"></a>
### 修改文件访问时间及修改时间fs.utimes(path,atime,mtime,callback)

<a name="78Fh2"></a>
### 修改文件或目录的读写权限fs.chmod(path, mode, callback)

<a name="rWvSu"></a>
## 如何对文件执行各种操作

<a name="MCHqD"></a>
### 移动文件或者目录fs.rename(oldPath,newPath,callback)

<a name="Zyy18"></a>
### 创建或者删除文件的硬连接fs.link/unlink(srcpath,dstpath,callback)

<a name="F092v"></a>
### 创建与查看符号连接fs.symlink/readlink(srcpath,dstpath,[type],callback)

<a name="1e9af"></a>
### 截断文件fs.truncate(filename,len,callback)

<a name="jZSsi"></a>
### 删除目录fs.rmdir(path,callback)

<a name="pysiW"></a>
### 监视文件或者目录fs.watchFile(filename,[options],listener)



<a name="lTjMw"></a>
## Node.js中流的概念以及相关操作

在一个应用程序中，流是一组有序的、有起点和终点的字节数据的传输手段。在应用程序中各种对象之间交换与传输数据的时候，总是先将该对象中所包含的数据转换为各种形式的流数据（即字节数据），再通过流的传输，到达目的对象后再将流数据转换为该对象中可以使用的数据。

在Node.js中，使用各种实现了stream.Readable接口的对象来将对象数据读取为流数据，所有这些对象都是继承了Even-tEmitter类的实例对象，在读取数据的过程中，将可能触发各种事件。

在Node.js中，可以使用flowing模式与非flowing模式来读取数据。当使用flowing模式时，将使用操作系统的内部I/O机制来读取数据，这将允许你以最快的速度来读取数据。当使用非flowing模式时，你必须显式调用对象的read方法来读取数据。

<a name="NwBdK"></a>
### 创建读流对象createReadStream和流的读取 stream.Readable

```javascript
var fs = require('fs');
var file = fs.createReadStream('./message.txt');
var out = fs.createWriteStream('./anotherMessage.txt');
file.pipe(out, {
    end: false
});
file.on('end', function () {
    out.end('再见。');
});
```

<a name="Yqw8b"></a>
### 创建写入流对象.createWriteStream和流的写入stream.Writeable

```javascript
var fs = require('fs');
var out = fs.createWriteStream('./message.txt');
out.on('error', function (err) {
    console.log('写文件操作发生错误。');
});
out.write('一些测试数据。');
out.end();
out.write('一些新数据。'); // 该行代码将引发一个写操作错误
```

<a name="iREwx"></a>
## 如何利用文件模块转换路径

在Node.js中，提供了一个[**path**](http://nodejs.cn/api/path.html)模块，在这个模块中，提供了许多实用的、可被用来处理与转换路径的方法及属性。<br />[**path文档**](http://nodejs.cn/api/path.html)
<a name="cLoVU"></a>
### normalize方法:
该方法将非标准路径字符串转换为标准路径字符串

<a name="18e6x"></a>
### join方法
该方法将多个参数值字符串结合为一个路径字符串

<a name="nfRAJ"></a>
### resolve方法
该方法将多个参数值字符串结合为一个路径字符串

<a name="e9yig"></a>
### relative方法
该方法用于获取两个路径之间的相对关系

<a name="CuH1c"></a>
### dirname方法
该方法用于获取一个路径中的目录名

<a name="bLDFM"></a>
### basename方法
basename方法用于获取一个路径中的文件名

<a name="YcIPM"></a>
### extname方法
extname方法用于获取一个路径中的扩展名

<a name="UY6Xx"></a>
### path.sep属性
属性值为操作系统指定的文件分隔符，可能的属性值为“\\”（在Windows操作系统中）或“/”（在UNIX操作系统中）。
<a name="23GnB"></a>
### path.delimiter属性
属性值为操作系统指定的路径分隔符，可能的属性值为“；”（在Windows操作系统中）或“：”（在UNIX操作系统中）。
