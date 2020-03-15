---
sidebarDepth : 0
---

# 关于Vue项目开发规范

[[toc]]

## 命名约定

### 工程项目命名

基于对我们现有的发布流程，多个单词建议统一用下划线的形式。

- 例如

```
my-project

```

### 组件命名

#### 文件夹与文件名称

单个以小写字母开头，多个单词以横线连接，遵循横线连接 (kebab-case)的原则。

- 例子

```
// 单个单词文件夹与文件名
dialog/index.vue

// 单文件
dialog.vue

// 多个单词：自动完成组件
auto-complete/index.vue
auto-complete.vue


```

- 参考资料
> [element-ui组件命名](https://github.com/ElemeFE/element/tree/dev/packages)

> [iview-2.0组件命名](https://github.com/iview/iview/tree/2.0/src/components)


### JS 文件

所有的.js文件都遵循横线连接 (kebab-case)

- 例子

```

@/src/utils/open-util.js

```

### View视图文件

在views文件下，代表路由的.vue文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。


#### 为什么不选择以大写字母开头

- 1）引用时还需要切换大小写

- 2）避免大小写敏感的问题

- 3）所有文件风格都统一了，不需要切换。

#### 为什么选择以横线连接 (kebab-case)命名的原因 

- 横线连接 (kebab-case) 也是官方推荐的命名规范之一 文档
views下的.vue文件代表的是一个路由，所以它需要和component进行区分

- 页面的url 也都是横线连接的，比如https://www.xxx.com/wear-app-store，所以路由对应的view应该要保持统一

- 没有大小写敏感问题

## 项目结构参考

- 参考vue-cli3生成的项目

```
/my-project

    /public
    /src
        /assets
            /imgs/
            /fonts/
            /scss/
            /...
        
        /common/ 公共js
        
        /components/ 组件目录
        
        /i18n/ 国际化目录
    
        /mixins/ 混合目录
        
        /service/ 接口服务
        
        /views/ 路由组件
        
        其他待补充完善
```




## 开发约定与注意

### 组件的 data 必须是一个函数。

当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。
[参考官方指南详细](https://cn.vuejs.org/v2/style-guide/index.html#%E7%BB%84%E4%BB%B6%E6%95%B0%E6%8D%AE-%E5%BF%85%E8%A6%81)


### Prop 定义应该尽量详细。

在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

### 为v-for设置key值

在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为，比如动画中的对象固化 (object constancy)，也是一种好的做法。
[参考官方指南详细](https://cn.vuejs.org/v2/style-guide/index.html#%E4%B8%BA-v-for-%E8%AE%BE%E7%BD%AE%E9%94%AE%E5%80%BC-%E5%BF%85%E8%A6%81)


### 避免 v-if 和 v-for 用在一起

一般我们在两种常见的情况下会倾向于这样做：

为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。

为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)。

[参考官方指南详细](https://cn.vuejs.org/v2/style-guide/index.html#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7-%E5%BF%85%E8%A6%81)


### 私有属性名

使用模块作用域保持不允许外部访问的函数的私有性。如果无法做到这一点，就始终为插件、混入等不考虑作为对外公共 API 的自定义私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)。

[参考官方指南详细](https://cn.vuejs.org/v2/style-guide/index.html#%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%90%8D-%E5%BF%85%E8%A6%81)


### 础组件名

应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。

[参考官方指南详细](https://cn.vuejs.org/v2/style-guide/index.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E5%90%8D-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)


### 单例组件名

**只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。**

这不意味着组件只可用于一个单页面，而是每个页面只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，只是目前在每个页面里只使用一次。

```
反示例

components/
|- Heading.vue
|- MySidebar.vue

```


```
好的示例
components/
|- TheHeading.vue
|- TheSidebar.vue

```

### 紧密耦合的组件名

**和父组件紧密耦合的子组件应该以父组件名作为前缀命名。**

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。


### 组件名中的单词顺序

组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。


```
反例
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue

```

```
好例子
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

[参考官方网站](https://cn.vuejs.org/v2/style-guide/index.html#%E7%BB%84%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E5%8D%95%E8%AF%8D%E9%A1%BA%E5%BA%8F-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)



### 多个特性的元素

**多个特性的元素应该分多行撰写，每个特性一行。**

在 JavaScript 中，用多行分隔对象的多个属性是很常见的最佳实践，因为这样更易读。模板和 JSX 值得我们做相同的考虑。

```
反例
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">
<MyComponent foo="a" bar="b" baz="c"/>

```

```
好例子

<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>
<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>
```

### 简化计算属性

应该把复杂计算属性分割为尽可能多的更简单的属性。



```
反例
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice * (this.discountPercent || 0)
    )
  }
}
```

```
好例子
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```

> [参考官方解释](https://cn.vuejs.org/v2/style-guide/index.html#%E7%AE%80%E5%8D%95%E7%9A%84%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)



### 指令缩写

指令缩写 (用 : 表示 v-bind: 和用 @ 表示 v-on:) 应该要么都用要么都不用。

### 元素特性的顺序

元素 (包括组件) 的特性应该有统一的顺序。

这是我们为组件选项推荐的默认顺序。它们被划分为几大类，所以你也能知道新添加的自定义特性和指令应该放到哪里。


[参考官方指南](https://cn.vuejs.org/v2/style-guide/index.html#%E5%85%83%E7%B4%A0%E7%89%B9%E6%80%A7%E7%9A%84%E9%A1%BA%E5%BA%8F-%E6%8E%A8%E8%8D%90)
### 单文件组件的顶级元素的顺序

**单文件组件应该总是让 <script>、<template> 和 <style> 标签的顺序保持一致。且 <style> 要放在最后，因为另外两个标签至少要有一个。**


```
// 约定以这种方式组织文件

<template></template>

<script></script>

<style></style> 
```


## 参考资料

> [Vue开发风格指南](https://cn.vuejs.org/v2/style-guide/index.html)

> [CSS BEM](http://getbem.com/introduction/)
