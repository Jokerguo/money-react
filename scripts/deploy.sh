#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
#git remote add origin git@github.com:Jokerguo/money-react-website.git &&
git remote add origin git@gitee.com:jokerguo/money-react-website.git &&
git push -u origin master -f
cd -
