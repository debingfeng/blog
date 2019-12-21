---
sidebarDepth : 0
---

# JavaScript中巧用位运算

日常前端开发中我们很少用到位运算，容易让人遗忘，让我们一起回顾下一下js中的位运算。

## [位运算详细说明查看JavaScript|MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

下面主要回顾一下一些常用的位运算的巧用。

## 将十进制转化为二进制


```
var number = 3;
var result = number.toString(2);

var result2 = 14..toString(2); // "1110"

```

## 我们使用位运算来代替Math.floor()来向下取整

```
var data = 2.2352524535;
var result = data | 0; // 2


var re2 = ~~data; // 2
```

## 将颜色从RGA转换为Hex格式


```

var color = {r: 186, g: 218, b: 85};

// RGB to HEX
var rgb2hex = function(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).substr(1);
}
rgb2hex(color.r, color.g, color.b);//"#bada55"
```

## 区分两个数的大小


```
// variables
var a = 9285;
var b = 3569;

// 取大
var max = a ^ ((a ^ b) & -(a < b));//9285;

// 取小
var min =  b ^ ((a ^ b) & -(a < b);//3569
```

## 交换变量


```
var a = 10;
var b = 99;

a = (b^=a^=b)^a;

console.log(a) // 99
console.log(b) // 10
```

## 判断正负


```
function isPos(n) {
  return (n === (n >>> 0)) ? true : false;  
}
isPos(-1); // false
isPos(1); // true
```


