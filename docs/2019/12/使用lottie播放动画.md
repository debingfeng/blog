---
sidebarDepth : 0
---

# 使用lottie-web播放动画

Lottie是一个面向Android、iOS、Web和Windows的库，它可以解析Adobe After Effects动画，并用Bodymovin导出为json，然后在移动和Web上本地呈现它们！
它是由Airbnb推出的开源软件，

[官方文档](http://airbnb.io/lottie/#/README)

[Github](https://github.com/airbnb/lottie)

[中文文档](https://www.yuque.com/lottie/document/web)


## 引入

- 安装

```
npm install lottie-web

```

```javascript

import lottie from 'lottie-web'

var animation = lottie.loadAnimation({
  container: element, // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: animationData, // the animation data
  rendererSettings: {
    context: canvasContext, // the canvas context
    scaleMode: 'noScale',
    clearCanvas: false,
    progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
    hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
  }
});

```

## API 介绍

loadAnimation 的参数

| 名称 | 描述 |
| :--- | :--- |
| container | 用于渲染的容器，一般使用一个 div 即可 |
| renderer | 渲染器，可以选择 'svg' / 'canvas' / 'html'，个人测试发现 svg 效果和兼容性最好 |
| name | 动画名称，用于 reference |
| loop | 循环 |
| autoplay | 自动播放 |
| path | json 路径，页面会通过一个 http 请求获取 json |
| animationData | json 动画数据，与 path 互斥，建议使用 path，因为 animationData 会将数据打包进来，会使得 js bundle 过大 |



<a name="Usage-1"></a>

## 实例化后API


| 名称 | 参数 | 描述 |
| :--- | :--- | :--- |
| stop | 无 | 停止动画 |
| play | 无 | 播放动画 |
| pause | 无 | 暂停 |
| setSpeed | Number | 设置播放速度，1 表示1倍速度，0.5 表示 0.5倍速度 |
| setDirection | Number | 正反向播放，1 表示 正向，-1 表示反向 |
| goToAndStop | Number, [Boolean] | 跳到某一帧或某一秒停止，第二个参数 iFrame 为是否基于帧模式还是时间，默认为 false |
| goToAndPlay | Number, [Boolean] | 跳到某一帧或某一秒开始，第二个参数 iFrame 为是否基于帧模式还是时间，默认为 false |
| playSegments | Array, [Boolean] | 播放片段，参数1为数组，两个元素为开始帧和结束帧；参数2为，是否立即播放片段，还是等之前的动画播放完成 |
| destroy | 无 | 销毁 |



<a name="Events"></a>

## 事件

- onComplete
- onLoopComplete
- onEnterFrame
- onSegmentStart<br />
you can also use addEventListener with the following events:
- complete
- loopComplete
- enterFrame
- segmentStart
- config_ready (when initial config is done)
- data_ready (when all parts of the animation have been loaded)
- DOMLoaded (when elements have been added to the DOM)
- destroy

<a name="9cf5d650"></a>
# 演示Demo
