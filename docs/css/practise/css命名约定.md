---
sidebarDepth : 0
---
# CSS BEM策略和Bootstrap命名学习


- **1、为什么约定一个策略和规范？**

    1）、命名杂乱
    
    2）、重复利用率不够
    
    3）、模块化不够
    
    4）、团队一致性不够


- **2、能够给我们团队带来什么益处？**

    1）、统一规范，团队协作效率更高
    
    2）、提高编写效率，减少编码时间
    
    3）、可读性、可维护性和可扩展性好

## BEM策略

## 布局块（Block）

**一个独立的实体，它有自己的含义，代表页面上的一个接口。**

- 示例包括：


```

header, container, menu

```


### 布局块成员（Element）

**块的一部分，没有独立的含义，并且在语义上与其块相关联**

- 示例

```

menu item, list item, checkbox caption, header title

```

### 修饰符（Modifier）

**块或元素上的标志。使用它们来改变外观或行为。**

- 示例

```
disabled, highlighted, checked, fixed, size big, color yellow
```


## CSS抒写规范

### 代码组织

- 以组件为单位组织代码段。
- 制定一致的注释规范。
- 使用一致的空白符将代码分隔成块，这样利于扫描较大的文档。
- 如果使用了多个 CSS 文件，将其按照组件而非页面的形式分拆，因为页面会被重组，而组件只会被移动。


```
/*
 * 组件标题
 */

.element { ... }


/*
 * 组件标题
 *
 * 有时您需要为整个组件包含可选上下文。如果它足够重要，那就在这里做。
 */

.element { ... }

/* 上下文子组件或者组件修饰符 */
.element-heading { ... }
```

### 声明顺序

相关的属性声明应当归为一组，并按照下面的顺序排列：

Positioning

Box model

Typographic

Visual

由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型排在第二位，因为它决定了组件的尺寸和位置。

其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面。


```
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Misc */
  opacity: 1;
}
```

### 媒体查询（Media query）的位置

将媒体查询放在尽可能相关规则的附近。不要将他们打包放在一个单一样式文件中或者放在文档底部。如果你把他们分开了，将来只会被大家遗忘。


```
.element { ... }
.element-avatar { ... }
.element-selected { ... }

@media (min-width: 480px) {
  .element { ...}
  .element-avatar { ... }
  .element-selected { ... }
}

```


## 参考资料

> [CSS BEM](http://getbem.com/introduction/)

> [bem-methodology-for-small-projects](https://www.smashingmagazine.com/2014/07/bem-methodology-for-small-projects)

> [Bootstrap4 组件](http://bs4.ntp.org.cn/pages/components.html)

> [Bootstrap-css-codeguide](https://www.runoob.com/bootstrap/bootstrap-css-codeguide-html.html)
