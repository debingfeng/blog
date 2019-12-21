---
sidebarDepth : 0
---

## JavaScript监听所有Ajax请求的事件

- 需求背景

近期需要做前端页面的性能监控，需要建

- 实现源码



```
/**
 * 不支持CustomEvent的polyfill
 */
;(function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

;(function () {

    function ajaxEventTrigger(event) {
        var ajaxEvent = new CustomEvent(event, {detail: this });
        window.dispatchEvent(ajaxEvent);
    }

    var OldXHR = window.XMLHttpRequest;

    function newXHR() {
        var realXHR = new OldXHR();

        realXHR.addEventListener('error', function () {
            ajaxEventTrigger.call(this, 'ajaxError');
        }, false);

        realXHR.addEventListener('timeout', function () {
            ajaxEventTrigger.call(this, 'ajaxTimeout');
        }, false);


        realXHR.addEventListener('abort', function () {
            ajaxEventTrigger.call(this, 'ajaxAbort');
        }, false);


        realXHR.addEventListener('load', function () {
            ajaxEventTrigger.call(this, 'ajaxLoad');
        }, false);

        realXHR.addEventListener('loadstart', function () {
            ajaxEventTrigger.call(this, 'ajaxLoadStart');
        }, false);

        realXHR.addEventListener('progress', function () {
            ajaxEventTrigger.call(this, 'ajaxProgress');
        }, false);

        realXHR.addEventListener('loadend', function () {
            ajaxEventTrigger.call(this, 'ajaxLoadEnd');
        }, false);

        realXHR.addEventListener('readystatechange', function () {
            ajaxEventTrigger.call(this, 'ajaxReadyStateChange');
        }, false);

        return realXHR;
    }

    window.XMLHttpRequest = newXHR;
})();

```


- 实现方法及原理

利用javascript的[自定义事件](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent),来模拟监听ajax的错误和超时的事件。



[CustomEvent兼容性](https://caniuse.com/#search=CustomEvent)

## 参考文章

**参考文章**

[JavaScript监听全部Ajax请求的事件详解](https://yq.aliyun.com/ziliao/20500)

**相关知识链接**


[CustomEvent API MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent)



[XMLHttpRequest 对象API](http://www.w3school.com.cn/xmldom/dom_http.asp)

[apply与call详解MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)


[Laravel 5.4 api 允许跨域访问](https://segmentfault.com/a/1190000008963017)