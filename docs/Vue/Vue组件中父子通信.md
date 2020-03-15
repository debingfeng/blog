---
sidebarDepth : 0
---

[[toc]]

# Vue组件中的通信方式

## 1)、props 属性： 通过props向子组件传参

## 2)、通过绑定v-on和$emit触发事件的方式(已试用)

## 3)、父组件通过监听子组件的事件，子组件在触发操作时传递数据给父组件，
父组件拿到数据然后做对应地处理。

## 3)、$attrs 与 $listeners

## 4)、通过全局组件Bus封装来

## 5)、Vuex

```javascript
//https://vuex.vuejs.org/zh/
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
```
6)、自定义事件 broadcast或者dispatch

7)、provide 与 inject




> 参考资料

[Vue.js 父子组件之间通信的十种方式](http://www.yyyweb.com/5189.html)


