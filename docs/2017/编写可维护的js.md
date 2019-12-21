---
sidebarDepth : 0
---

## 为什么讨论编程风格？

组件一个团队，团队每个人都各自一套编程习惯。

- 任何开发者都不会在乎某个文件的作者是谁，没有必要花费时间和精力再去理解代码逻辑，并重新排版，这样节约时间。

- 当代码风格不同时，就很容易发现风格不一致的代码
- 




## 基本格式

- 缩进层级 

    使用四个空格，设置tab键 为四个空格

- 语句结尾
    
    要么独占一行，要么以分号结尾。


```
// 合格代码
var team = "omwteam";

function sayTeam () {
    
    return {
        name: "freddy",
        data: []
    }
}

// 不合格代码

var team = "omwteam"

function sayTeam () {
    
    return 
    {
        name: "freddy",
        data: []
    }
}

// 这段代码会被编译器解析成如下这段代码
// 原意结果是返回一个对象，实际上却返回 undefined;

var team = "omwteam";

function sayTeam () {
    
    return ;
    {
        name: "freddy",
        data: []
    }
}
```
- 行的长度

    单行长度不应超过80行，超过80行应强制换行。

- 适当的地方换行

    当一行超过80个时，需要手动换行，换行部分应使用两个缩进；


```
// 正确做法
callback(this,document,'test',[],'xxx','dsds',windows,
        'ddsds');
        
// 不正确 换行部分只有一个缩进
callback(this,document,'test',[],'xxx','dsds',windows,
    'ddsds');
    
// 不正确 换行部分带上 ","运算符前面
callback(this,document,'test',[],'xxx','dsds',windows
    ,'ddsds');       
        
```
- 在合适的地方加上空行，以增加代码的可读性

    - 在方法之间。
    
    - 在方法中的局部变量和第一条语句
    
    - 在多行或者单行注释之前
    
    - 在方法内的逻辑片段之间插入空行，提高可读性
    

```
// 合理的写法
var list = [];

if (list && list.length) {
    
    for (i = 0, l = list.length; i < l; i++) {
        item = list[i];
        type = object[item]
        
        if (Object.hasOwnProperty(item)) {
            
            if (type && type === 'object') {
                return true;
            } else {
                return false;
            }
        }
    }
}

// 不合理的
var list = [];

if (list && list.length) {
    for (i = 0, l = list.length; i < l; i++) {
        item = list[i];
        type = object[item]
        if ( Object.hasOwnProperty(item) ) {
            if (type && type === 'object') {
                return true;
            } else {
                return false;
            }
        }
    }
}
```

- 变量与函数命名

    一般采用驼峰法，语义化准则以增强代码的可读性

```
var anotherVarible;
var thisIsMyName;


// 好的写法
var count = '';
var myName = '';

// 不好的写法 变量写起来像函数
var getCount = '';
var isFound = '';

// 好的写法

function getName () {
    return myName;
}

// 不好的写法： 函数看起来像变量

function theName () {
    return count;
}

```
