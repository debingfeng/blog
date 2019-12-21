

# 设计模式在JavaScript中的应用实践（一）

[[TOC]]

## 对象字面量

使用对象字面量，对象字面量不需要使用new运算符进行实例化，但不能用在一个语句的开头，因为开始的可能被解读为一个块的开始。

- 应用场景 

	- 组织简单的模块
	- 定义常用的数据存储容器

**代码示例**
```
var myObjectLiteral = {
    variableKey: variableValue,
    functionKey: function () {}
};
```

## 模块模式

Module模式最初被定义为一种在传统软件工程中为类提供私有和公有封装的方法。

- 应用场景


### 模拟 私有方法、属性

Module模式使用闭包封装“私有”状态和组织。它提供了一种包装混合公有/私有方法和变量的方式，防止其泄露至全局作用域，并与别的开发人员的接口发生冲突。通过该模式，只需返回一个公有API，而其他的一切则都维持在私有闭包里。


```
var myNamespace = (function () {
    // 私有计数器变量
    var myPrivateVar = 0;
    // 记录所有参数的私有函数
    var myPrivateMethod = function (foo) {
        console.log(foo);
    };
    return {
        // 公有变量  
        myPublicVar: "foo",
        // 调用私有变量和方法的公有函数  
        myPublicFunction: function (bar) {
            // 增加私有计数器值  
            myPrivateVar++;
            // 传入bar 调用私有方法  
            myPrivateMethod(bar);
        }
    };
})();
```


### 引入引出的问题

- 引入

```
// 全局模块
var myModule = (function (jQ, _) {
function privateMethod1() {
    jQ(".container").html("test");
}

function privateMethod2() {
    console.log(_.min([10, 5, 100, 2, 1000]));
}
return {
    publicMethod: function () {
        privateMethod1();
    }
}; // 引入jQuery 和Underscore
})(jQuery, _));
myModule.publicMethod();
```
- 引出扩展

```
// 全局模块
var myModule = (function () {
    // 模块对象
    var module = {},
        privateVariable = "Hello World";

    function privateMethod() {
        // ...
    }
    module.publicProperty = "Foobar";
    module.publicMethod = function () {
        console.log(privateVariable);
    };
    return module;
})();
```

### 工具包和特定框架的Module模式实现
 
命名空间
 
```
var store = window.store || {};
if (!store["basket"]) {
    store.basket = {};
}
if (!store.basket["core"]) {
    store.basket.core = {};
}
store.basket.core = {
    // ...剩余的逻辑
};
```
## 揭示模块模式

- 优点

该模式可以使脚本语法更加一致。在模块代码底部，它也会很容易指出哪些函数和变量可以被公开访问，从而改善可读性。
```
var myRevealingModule = function () {
    var privateCounter = 0;

    function privateFunction() {
        privateCounter++;
    }

    function publicFunction() {
        publicIncrement();
    }

    function publicIncrement() {
        privateFunction();
    }

    function publicGetCount() {
            return privateCounter;
        } // 将暴露的公有指针指向到私有函数和属性上
    return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    };
}();
myRevealingModule.start();
```

## 单例模式

Singleton（单例）模式被熟知的原因是因为它限制了类的实例化次数只能一次。
- 应用场景

单例模式是一种常用的模式，有一些对象我们往往只需要一个，比如全局缓存、浏览器的window对象。在js开发中，单例模式的用途同样非常广泛。试想一下，当我们

单击登录按钮的时候，页面中会出现一个登录框，而这个浮窗是唯一的，无论单击多少次登录按钮，这个浮窗只会被创建一次。因此这个登录浮窗就适合用单例模式。

总结一下它的使用场景：

	1、可以用它来划分命名空间

	2、借助单例模式，可以把代码组织的更为一致，方便阅读与维护

**代码示例**
```
var mySingleton = (function () {
    // 实例保持了Singleton 的一个引用    
    var instance;

    function init() {
        // Singleton       
        // 私有方法和变量       
        function privateMethod() {
            console.log("I am private");
        }
        var privateVariable = "Im also private";
        var privateRandomNumber = Math.random();
        return {
            // 公有方法和变量          
            publicMethod: function () {
                console.log("The public can see me!");
            }, publicProperty: "I am also public",
            getRandomNumber: function () {
                return privateRandomNumber;
            }
        };
    };
    return {
        // 获取Singleton 的实例，如果存在就返回，不存在就创建新实例   
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();
```

## 观察者模式、发布订阅模式
- 概念
一个或多个观察者对目标的状态感兴趣，它们通过将自己依附在目标对象上以便注册所感兴趣的内容。目标状态发生改变并且观察者可能对这些改变感兴趣，就会发送一个通知消息，调用每个观察者的更新方法。当观察者不再对目标状态感兴趣时，它们可以简单地将自己从中分离。
- 应用场景：　　

　　给不同依赖的模块解耦
   
    
  

**代码示例**

```
var pubsub = {};   // 定义发布者

(function (q) {

    var list = [],  //回调函数存放的数组，也就是记录有多少人订阅了我们东西
        subUid = -1;

    // 发布消息,遍历订阅者
    q.publish = function (type, content) {
        // type 为文章类型，content为文章内容
        
        // 如果没有人订阅，直接返回
        if (!list[type]) {

            return false;
        }

        setTimeout(function () {
            var subscribers = list[type],
                len = subscribers ? subscribers.length : 0;

            while (len--) {
                // 将内容注入到订阅者那里
                subscribers[len].func(type, content);
            }
        }, 0);

        return true;

    };
    //订阅方法，由订阅者来执行
    q.subscribe = function (type, func) {
        // 如果之前没有订阅过
        if (!list[type]) {
            list[type] = [];
        }

        // token相当于订阅者的id，这样的话如果退订，我们就可以针对它来知道是谁退订了。
        var token = (++subUid).toString();
        // 每订阅一个，就把它存入到我们的数组中去
        list[type].push({
            token: token,
            func: func
        });
        return token;
    };
    //退订方法
    q.unsubscribe = function (token) {
        for (var m in list) {
            if (list[m]) {
                for (var i = 0, j = list[m].length; i < j; i++) {
                    if (list[m][i].token === token) {
                        list[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return false;
    };

} (pubsub));

//将订阅赋值给一个变量，以便退订
var girlA = pubsub.subscribe('js类的文章', function (type, content) {
    console.log('girlA订阅的'+type + ": 内容内容为：" + content);
});
var girlB = pubsub.subscribe('js类的文章', function (type, content) {
    console.log('girlB订阅的'+type + ": 内容内容为：" + content);
});
var girlC = pubsub.subscribe('js类的文章', function (type, content) {
    console.log('girlC订阅的'+type + ": 内容内容为：" + content);
});

//发布通知
pubsub.publish('js类的文章', '关于js的内容');  
// 输出：
// girlC订阅的js类的文章: 内容内容为：关于js的内容
// test3.html:78 girlB订阅的js类的文章: 内容内容为：关于js的内容
// test3.html:75 girlA订阅的js类的文章: 内容内容为：关于js的内容


//girlA退订了关于js类的文章 
setTimeout(function () {
    pubsub.unsubscribe(girlA);
}, 0);

//再发布一次，验证一下是否还能够输出信息
pubsub.publish('js类的文章', "关于js的第二篇文章");
// 输出：
// girlB订阅的js类的文章: 内容内容为：关于js的第二篇文章
// girlC订阅的js类的文章: 内容内容为：关于js的第二篇文章
```
