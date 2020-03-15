---
sidebarDepth : 0
---

# javascript错误处理

错误处理和错误分析在js开发中非常重要的一环，很多前端开发人员没有意识到这个问题，从而导致了在开发中碰到错误不知如何下手，到处谷歌百度或者请教大神。那么这篇文章与大家一起回顾一下javascript中错误处理。

## 1、try-catch语句

### 描述

- 将能引发错误的代码放在try块中，并且对应一个响应，然后有异常被抛出。

- try语句包含了由一个或者多个语句组成的try块, 和至少一个catch子句或者一个finally子句的其中一个，或者两个兼有， 下面是三种形式的try声明:

```
try...catch
try...finally
try...catch...finally
```

### 无条件的catch子句

```
try {
    throw "myException"; // generates an exception
}
catch (e) {
   // statements to handle any exceptions
   throw "error"
}


```
### 条件子句


```
try {
    myroutine(); // may throw three types of exceptions
} catch (e) {
    if (e instanceof TypeError) {
        // statements to handle TypeError exceptions
    } else if (e instanceof RangeError) {
        // statements to handle RangeError exceptions
    } else if (e instanceof EvalError) {
        // statements to handle EvalError exceptions
    } else {
       // statements to handle any unspecified exceptions
       logMyErrors(e); // pass exception object to error handler
    }
}
```

### finally从句

```
try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
  }
  finally {
    console.log("finally");
  }
```
## 2、错误类型

### 描述

ECMA-262规定了7中错误类型,其中Error是基类。

- Error
- EvalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError
- 此外，还可以定义错误

```
function UserError(message) {
   this.message = message || "默认信息";
   this.name = "UserError";
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;

// 使用时

new UserError("这是自定义的错误！");
```

### 1、EvalError

EvalError类型的错误在使用eval函数时而发生异常时被抛出。

### 2、RangeError

RangeError错误在数字超出相应范围时触发。

示例：在定义数组不支持的项数时。

```
var item = new Array(-20) 
// 抛出RangeError
```

### 3、ReferenceError 引用错误，在严格模式下如果使用未声明的变量就会触发ReferenceError。

### 4、SyntaxError语法错误 顾名思义语法出现错误时触发。

### 5、TypeError 类型错误

当在变量中存储不存在的类型的数据时，或者访问不存在的方法时就报TypeError

### 6、URIError 在使用encodeURI或者decodeURI,uri格式不正确是就会导致URIError。

## 3、throw语句 

### 描述

throw语句的作用是中断程序执行，抛出一个意外或错误。它接受一个表达式作为参数，可以抛出各种值。


### 示例


```
// 抛出一个字符串
throw "Error！";

throw new Error('出错了!');
```

## 4、抛出错误与合理使用 try-catch

### 使用场景

1、使用try-catch最适合处理那些我们无法控制但是可以预期的错误。例如你在使用一个大型js库中的函数，该函数可能抛出错误，由于我们很难修改这个库源文件，所以此时就应该使用try-catch。

2、其他继续补充

```
try {

    doSomething()
    
} catch(error) {

    if (error instanceof TypeError) {
        // TypeError错误时处理
        
    } else if (error instanceof ReferenceError) {
        // ReferenceError错误时处理
        
    } else if (error instanceof SyntaxError) {
        // SyntaxError错误时处理
        
    } else {
        // 其他处理
    }
}
```

## 5、常见的错误


```
// 不好的代码
function concat(str1,str2,str3){
    var result = str1 + str2;
    if(str3){ //绝对不要这样
        result += str3;
    }
    return result;
}
// 这样更好
function concat(str1,str2,str3){
    var result = str1 + str2;
    if(typeof str3 == 'string'){ //更合适
        result += str3;
    }
    return result;
}
//不安全的函数，任何非数组值都会导致错误
function reverseSort(values){
    if(values){
        values.sort();
        values.reverse();
    }
}
//不安全的函数，任何非数组值都会导致错误
function reverseSort(values){
    if(values != null){
        values.sort();
        values.reverse();
    }
}
//不安全的函数，任何非数组值都会导致错误
function reverseSort(values){
    if(typeof values.sort == 'function'){
        values.sort();
        values.reverse();
    }
}
//安全，非数组值被忽略
function reverseSort(values){
    if(values instanceof Array){
        values.sort();
        values.reverse();
    }
}
```

参考了： [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch)

[阮一峰《javascript标准教程》](http://javascript.ruanyifeng.com/grammar/error.html)

《javascript高级程序设计》
