---
title: 走进Swagger
date: 2020-03-30 16:21:10
tags: 
    - swagger
    - SpringBoot
categories: Swagger
cover: https://tvax1.sinaimg.cn/large/005DJQmOgy1gdc1bynqpkj30t009vjs1.jpg
---
# 前提
+ 前后端分离：
    + 前端 --> 前端的控制层，视图层. （专业的前端团队开发）
    + 后端 --> 后端控制层、服务层、数据访问层.（专业的后端团队开发）
    + 前后端的交互是通过 API 来进行的？关于API的约定该怎么处理呢？
+ 早期：后端编写文档（协同文档），前端根据文档解析接口然后渲染视图！
+ 问题：前后端集成，前端或者后端无法做到：及时协商！最终可能导致问题集中爆发或者项目延时！
+ 现在得开源项目中，都有集成Swagger！
# 什么是Swagger
[官网](https://swagger.io/)
![Swagger官网页面](https://tvax1.sinaimg.cn/large/005DJQmOgy1gdc1ddn0brj317u0j3djp.jpg)
