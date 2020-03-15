---
sidebarDepth : 0
---
# [回顾ES5新增的数组方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

## 1、every(currentValue[当前元素],index[索引],arr[引用数组]) 测试断言函数是否对每个数组元素都为真。

方法使用指定函数检测数组中的所有元素：
如果数组中检测到有一个元素不满足，则整个表达式返回 false，且剩余的元素不会再进行检测。
如果所有元素都满足条件，则返回 true。

### 示例： 检测两个数据中的元素是否都为数字

```

var numberArray= [2,3,4],
	stringArray = [1,3333,"c"，2];

//

var a = numberArray.every(function (p) {
	return typeof p === "number"
});

var b = stringArray.every(function (p) {
	return typeof p === "number"
});

console.log(a); // 返回 true

console.log(b);// 返回 false

```
## 2、filter(callback[, thisArg])返回满足断言函数的数组元素。

### 示例：返回数组中为字符串类型的元素
```

var	stringArray = [1,3333,"c"，2];


var a = stringArray.every(function (p) {
	return typeof p === "string"
});

console.log(a) // 返回["c"]

```

## 3、forEach(currentValue, index, array)为数组的每一个元素调用指定函数。

### 示例：打印数组中的元素

```
var numberArray= [2,3,4];
numberArray.forEach(function (value) {
	console.log(value) //依次 2,3,4
});


```
## 4、lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。

### 语法
```
arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])

```
### 示例：查找数组中字符串a出现最后的索引。


```
var arr = [1,"a",2,"b","a"];



console.log(arr.lastIndexOf("a") //第一次出现的位置所以是 1 第二次即最后一次是 4 所以结果是4

```

## 5、map() 方法创建一个新数组，其结果是该数组中的每个元素调用一个提供的函数。

### 语法

[详细参考MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
```
const new_array = arr.map(callback()[, thisArg])

```

### 示例：


```
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
/* roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9] */

var a = [1,2,3];
var newArr = a.map(function(v){
    return v*2
})
console.log(newArr) // [2,4,6]

```

## 6、reduce() 方法对累加器和数组中的每个元素 (从左到右)应用一个函数，将其减少为单个值，返回值为函数累计处理的结果

[ 参考MDN ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### 语法

```
arr.reduce(callback,[initialValue])

```
### 示例1 ： 返回数组所有数字的和

```
var sum = [0, 1, 2, 3].reduce(function(acc, val) {
  return acc + val;
}, 0);

console.log(sum);
// 6
```
## 7、some() 方法测试数组中的某些元素是否通过了指定函数的测试。

### 语法

[详细参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
```
arr.some(callback[, thisArg])
```
### 示例:检测在数组中是否有元素大于 10


```
var re = [2, 5, 8, 1, 4].some(function(e){
    return (e >= 10);
})

console.log(re);  //false

```

## 8、[indexOf()方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

### 示例


```
var a = [2, 9, 9]; 
a.indexOf(2); // 0 
a.indexOf(7); // -1

if (a.indexOf(7) === -1) {
  // element doesn't exist in array
}
```

### 对于不支持此方法的兼容代码摘自mdn


```
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
```

