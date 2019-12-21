# 队列JavaScript实现

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

var q = new Queue();


```
