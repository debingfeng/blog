# 操作说明

```
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
```

# 推到你仓库的的 gh-page 分支

# 将 <USERNAME>/<REPO> 替换为你的信息

```
git push -f https://github.com/debingfeng/blog.git master:gh-pages
```


## 其他

```
{
    title: 'Arch-ui框架',
    collapsable: false,
    children: [
        '/archui/01-archui框架的目的与定位.md',
        '/archui/02-框架功能需求.md',
        '/archui/03-架构设计.md',
        '/archui/04-交互设计参考.md',
        '/archui/05-组件库开发周期.md',
        '/archui/06-场景化模板.md',
        '/archui/07-参考文章.md'
    ]
}
```
