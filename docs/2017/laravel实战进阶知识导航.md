[TOC]

# laravel实战进阶

## [Git操作书籍](https://git-scm.com/book/zh/v2)

## [homestead配置](https://fsdhub.com/books/laravel-essential-training-5.5/557/development-environment-windows)


Homestead 是 Laravel 官方推荐的开发环境。在本书里，我们会强制读者使用 Homestead，原因主要有以下：

- Homestead 是本书很重要的技能点之一，学完此书，你必须学会 Homestead；
- Homestead 统一了环境，避免歧义，减少新手在学习中遇到不必要的卡顿；
- 统一环境带来的好处还有：当你遇到问题的时候，其他同学能很容易的帮助到你；
最大程度接近线上生产环境，为后续的课程做铺垫；
这是最佳实践，是需要从一开始培养起来的好习惯。

## [Carbon](https://github.com/briannesbitt/Carbon)

Carbon 是 PHP 知名的 DateTime 操作扩展，Laravel 将其默认集成到了框架中。diffForHumans 是 Carbon 对象提供的方法

参考[Carbon文档](http://carbon.nesbot.com/docs/)


## [Laravel 项目开发规范](https://fsdhub.com/books/laravel-specification)

## [ Laravel 5.x Scaffold Generator 代码生成器](https://github.com/summerblue/generator)



## [模型观察者](https://fsdhub.com/books/laravel-intermediate-training-5.5/652/new-posts)

excerpt 字段存储的是话题的摘录，将作为文章页面的 description 元标签使用，有利于 SEO 搜索引擎优化。摘录由文章内容中自动生成，生成的时机是在话题数据存入数据库之前。我们将使用 Eloquent 的 观察器 来实现此功能。

Eloquent 模型会触发许多事件（Event），我们可以对模型的生命周期内多个时间点进行监控： creating, created, updating, updated, saving, saved, deleting, deleted, restoring, restored。事件让你每当有特定的模型类在数据库保存或更新时，执行代码。当一个新模型被初次保存将会触发 creating 以及 created 事件。如果一个模型已经存在于数据库且调用了 save 方法，将会触发 updating 和 updated 事件。在这两种情况下都会触发 saving 和 saved 事件。

Eloquent 观察器允许我们对给定模型中进行事件监控，观察者类里的方法名对应 Eloquent 想监听的事件。每种方法接收 model 作为其唯一的参数。代码生成器已经为我们生成了一个观察器文件，并在 AppServiceProvider 中注册。接下来我们要定制此观察器，在 Topic 模型保存时触发的 saving 事件中，对 excerpt 字段进行赋值


## laravel-mix

参考文档[Laravel 的资源任务编译器 Laravel Mix](https://d.laravel-china.org/docs/5.5/mix)

## [HTMLPurifier for Laravel 5](https://github.com/mewebstudio/Purifier)

HTMLPurifier for Laravel 是对 HTMLPurifier 针对 Laravel 框架的一个封装。本章节中，我们将使用此扩展包来对用户内容进行过滤。

 composer require "mews/purifier:~2.0"

HTMLPurifier 本身就是一个独立的项目，运用『白名单机制』对 HTML 文本信息进行 XSS 过滤。

『白名单机制』指的是使用配置信息来定义『HTML 标签』、『标签属性』和『CSS 属性』数组，在执行 clean() 方法时，只允许配置信息『白名单』里出现的元素通过，其他都进行过滤。


## [消息通知](https://fsdhub.com/books/laravel-intermediate-training-5.5/667/message-notification)