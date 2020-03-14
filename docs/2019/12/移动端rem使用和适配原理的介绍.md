---
sidebarDepth : 0
---

# 移动端rem使用和适配原理的介绍

## REM定义

REM全称是 font size of the root element （根元素的字体大小）
它是CSS3中新增加的一个尺寸（度量）单位，根节点（html）的font-size决定了rem的尺寸，也就是说它是一个相对单位，相对于(html)。

## 兼容性

- IOS6 +
- Android2.2 +

设置HTML字体即REM的基准值为可视宽度的百分之一，元素宽度占设计稿百分比*100vw。在不同的尺寸的设备上实现了简单的等比适配。

以750设计稿来说，元素宽度 150px =  150px/750px * 100vw = 20vw

```scss
@function vw($px,$base: 750) {
    @return ($px / $base) * 100vw;
}
```

- 缺点是 

用做字体时当屏幕越来越大，字体越来越大

元素超出一屏时会出现滚动条

## VW,VH的应用

上述的思想正好在CSS中VW,VH的支持。在移动端其实现在就可以使用，在不久的将来，会成为一种普遍的采用的方式。

- 相对视口宽度和高度的1/100
- 兼容性IOS8+ Android4.4+

## 淘宝方案


### 使用方法

查看官方文档，引入amfe-flexible,然后参考基准设计稿把需要转化的位置从Px转化为REM。
这个**postcss-adaptive**提供了转化，使用方法见文档。

> [amfe-flexible](https://github.com/amfe/lib-flexible)
> [postcss-adaptive](https://www.npmjs.com/package/postcss-adaptive)

### 源码解析 

- 设置body的字体为设备dpr*12 px

解决一些元素的字体设置的问题

- 设置REM的HTML基准值为页面可视宽度的1/10


- 页面窗口调整和pageshow事件如果是从缓存载入时再设置一次基准值


- 当设备DPR大于2时判断是否支持0.5像素，如果支持就给Document加上 hairlines样式

解决1px像素显示的问题



