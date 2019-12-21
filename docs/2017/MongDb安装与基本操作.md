[参考教程](http://www.runoob.com/mongodb/mongodb-window-install.html)

## 官方网站下载

[windows版本下载](https://www.mongodb.com/download-center?jmp=nav#community)


特别注意：安装过程不要勾选安装compass 相当慢，有时候甚至卡住一动不动


## 管理数据目录

MongoDB将数据目录存储在 db 目录下。但是这个数据目录不会主动创建，我们在安装完成后需要创建它。请注意，数据目录应该放在根目录下（(如： C:\ 或者 D:\ 等 )。


```
cd d:

mkdir mongdb



```
## 命令行下运行 MongoDB 服务器

为了从命令提示符下运行 MongoDB 服务器，你必须从 MongoDB 目录的 bin 目录中执行 mongod.exe 文件。

```
C:\mongodb\bin\mongod --dbpath c:\data\db

// 执行成功后，会输出如下信息

2015-09-25T15:54:09.212+0800 I CONTROL  Hotfix KB2731284 or later update is not
installed, will zero-out data files
2015-09-25T15:54:09.229+0800 I JOURNAL  [initandlisten] journal dir=c:\data\db\j
ournal
2015-09-25T15:54:09.237+0800 I JOURNAL  [initandlisten] recover : no journal fil
es present, no recovery needed
2015-09-25T15:54:09.290+0800 I JOURNAL  [durability] Durability thread started
2015-09-25T15:54:09.294+0800 I CONTROL  [initandlisten] MongoDB starting : pid=2
488 port=27017 dbpath=c:\data\db 64-bit host=WIN-1VONBJOCE88
2015-09-25T15:54:09.296+0800 I CONTROL  [initandlisten] targetMinOS: Windows 7/W
indows Server 2008 R2
2015-09-25T15:54:09.298+0800 I CONTROL  [initandlisten] db version v3.0.6
```

## 启动服务

安装 MongoDB服务

通过执行mongod.exe，使用--install选项来安装服务，使用--config选项来指定之前创建的配置文件。


```
C:\mongodb\bin\mongod.exe --config "C:\mongodb\mongod.cfg" --install
```

要使用备用 dbpath，可以在配置文件（例如：C:\mongodb\mongod.cfg）或命令行中通过 --dbpath 选项指定。

如果需要，您可以安装 mongod.exe 或 mongos.exe 的多个实例的服务。只需要通过使用 --serviceName 和 --serviceDisplayName 指定不同的实例名。只有当存在足够的系统资源和系统的设计需要这么做。

### 启动MongoDB服务


```
net start MongoDB
```

### 关闭MongoDB服务

```
net stop MongoDB
```

### 移除 MongoDB 服务

```
C:\mongodb\bin\mongod.exe --remove
```

命令行下运行 MongoDB 服务器 和 配置 MongoDB 服务 任选一个方式启动就可以。