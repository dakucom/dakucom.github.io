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
# 线程的几种状态
***6种状态***
1. NEW (新建)
2. RUNNABLE （运行）
3. BLOCKED（阻塞）
4. WATING（等待）
5. TIMED_WATING（延时等待）
6. TERMINATED（终止）

***小思考：***
Java能创建线程吗？可以留言回复我哦
# wait和sleep的区别
1. 类不同
+ wait：Object类
+ sleep：Thread
2. 释放资源
+ sleep：不会释放资源，因为sleep睡着了
+ wait：会释放锁
3. 使用范围不同
+ wait和notify是一组，一般在线程通信的时候使用！
+ sleep在哪里 都能使用，简单来说就是一个方法/
4. 捕获异常
sleep需要捕获异常

***小跳跃：***
高并发时，用TimeUtil 时间单位来进行线程休眠