---
sidebarDepth : 0
---

# gulp自动化构建工具

## 为什么要使用gulp自动化构建工具
构建工具能够自动执行我们前端常见的前端任务，可以合并、压缩、加密、编译文件等，能提高生产力。
目前比较流行的构建工具有gulp和grunt，看了这两个工具，觉得gulp比较好，因为gulp语法比较简单明了，而且执行效率比grunt高，所以就用gulp了。

## 配置环境
gulp是基于node实现的，那么我们就需要先安装 node。
http://nodejs.cn/
打开网址点击下载安装，下载好node就可以安装我们需要的gulp工具
检查node是否安装和版本 打开cmd输入
```
node -v
```
如果有版本显示，说明安装成功，接下来可以使用npm命令安装gulp

## 安装
注：安装完node后，请使用node.js command prompt命令行来操作npm gulp 等命令。因为不使用node.js无法检测和使用安装gulp等,记住，一切基于node.js。

Gulp需要全局安装，然后再在项目的开发目录中安装为本地模块。先进入项目目录，运行下面的命令。
```
全局安装
npm install -g gulp  
本地安装
npm install --save-dev gulp
```
## Gulp的配置文件
项目根目录中的gulpfile.js，是Gulp的配置文件。
下面就是一个简单配置的gulpfile.js文件。
<pre>
```
//引入gulp
var gulp = require('gulp');
//声明引入js压缩插件
var uglify = require('gulp-uglify');

gulp.task('script', function () {
//找到需要压缩的js路径
  gulp.src('js/app.js')
  //执行方法
    .pipe(uglify())
    //创建路径
    .pipe(gulp.dest('build'))
});
```
</pre>

## 除了安装gulp以外，不同的任务还需要安装不同的gulp插件模块。
### gulp常见插件
下面就是我们项目常见的插件
<pre>
```
本地安装
npm install -save-dev gulp-uglify

gulp-uglify: 压缩js
gulp-imagemin: 压缩图片
gulp-ruby-sass: 支持sass
gulp-minify-css: 压缩css
gulp-concat-css : 合并css
gulp-jshint: 检查js
gulp-uglify: 压缩js
gulp-concat: 合并文件
gulp-rename: 重命名文件
gulp-htmlmin: 压缩html
gulp-clean: 清空文件夹
gulp-uncss-task ：删除没用css
gulp-html-replace :html替换合并后的js css
```
</pre>
## 执行script任务时，就在项目目录中执行下面命令就可以了。
```
 gulp script   //script 是自己定义的模块名
```

