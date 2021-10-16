cd docs/.vuepress/dist

yarn docs:build

git init
git add .
git commit -m "autopush"
git remote add orginal https://github.com/oeyoews/v1.git
git push -f orginal main:main


cd -
