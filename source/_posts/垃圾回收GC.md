---
title: 垃圾回收GC
date: 2020-03-14 20:08:51
tags: 
    - GC
    - JVM
categories: JVM
cover: https://tvax1.sinaimg.cn/large/005DJQmOgy1gdfkhcc1qpj31z418gnpd.jpg
---
# 概念
GC（Garbage Collection）是JVM的核心组件，它在JVM中以单独的线程（daemon thread）运行，作用于内存堆区域（Stack Space），扫描那些经过new关键字创建的无用的对象并清除以释放内存，必要时整理内存。 
# 口诀
## 分代收集算法（不同的区域使用不同的算法）
+ Young代： GC频繁区域
+ Old代：GC次数较少
+ Perm代：不会产生GC！