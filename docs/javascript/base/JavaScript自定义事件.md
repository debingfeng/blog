---
sidebarDepth : 0
---

# JavaScript自定义事件

## 1. 事件的创建
JS中，最简单的创建事件方法，是使用Event构造器：
var myEvent = new Event('event_name');
但是为了能够传递数据，就需要使用 CustomEvent 构造器：


```
var myEvent = new CustomEvent('event_name', {
    detail:{
        // 将需要传递的数据写在detail中，以便在EventListener中获取
        // 数据将会在event.detail中得到
    },a
});
```

## 2. 事件的监听

JS的EventListener是根据事件的名称来进行监听的，比如我们在上文中已经创建了一个名称为‘event_name’ 的事件，那么当某个元素需要监听它的时候，就需要创建相应的监听器：


```
//假设listener注册在window对象上
window.addEventListener('event_name', function(event){
    // 如果是CustomEvent，传入的数据在event.detail中
    console.log('得到数据为：', event.detail);

    // ...后续相关操作
});
```


至此，window对象上就有了对‘event_name’ 这个事件的监听器，当window上触发这个事件的时候，相关的callback就会执行。

## 3. 事件的触发

对于一些内置（built-in）的事件，通常都是有一些操作去做触发，比如鼠标单击对应MouseEvent的click事件，利用鼠标（ctrl+滚轮上下）去放大缩小页面对应WheelEvent的resize事件。 
然而，自定义的事件由于不是JS内置的事件，所以我们需要在JS代码中去显式地触发它。方法是使用 dispatchEvent 去触发（IE8低版本兼容，使用fireEvent）：


```
// 首先需要提前定义好事件，并且注册相关的EventListener
var myEvent = new CustomEvent('event_name', { 
    detail: { title: 'This is title!'},
});
window.addEventListener('event_name', function(event){
    console.log('得到标题为：', event.detail.title);
});
// 随后在对应的元素上触发该事件
if(window.dispatchEvent) {  
    window.dispatchEvent(myEvent);
} else {
    window.fireEvent(myEvent);
}
```

// 根据listener中的callback函数定义，应当会在console中输出 "得到标题为： This is title!"

需要特别注意的是，当一个事件触发的时候，如果相应的element及其上级元素没有对应的EventListener，就不会有任何回调操作。 
对于子元素的监听，可以对父元素添加事件托管，让事件在事件冒泡阶段被监听器捕获并执行。这时候，使用event.target就可以获取到具体触发事件的元素。
