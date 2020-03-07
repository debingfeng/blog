---
sidebarDepth : 0
---
# 混合APP中优化
[[toc]]
##  选择合适的webview

### Webview介绍

webview是移动APP中载入web网页的控件。主要介绍IOS和安卓中webview控件和第三方内核的优劣势。

### 选型建议
• iOS：WKWebView
• Android：腾讯X5内核

### IOS、安卓和第三方内核对比
- IOS

| IOS中的webview | ui-webview | wkwebview |
| :---:          | :---       | :---      |
|    优点       |     1、IOS2开始作为展示web的容器 <br/>2、排版布局能力强  |     1.2014年推出新一代组件<br/>2.内存开销相比原来小很多<br/>3.性能、稳定和占用内存有很大提升 <br/>4.高达60fps的滚动刷新率 <br/>5.支持了更多H5新特性和属性<br/> 6.内存占用是原来的1/4~1/3 <br/>7.加载速度比原来提升了一倍 |
 |    缺点       |     1.内存泄漏 <br/>2.内存峰值大 <br/>3.300毫秒延迟 <br/>4.Touch Delay <br/>5.js的运行性能和通信限制 <br/>6. IOS12 被苹果公司宣布不再维护 | 不支持页面缓存，需要自己注入cookie <br/> 无法发送Post参数问题 |
  

- Android

| Android | webkit for Webview | chromium for Webview | 备注 |
| --- | --- | --- | --- |
| 兼容 | Android4.4以下 | Android4.4以上 |  |
| JS引擎 | webCore javascript | V8 |  |
| H5元素支持情况 | 278 | 434 |  |
| 运行调试 | 不支持 | 支持 |  |
| 内存占用 | 小 | 大 | 相差20M左右 |
| H5新API（Canvas,SVG,WebGL） | 不支持 | 支持 | 有些需要更高版本支持 |


- 第三方内核

[腾讯X5内核](https://x5.tencent.com/)

1. TBS(腾讯浏览服务)的优势

    1) 速度快：相比系统webview的网页打开速度有30+%的提升；
    
    2) 省流量：使用云端优化技术使流量节省20+%；
    
    3) 更安全：安全问题可以在24小时内修复；
    
    4) 更稳定：经过亿级用户的使用考验，CRASH率低于0.15%；
    
    5) 兼容好：无系统内核的碎片化问题，更少的兼容性问题；
    
    6) 体验优：支持夜间模式、适屏排版、字体设置等浏览增强功能；
    
    7) 功能全：在Html5、ES6上有更完整支持；
    
    8) 更强大：集成强大的视频播放器，支持视频格式远多于系统webview；
    
    9) 视频和文件格式的支持x5内核多于系统内核
    
    10) 防劫持是x5内核的一大亮点

2. 运行环境

    1)手机ROM版本高于或等于2.2版本
    
    2)手机RAM大于500M，该RAM值通过手机 /proc/meminfo 文件的MemTotal动态获取
    
    注：如果不满足上述条件，SDK会自动切换到系统WebView，SDK使用者不用关心该切换过程。

3. SDK尺寸指标

    1)SDK提供的JAR包约250K

## 适当地利用全局性的webview

APP打开H5页面时，会启动初始化naive逻辑，继而启动webview,然后下载H5页面，下载完了之后然后渲染H5页面。
每次打开H5页面都会启动Webview耗费200-500毫秒。一个H5页面整个打开不到2秒时间，如果能避免每次都启动webview，将至少节约10%-20%时间，
这个优化效果是非常明显。

所以我们可以选择那些经常打开H5页面用户，来做一个全局webview。具体思路

第一次打开页面，启动webview时，存起来，记录打开的时间戳，设定时间10分钟，10分钟内容再打开就直接。
如果息屏，锁住就放在后台，反正也没用不影响用户体验

如果用户使用其他功能超过一定内存，那么就强制关闭webview。

否则在这段时间内就直接使用全局webview。


- 参考资料

> [美团技术团队-WebView性能、体验分析与优化](https://tech.meituan.com/2017/06/09/webviewperf.html)

## 实现导航栏的预加载

启动webview与导航栏并行加载


## 加载进度条体验优化

介绍了一种进度条加载的新想法：
 
加载H5页面的时候，当webview请求下载H5页面时，迅速将进度条显示到90%，当页面加载完了之后然后到100%。
这样子给用户的感觉是打开页面很快就加载了，页面资源请求完之后很快就显示了。

## 优化JS-SDK

大家都知道Webview是H5页面的宿主，可以很方便调用H5里面的方法和数据。

H5同native通信主要以下几种
- schema url协议
- 监听H5页面请求，iframe以及其他能够发起请求的方式
- 监听prompt/confirm

**除此之外，课程给我们介绍一种在IOS上一种叫做```window.webkit.messageHandle```的方式**。

- 在JS中
```javascript
window.webkit.messageHandles.share.postMessage('数据')
```

- 在IOS

```Object-C
import UIKit
import WebKit

class SamlLoginViewController: WKScriptMessageHandler {
    var webView: WKWebView?
    let userContentController = WKUserContentController()

    override func loadView() {
        super.loadView()

        let config = WKWebViewConfiguration()
        config.userContentController = userContentController

        self.webView = WKWebView(frame: self.view.bounds, configuration: config)
        userContentController.addScriptMessageHandler(self, name: "share")

        self.view = self.webView
    }


```


[详细文档见APPLE JavascriptCore文档](https://developer.apple.com/documentation/javascriptcore)

## React Native,小程序、Flutter内核对比

### React Native

- 首次发布在2015年1月
- Github Stars: 10万左右
- 社区非常活跃
- 组件丰富
- 学习曲线相对较低
- 性能比原生APP稍低，比基于webview的混合APP要好
- 综合建议：React技术栈全家桶业务建议选用RN


### 小程序

- 首次发布2017年1月
- 闭源
- 社区相对活跃
- 学习成本相当低
- 性能相比原生APP稍差，但webview内核经过优化比其他基于webview的性能要好
-  综合建议： 平台产品，现有流量输出给商家端；多个APP，实现业务互通；和RN Flutter相比,更推荐小程序。

### Flutter

- 首次发布于2017年5月
- Github stars 10万左右
- 社区比较活跃
- 组件是专有小部件，目前还不够丰富
- 学习曲线相对较高，需要熟悉Dart语言
- 性能最好，基于C++ 的渲染引擎。
- 综合建议：考虑性能能，业务面向多端，APP团队人数足够多.


