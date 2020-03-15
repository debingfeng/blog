---
sidebarDepth : 0
---

# vue bus非父子组件通信

**实例化一个空Vue实例，利用Vue上事件监听与触发的功能，实现各组件之间通信。**

**使用vue-bus有两点需要注意：**
第一是$bus.on应该在created钩子内使用，如果在mounted使用，它可能接收不到其他组件来自created钩子内发出的事件。

第二点是使用了$bus.on在beforeDestory钩子里应该需要使用$bus.off解除，因为组件销毁后，就没有必要把监听的句柄存储在vue-bus里面了。

- 例如简单实现

```javascript

let Bus = new Vue();
//A组件中监听事件拿到数据做对应地逻辑处理
Bus.$on('test' data => {
//这里监听拿到的数据，然后做对应处理
})
//B组件中触发事件并传递参数
Bus.$emit('test',params);
let Bus = new Vue();
//A组件中监听事件拿到数据做对应地逻辑处理
Bus.$on('test',data => {
    // 拿到数据逻辑处理
}});

```

- 稍微封装一下
一般是将Bus抽离出来

```javascript
Bus.js
import Vue from 'vue'
const Bus = new Vue()
export default Bus

//在Vue实例化时挂在到data属性上去
import Vue from 'vue'
const Bus = new Vue()

var app= new Vue({
    el:'#app',
　　 data:{
　　　　Bus
    }　　
})

```

在子组件中通过this.$root.Bus.$on(),this.$root.Bus.$emit()来调用

- 进一步封装

```javascript
vue-bus.js
const install = (Vue) => {
    Vue.prototype.$bus = new Vue({
        methods: {
            emit(event,...args){
                this.$emit(event,...args);
            },
            on(event,callback){
                this.$on(event,callback);
            },
            off(event,callback){
                this.$off(event,callback);
            }
        }
    });
};
export default install;



```


**然后在main.js**

```
import VueBus from './assets/vue-bus'
Vue.use(VueBus);
```
然后在组件中，可以使用$emit， $on， $off 分别来分发、监听、取消监听事件：
分发事件的组件
```javascript
// ...
methods: {
 todo: function () {
 this.$bus.$emit('todoSth', params); //params是传递的参数
 //...
 }
}
```

监听的组件

```javascript
// ...
created() {
 this.$bus.$on('todoSth', (params) => { //获取传递的参数并进行操作
  //todo something
 })
},
// 最好在组件销毁前
// 清除事件监听
beforeDestroy () {
 this.$bus.$off('todoSth');
},

```

如果需要监听多个组件，只需要更改 bus 的 eventName:

```javascript
// ...
created() {
 this.$bus.$on('firstTodo', this.firstTodo);
 this.$bus.$on('secondTodo', this.secondTodo);
},
// 清除事件监听
beforeDestroy () {
 this.$bus.$off('firstTodo', this.firstTodo);
 this.$bus.$off('secondTodo', this.secondTodo);
},

```

