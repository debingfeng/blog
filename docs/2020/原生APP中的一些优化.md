---
sidebarDepth : 0
---
# 原生APP中的一些优化.md

##  选择合适的webview

### Webview组件

- IOS

| IOS中的webview | ui-webview | wkwebview |
| :---: | :--- | :--- |
| 优点 | 1、IOS2开始作为展示web的容器<br />2、排版布局能力强 | 
<br />2014年推出新一代组件<br />内存开销相比原来小很多<br />性能、稳定和占用内存有很大提升<br />高达60fps的滚动刷新率<br />自身就支持了右滑手势<br />支持了更多H5新特性和属性<br />内存占用是原来的1/4~1/3<br />加载速度比原来提升了一倍<br />更为细致地拆分了UI delegate中的方法<br />允许[js的Nitro](http://baidu.com)库加载并使用 大大提高了页面的JS执行速度 |
| <br />缺点 | 内存泄漏<br />内存峰值大<br />300毫秒延迟<br />Touch Delay<br />js的运行性能和通信限制<br />IOS12 被苹果公司宣布不再维护 | 不支持页面缓存，需要自己注入cookie<br />无法发送Post参数问题 |

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

课程介绍了一种进度条加载的新想法：
 
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

## RN,小程序、Flutter与H5
