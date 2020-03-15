---
sidebarDepth : 0
---
# H5性能监控系统SDK使用

### 源码全览

```javascript
/**
 * Created by fdb on 2018/1/18.
 */

(function () {
    /**
     * 打印日志
     * @param msg
     * @constructor
     */
    function Mlog(msg) {
        var p = document.createElement('p');
        if (typeof msg === 'object') {
            msg = JSON.stringify(msg);
        }
        p.style.backgroundColor = '#272822';
        p.style.color = '#f8f8f2';
        p.style.padding = '15px';
        p.style.wordWrap =  'break-word';
        p.innerHTML = msg;
        document.body.appendChild(p);
    }

    /**
     * 继承
     * @param origin
     * @param target
     * @returns {*}
     */
    function extend(origin,target) {
        for (var i in target) {
            if (target.hasOwnProperty(i)) {
                origin[i] = target[i];
            }
        }
        return origin;
    }

    // 性能数据
    var performanceData = {

        // webview 初始化所需时间
        wbInit: 0,
        // webView初始化加载url到第一次webView start回调时间
        wbResponse: 0,
        // webview加载H5页面所有时间
        wbTotal: 0,
        // 网络类型
        netType: 'wifi',
        // 页面白屏时间
        invisibleTime: 0,
        // 首包时间
        ttfb: 0,
        // 请求h5页面文档所需的时间
        pageRequest: 0,
        // 解析 DOM 树结构的时间
        domReady: 0,
        // 页面基础渲染完成时间
        renderPage: 0,
        // 页面所有资源加载完成时间
        loadPageComplete: 100

    };
    // 存储APP传过来的数据
    var webData = null;

    var monitor = {

        init: function () {
            var self = this;
            // 获取web
            self.getWebviewData();
            // 获取性能数据
            var per = self.getPerformanceData();
            // 覆盖默认数据
            setTimeout(function () {

                extend(performanceData,per);
                // 将网络类型转化为小写
                performanceData.netType = performanceData.netType.toLowerCase();
                // 获取APP数据
                self.uploadData('H5_monitor_performance',performanceData);

            }, 0)

        },

        getWebviewData:function () {
            // 进来获取APP传过来webview数据
            if (typeof jsRegisterHandler === 'function') { // 第二套
                // Mlog('进入到第二三套：');
                jsRegisterHandler('getPfmData',function(response){

                    webData = typeof response === 'string' ? JSON.parse(response) : response;
                    // Mlog('APP返回的数据：'+ JSON.stringify(webData));
                    extend(performanceData,webData);
                    return false;
                })
            }
        },
        /**
         * 上报数据方法
         * @param funcName 大数据埋点方法名称
         * @param data  存储的数据
         * @param callback
         */
        uploadData: function (funcName, data) {
        },
        /**
         * 获取性能数据
         * @returns {*}
         */
        getPerformanceData: function () {
            // 当不支持performance API时
            if (!window.performance || !window.performance.timing) {
                return false;
            }
            var timing = window.performance.timing;
            // 性能数据
            return {
                // 白屏时间
                invisibleTime: timing.domLoading - timing.navigationStart,
                // 首包时间
                ttfb: timing.responseStart - timing.navigationStart,
                // 首屏时间
                renderPage: timing.domComplete - timing.navigationStart,
                // 整页加载时间
                loadPageComplete: timing.loadEventEnd - timing.navigationStart,
                // 基础页时间=请求h5页面文档下载时间
                pageRequest: timing.responseEnd - timing.fetchStart,
                // 解析 DOM 树结构的时间
                domReady:  timing.domContentLoadedEventEnd- timing.responseEnd
            };
        },

        /**
         * 工具函数
         */
        util: {
            getModuleName: function () {
                var path = location.pathname,
                    pathList = path.split('/');
                return pathList[pathList.length-2];
            }
        }
    };

    setTimeout(function () {
        monitor.init();
    },1000);

    // 记录错误
    window.onerror = function (msg,url,line) {
        var error = {
            msg: msg,
            url: url,
            line: line

        };
        monitor.uploadData('H5_monitor_syntaxError',error);
    }
})();

```

## 在业务逻辑js后面加入引用即可



```
<script src="/monitor.min.js"></script>`

```
