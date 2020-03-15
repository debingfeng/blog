---
sidebarDepth : 0
---
# Vue不依赖Vue-router的小型项目开发

- 背景

我们经常在面对一些游戏项目等兼容性要求不高的微型项目，使用Vue-route等路由管理，Vue-router压缩也有20多Kb,有点白白耗费资源。
因此，在一些对兼容性要求不高的项目，可以尝试使用history Popstate事件来实现。

## popstate事件介绍

当活动历史记录条目更改时，将触发popstate事件。如果被激活的历史记录条目是通过对history.pushState（）的调用创建的，或者受到对history.replaceState（）的调用的影响，popstate事件的state属性包含历史条目的状态对象的副本。

需要注意的是调用history.pushState()或history.replaceState()不会触发popstate事件。只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()或者history.forward()方法）

不同的浏览器在加载页面时处理popstate事件的形式存在差异。页面加载时Chrome和Safari通常会触发(emit )popstate事件，但Firefox则不会。

## 实现逻辑和代码参考

- 首先在Vue定义路由的响应式属性currentRoute

- 使用pushState更新页面记录并传入对应路径来触发popstate事件

- 使用Popstate监听路径变化获取对应的路由组件名称 

- 用计算属性监听路由变化动态引入路由组件进而渲染组件显示页面

- 示例
[示例源码：vue2.x-simple-router](https://gitee.com/fengdb/vue2.x-simple-router)

由于源码在Github在国内访问不是很理想，迁移至Gitee上了。

```javascript
import Vue from 'vue'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
});
// 监听popstate事件
// 当路径变化的时候切换路径
window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});

```

## 参考资料

[Vue路由官方文档](https://cn.vuejs.org/v2/guide/routing.html#%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%AE%80%E5%8D%95%E7%9A%84%E8%B7%AF%E7%94%B1)

[popstate_event-MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event)

[History_API-MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)
