# JavaScript数据结构

最近在回顾一些基础知识，在目前枝繁叶茂的前端中把基础知识弄扎实。基础扎实了上层建筑才能牢固。这是一些笔记，虽然是一些简单的东西，但还是拿出来与大家分享一下。养成一种分享的习惯。

## 列表

列表是一组有序的数据。每个列表中的数据项称为元素。在JavaScript中，列表中的元素可以是任意数据类型。

### 场景

当列表中保存的元素不多时；不需要很长的序列中查找元素；不需要对齐进行排序。


如果数据结构非常复杂，列表的作用就没那么大了。例如人们经常使用的待办事项列表、购物清单、流行榜单等就很合适使用。

### 实现简单的列表类

```
/**
 * List
 * @constructor
 */
function List() {

    // 初始化数据
    this.data = [];
    // 添加
    this.add = function (item){};
    // 删除
    this.remove = function (id){};
    // 查找
    this.find = function (id){};
    // 清空
    this.clear = function () {};
    // 获取列表数据
    this.getData = function (){};

}

var ins = new List();

```

## 栈

栈是一种特殊的列表，栈内的元素只能通过一端访问，这一端称为栈顶。栈是后入先出的数据结构。

由于栈具有后入先出的特点，所以任何不在栈顶的元素都无法访问。为了得到栈顶的元素，必须先去掉上面的元素。


### 栈的JS实现


```
function Stack() {
    this.dataStore = [];
    this.top = 0; //栈顶
    this.push = push; // 入栈
    this.pop = pop; // 出栈并删除
    this.peek = peek; // 出栈单不删除
    this.clear = clear;
    this.getLength = getLength;
}

function push(el) {
    this.dataStore[this.top++] = el;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
	return this.dataStore[this.top-1];
}

function clear() {
    this.top = 0;
}

function getLength() {
    return this.top;
}

var ins = new Stack();
ins.push('a');
ins.push('b');
ins.push('c');
```
### 举2个栈实际应用的栗子



- 数制间的相互转换


```
function mulBase(num, base) {
    var s = new Stack();
    do {
    	s.push(num % base);
    	num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.getLength() > 0) {
    	converted += s.pop();
    }
    return converted;
}
console.log(mulBase(25,2));// 11001
```

- 回文判断

回文：一个单词、短语或者数字，从前往后写都是一样的。例如 abba 倒过来还是abba


```
function isPalindrome(word) {
    var stack = new Stack(),
    	i = 0,
        l = word.length;
    for (; i < l; i++) {
    	stack.push(word.charAt(i))
    }
    var rword = "";
    while (stack.getLength() > 0) {
    	rword += stack.pop();
    }
    return rword === word;
}
console.log(isPalindrome("rar")) //true
console.log(isPalindrome("test"))//false
```
## 队列

队列是一种列表，不同的是队列只能在队尾插入元素，在对首删除元素。队列用于存储按顺序排列的数据，先进先出。队列应用比较广泛，提交操作系统执行一些进程，打印任务池，日常排队买东西等等。

## 队列的JS实现


```
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
function enqueue(element) {
    this.dataStore.push(element)
}
function dequeue() {
	this.dataStore.shift()
}
function front() {
    return this.dataStore[0];
}
function back() {
	return this.dataStore[this.dataStore.length - 1];
}
function toString() {
	var str = '',
        i = 0,
        l = this.dataStore.length;
	for ( ; i < l; i++) {
		str += this.dataStore[i] + "\n";
    }
	return str;
}
function empty() {
    return this.dataStore.length === 0;
}
// 实例化
var q = new Queue();
q..enqueue('a');

```


