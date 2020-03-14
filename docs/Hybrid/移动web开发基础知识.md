---
sidebarDepth : 0
---
## 移动web开发像素知识

- px : css逻辑像素，浏览器使用的抽象单位

- dp,pt: 设备独立像素

- dpr: 设备缩放比

计算公式： 1 px = dpr的平方 * dp

- DPI: 打印机每英寸可以喷的墨汁点
- PPI：屏幕上每英寸的像素数量

PPI = 根号（物理像素的长^2 + 宽^2） / 4

PPI对应的缩放比参考
![image](http://www.fengdb.com/public/images/ppi.png)


## 设置视口viewport


[viewport详细参考](http://www.cnblogs.com/2050/p/3877280.html)

```
<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
```

## 设计移动web方案

[移动页面参考模板](https://github.com/omwteam/mobileweb)

- 以iphone6 640*1167宽度 320 来设计

- 缩放比0.5来设计 这时1px = pt


## 布局

- 弹性布局 为了兼容安卓4.4以下的设备，可以使用flexbox,-webkit-box,其他最新的浏览器使用flex.



- 响应式布局

    - 媒体查询，百分比
    
    - 弹性图片
    
    - 重新布局，显示与隐藏

    - 自适应性
    - 多行文本溢出

## 特别样式处理

- 一像素问题
  使用缩放transform:scaleY(0.5)
![image](http://www.fengdb.com/public/images/onepx.png)

- 使用相对单位：rem 使用html的字体的相对单位

设置基础值，screen.width/20 



## 终端交互优化

[移动端web开发技巧](http://www.imooc.com/article/1115)

[常见问题及解决方法参考](http://www.imooc.com/article/1542)

- 触摸事件 单击事件 300ms延迟

使用zepto  有点透的bug

自己模拟tap效果

- 开启硬件加速

```
-webkit-transform:translateZ(0);
```

- 弹性滚动

局部滚动开启弹性滚动：


```
body {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
}
```

- 下拉刷新
