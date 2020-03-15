---
sidebarDepth : 0
---
    
## JavaScript数据结构之集合
 
集合是一组无序但彼此之间又有一定相关性的成员构成的，每个成员在集合中只能出现一次。

    - 不包含任何成员的空集，全集则是包含一切的成员的集合。
    - 如果两个集合的成员完全相同，则称为两个集合相等
    - 如果一个集合中所有的成员都属于另外一个集合则称前一集和为另一集合的子集


### 集合操作

- 并集
- 交集
- 补集
- 子集

### JS实现

[资源参考与完善:https://github.com/debingfeng/javascript](https://github.com/debingfeng/javascript)
```
/**
 * 集合类JavaScript描述
 * @constructor
 */
function Set() {

    this.dataStore = [];
    
    this.add = add;
    
    this.remove = remove;
    
    this.size = size;
    
    this.union = union;
    
    this.intersect = intersect;
    
    this.subset = subset;
    
    this.difference = difference;
    
    this.show = show;
    
    this.has = has;

}
/**
 * 添加元素
 * @param data
 * @returns {boolean}
 */
function add(data) {
	if (this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data);
		return true;
	} else {
		return false;
	}
}
/**
 * 移除数据
 * @param data
 * @returns {boolean}
 */
function remove(data) {
	var index = this.dataStore.indexOf(data);
	if (index > -1) {
		this.dataStore.splice(index,1);
		return true;
	} else {
		return false;
	}
}
/**
 * 获取集合所有数据
 * @returns {Array}
 */
function show() {
	return this.dataStore;
}
/**
 * 检测是否含有某元素
 * @param data
 * @returns {boolean}
 */
function has(data) {
	return this.dataStore.indexOf(data) >= 0;
}
/**
 * 获取元素的长度
 * @returns {Number}
 */
function size() {
	return this.dataStore.length;
}

/**
 * 并集
 * @param set
 * @returns {Set}
 */
function union(set) {
	var tempSet = new Set();
	var i = 0,
		l = this.dataStore.length;
	for (; i < l; i++) {
		tempSet.add(this.dataStore[i]);
	}

	var j = 0,
		ol = set.dataStore.length;
	for ( ; j < ol; j++) {
		if (!(tempSet.has(set.dataStore[j]))) {
			tempSet.dataStore.push(set.dataStore[j]);
		}
	}

	return tempSet;
}
//当一个元素属于一个集合，同时也属于另一个集合时，则把该元素加入到一个新集合。
/**
 * 交集
 * @param set
 * @returns {Set}
 */
function intersect(set) {
	var tempSet = new Set();
	var i = 0,
		l = this.dataStore.length;
	for (; i < l; i++) {
		if (set.has(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}
// 首先判断这个集合的长度是否大于待比较的集合，如果大于则不可能是他的子集，进而判断该集合的元素是否有不存在待比较的集合中，如果有则说明不是他的子集。
/**
 * 子集
 * @param set
 * @returns {Set}
 */
function subset(set) {
	if(this.size() > set.size()) {
		return false;
	}
	var i = 0,
		l = this.dataStore.length;
	for (; i < l; i++) {
		if (!set.has(this.dataStore[i])) {
			return false
		}
	}
	return true;
}

/**
 * 补集
 * @param set
 * @returns {Set}
 */
function difference(set) {
	var tempSet = new Set();
	var i = 0,
		l = this.dataStore.length;
	for (; i < l; i++) {
		if (!(set.has(this.dataStore[i]))) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

var a = new Set();
a.add("a");
a.add("b");
var b = new Set();
b.add("b");
b.add("c");
console.log(a.union(b).show());
console.log(a.difference(b).show());
console.log(a.intersect(b).show());
```
