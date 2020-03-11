---
title: 初时JUC
date: 2020-03-08 19:30:45
tags: JUC
categories: JUC
top_img: 
cover: https://tvax1.sinaimg.cn/large/005DJQmOgy1gcojzpqe0mj31hc0u04qp.jpg
---
# 什么叫JUC
就是Java原生的并发包和一些常用的工具类
+ java.util.concurrent（并发工具包）
+ java.util.concurrent.atomic（原子）
+ java.util.concurrent.locks（锁）
![](https://tvax4.sinaimg.cn/large/005DJQmOgy1gcq35s33h2j30ot02pwef.jpg)
***既然是并发肯定离不开进程和线程的概念***
# 进程和线程
进程在某种意义上就是一个程序，一个进程下会存在多个线程（***至少有两个线程---main线程、GC***）
# 并发和并行
+ 并发：多个线程操作同一个资源，交替执行的过程
+ 并行：多个线程同时执行