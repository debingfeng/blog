---
sidebarDepth : 0
---

# javascript继承

[[toc]]

## 原型链去继承


```
function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
};

function SubType() {
        this.subproperty = false;
    } //继承了SuperType
SubType.prototype = new SuperType(); //添加新方法 

SubType.prototype.getSubValue = function () {
    return this.subproperty;
};
//重写超类型中的方法 
SubType.prototype.getSuperValue = function () {
    return false;
};
```

## 借用构造函数



```
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() { //继承了SuperType    
    SuperType.apply(this,this.arguments);
}
```

## 组合继承


```
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
    alert(this.name);
};

//继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
    alert(this.age);
};

```


## 原型式继承


```
Object.create(proto)
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie"); //"Shelby,Court,Van,Rob,Barbie"alert(person.friends);
```
## 寄生组合式


```
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
    alert(this.name);
};

function SubType(name, age) {
    //第二次调用SuperType()    
    SuperType.call(this, name);
    this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
    alert(this.age);
};
```
## ECMAScript 6 继承extend
