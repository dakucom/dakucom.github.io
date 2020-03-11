---
title: hexo algolia 常见问题解决办法
date: 2020-03-10 20:33:09
tags: hexo
categories: 
    - hexo
    - erro
cover: https://tvax2.sinaimg.cn/large/005DJQmOgy1gcq02zbjezj31hc0xcad3.jpg
---

# 报错: Please set an HEXO_ALGOLIA_INDEXING_KEY environment variable to enable content indexing.
### 1. 原因
需要将API密钥添加到系统环境变量(首先需要去algolia官网注册一个账号获取API密钥，此步教程较多，请自行咨询搜索引擎，可参考[hexo+next添加algolia教程](https://www.jianshu.com/p/fa2354d61e37))

### 2.解决办法
+ 右键点击我的电脑 > 属性 > 高级系统设置 > 环境变量
![](https://tvax1.sinaimg.cn/large/005DJQmOgy1gcq0yj4m4ej30h20bmq3g.jpg)
在用户变量中点击新建，添加环境变量，变量名为HEXO_ALGOLIA_INDEXING_KEY 值为 Algolia admin key ， 添加后点击确认，重启电脑后新增的环境变量生效(添加到系统变量中也是可以的) ,具体的key可在下图获得
+ ![](https://tva3.sinaimg.cn/large/005DJQmOgy1gcq10w4qa1j30zs0haq3i.jpg)
### 3.环境变量设置成功后，执行hexo algolia 即可生成索引文件
***希望可以帮到你***
