---
sidebarDepth : 0
---
# 聊一聊css的注释

很少会有人会特别注意CSS的注释，要么就快捷键注释，要么就没有注释，只有少部分的开发人员会特别留意CSS注释。看了BAT系的css注释，有规范，但无风格。
国外的开发人员对注释就有着比较好的思考，值得我们国内的开发者去学习。
从CSS注释当中可以看出开发人员的编码风格与习惯，进而判断出个人或者团队行事风格。对于有完美主义的开发者，对于自己的代码注释不重视，那是相当难受的。

主要内容：基本注释、变量注释(可选)、块级注释、群组注释、具体样式注释、继承注释、mixin注释(可选)、函数注释(可选)
其他注释待补充。如果未使用sass,less的可以忽略可选。

花费时间：1分钟即可阅读完毕。


## css注释风格参考

下面的注释参考了Bootstrap源码的风格、normalize等的注释，给大家参考。

### 基本注释

```
/* 单行注释 */


/**
 * 多行注释
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in
 *    IE on Windows Phone and in iOS.
 */
 
```

### 变量注释

```
//
// Variables
// --------------------------------------------------



```

### 块级注释：集中存放某个功能关联的css代码

```
/* 块级注释
   ========================================================================== */
 
```

### 群组注释：即类似的样式应该声明在一组相关的注释下面，以便及时调整
```
//== 颜色
//
//## 用途范围

```
### 具体样式注释

```

//** Background color for `<body>`.
$body-bg: #fff !default;


```

### 继承注释

```
/**  
 * 继承注释
 * Extend `.foo` in theme.css  
 */  
```

### mixins注释
bootstrap风格
```

// CSS image replacement
//
// Heads up! v3 launched with only `.hide-text()`, but per our pattern for
// mixins being reused as classes with the same name, this doesn't hold up. As
// of v3.0.1 we have added `.text-hide()` and deprecated `.hide-text()`.
//
// Source: https://github.com/h5bp/html5-boilerplate/commit/aa0396eae757

// Deprecated as of v3.0.1 (has been removed in v4)
@mixin hide-text() {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

```
js系
```

/**  
 * mixin name and use
 * @param
 * @return 
 */  

@mixin hide-text() {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

```
### 其他风格的注释...






