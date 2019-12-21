# Angular8+教程01-安装、创建项目和运行

## 前置条件

Angular 需要 Node.js 版本 10.9.0及以上版本和NPM或者yarn包管理工具。

建议使用NVM管理本地Node版本，[参考NVM](https://github.com/nvm-sh/nvm)

## 安装Angular-cli

我们可以使用angular-cli来创建Angular项目和生成代码等功能，以及执行各种自动化任务，如运行本地服务ng serve,打包ng build,测试ng test

```javascript

npm install -g @angular/cli

```

## 创建项目

在适当的工作空间内创建项目。

```javascript
ng new ng-demo
```

## 运行项目
ng serve 命令会启动开发服务器、监视文件，并在这些文件发生更改时重建应用。
运行完命令后会自动打开浏览器，打开 http://localhost:4200/。

```javascript
// 转到项目目录
cd ng-demo
// 开启本地服务
ng serve --open
```

## 了解项目目录概况

![ng-demo](./imgs/ng01.png)

下一步，我们将一起学习Angular的组件相关。



