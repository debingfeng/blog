# 操作说明

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支

# 将 <USERNAME>/<REPO> 替换为你的信息

git push -f https://github.com/debingfeng/blog.git master:gh-pages