## 完整的配置文档（用于参考）
<pre>
```
/*
参考代码网址：
http://www.ido321.com/1622.html           
http://colobu.com/2014/11/17/gulp-plugins-introduction/#gulp-rename            
https://github.com/nimojs/gulp-book  
 */
// 获取 gulp
var gulp = require('gulp'),
    // js 压缩插件 （用于压缩 JS）
    uglify = require('gulp-uglify'),
    // 压缩css插件(cssnano将取代gulp-minify-css)
    minifyCSS = require('gulp-minify-css'),
    cssnano = require('gulp-cssnano'),
    // 获取 gulp-imagemin 模块
    imagemin = require('gulp-imagemin'),
    // 重命名 插件
    rename = require('gulp-rename'),
    // 压缩html插件
    htmlmin = require('gulp-htmlmin'),
    // 合并文件
    concat = require("gulp-concat"),
    // html 文件对合并文件后的替换处理插件
    htmlReplace = require("gulp-html-replace"),
    // 复制文件（文件拷贝）
    copy = require('copy'),
    // 清除文件
    del = require('del');

// 版本号
var APP_VERSION = 'v.1.0';

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    // 1. 找到文件
    gulp.src('js/*.js')
    // 2. 压缩文件
        .pipe(uglify())
    // new: 压缩前修改压缩后新文件名字
        .pipe(rename( function(path){
          path.basename += "_" + APP_VERSION; 
        } ) )
    // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
});

// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task('css', function () {
    // 1. 找到文件
    gulp.src('css/*.css')
    // 2. 压缩文件
        .pipe(minifyCSS())
    // 3. 另存为压缩文件
        .pipe(gulp.dest('dist/css'))
});

// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task('images', function () {
    // 1. 找到图片
    gulp.src('images/*.*')
    // 2. 压缩图片
        .pipe(imagemin({
            progressive: true
        }))
    // 3. 另存图片
        .pipe(gulp.dest('dist/images'))
});

// 合并js 任务(合并压缩成功后的 js文件)
gulp.task('concat', function () {
    gulp.src('dist/js/*.js')  //要合并的文件
    .pipe( concat('all.js') )  // 合并匹配到的js文件并命名为 "all.js"
    .pipe( gulp.dest('dist/js') );
});

// 解决 gulp 合并文件后， html调用代码对应替换
gulp.task('htmlreplace', function(){
  gulp.src('canvas_test.html')
      .pipe( htmlReplace({'js': 'js/all.js'}) )
      .pipe( gulp.dest('dist/') );
});
// 压缩html 任务
gulp.task('htmlmin', function () {
    var options = {
        collapseWhitespace: true,//压缩HTML
        //省略布尔属性的值 <input checked="true"/> ==> <input />
        collapseBooleanAttributes: false,
        //删除所有空格作属性值 <input id="" /> ==> <input />
        removeEmptyAttributes: true,
        //删除<script>的type="text/javascript"
        removeScriptTypeAttributes: true,
        //删除<style>和<link>的type="text/css"
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});

// 清除文件任务
gulp.task('clean', function(cb){
   del(['dist/*']);
   cb();
});

// 复制任务(连续复制多个文件时，最好加上回调函数)
gulp.task('copy', function(cb){
    copy(['copy_file2.txt', 'copy_file.txt'], 'dist/');
    cb();
});


/*************************************************************
 *                         组合任务      
 ************************************************************/

// js 压缩合并任务
gulp.task('ugconjs', function(){
    // 1. 找到文件
    gulp.src(['js/concat_base.js', 'js/uglify_utils.js'])
    // 2. 压缩文件
        .pipe(uglify())
    // 3. 合并成一个文件
        .pipe( concat('all.js') )
    // 4. 改名
        .pipe(rename( function(path){
          path.basename += "_" + APP_VERSION; 
        } ) )
    // 5. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
});

// 组合任务： 先替换html再压缩
gulp.task('htmlcomp', function(){
  var options = {
    collapseWhitespace: true,//压缩HTML
    //省略布尔属性的值 <input checked="true"/> ==> <input />
    collapseBooleanAttributes: false,
    //删除所有空格作属性值 <input id="" /> ==> <input />
    removeEmptyAttributes: true,
    //删除<script>的type="text/javascript"
    removeScriptTypeAttributes: true,
    //删除<style>和<link>的type="text/css"
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
  };
  gulp.src('canvas_test.html')
      .pipe( htmlReplace({'js': 'js/all_' + APP_VERSION + '.js'}) )
      .pipe( htmlmin(options) )
      .pipe( gulp.dest('dist/') );
});

// 默认任务
gulp.task('default', ['clean'], function(){
    gulp.start('ugconjs', 'htmlcomp', 'copy', 'css', 'images');
});

/*************************************************************
 *               本地js  html css本地压缩      
 ************************************************************/
// 字符串拷贝进 js/str.js 中, 然后运行 `gulp str-js`
gulp.task('str-js', function() {
    gulp.src('js/str.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
// 字符串拷贝进 css/str.css 中, 然后运行 `gulp str-css`
gulp.task('str-css', function () {
    gulp.src('css/str.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});
// 字符串拷贝进 str.html 中, 然后运行 `gulp str-html`
gulp.task('str-html', function () {
    var options = {
        collapseWhitespace: true,//压缩HTML
        //省略布尔属性的值 <input checked="true"/> ==> <input />
        collapseBooleanAttributes: false,
        //删除所有空格作属性值 <input id="" /> ==> <input />
        removeEmptyAttributes: true,
        //删除<script>的type="text/javascript"
        removeScriptTypeAttributes: true,
        //删除<style>和<link>的type="text/css"
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('str.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});
```
</pre>
## 专门用于删除的模块插件（rimraf）
因为插件是安装在项目里的，有时项目目录变了，或者想删除这些插件，就需要使用rimraf来卸载掉，单独的手动删除文件是删不掉的。
1、安装：npm install -g rimraf（全局安装）
2、使用：先定位目标文件夹的父级目录，然后命令行输入rimraf ***（***为需要删除的文件夹名称）
```
rimeaf node_modules
```
参考文档
https://github.com/nimojs/gulp-book/blob/master/chapter2.md
http://www.ido321.com/1622.html
https://zhuanlan.zhihu.com/p/20309820
http://www.cnblogs.com/2050/p/4198792.html
