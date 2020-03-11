---
title: Github Actions自动部署hexo
date: 2020-03-11 17:10:13
tags: 
    - Github
    - hexo
categories:
    - Github
    - hexo
cover: https://tvax1.sinaimg.cn/large/005DJQmOgy1gcq3tmsszxj325s1cmkjl.jpg
---
# 配置ssh密钥
+ 一个配置在settings的
![](https://tva3.sinaimg.cn/large/005DJQmOgy1gcq44ibdtbj30fk0cvdg7.jpg)
![](https://tva4.sinaimg.cn/large/005DJQmOgy1gcq46k23x9j30rr0cewf7.jpg)
+ 另一个配置在仓库里面的settings，取名：HEXO_DELOY_KEY
![](https://tva1.sinaimg.cn/large/005DJQmOgy1gcq4bujjfrj30rg070t8s.jpg)
# 在Actions中创建workflows工作流：
***我的代码模板，请自行修改***
```java
name: 自动部署 Hexo

# master branch on push, auto run
on: 
  push:
    branches:
      - backup
      
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [10.x]

    steps:
      - name: 开始运行
        uses: actions/checkout@v1

      - name: 设置 Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}

      - name: 配置 Git 环境
        env:
          HEXO_DELOY_KEY: ${{secrets.HEXO_DELOY_KEY}}
        run: |
          mkdir -p ~/.ssh/
          echo "$HEXO_DELOY_KEY" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan github.com >> ~/.ssh/known_hosts
          git config --global user.name "你的用户名"
          git config --global user.email "你的邮箱"

      - name: 安装 Hexo CI
        run: |
          export TZ='Asia/Shanghai'
          npm i -g hexo-cli
          npm i

      - name: 安装插件
        run: |
          npm install hexo-cli -g
          npm install

      - name: 部署博客
        run: |
          hexo clean && hexo g && hexo douban && hexo deploy
```