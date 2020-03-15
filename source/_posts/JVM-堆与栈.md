---
title: JVM-堆与栈
date: 2020-03-14 19:09:54
tags:
    - JVM
    - 堆
    - 栈
categories: JVM
cover: https://tvax4.sinaimg.cn/large/005DJQmOgy1gctdum0y4yj30jd0f3mxf.jpg
---
# 何为栈？栈中存哪些东西？
简单来说栈就是管理程序运行的
# 何为堆？堆中存哪些东西？
+ 堆是JVM调优的主要地方，也是GC主要工作的地方。堆的大小可以通过参数调整
+ 数据结构：堆分三部分：新生区，养老区，永久代（jdk1.8后改成元空间）
    + 堆中最重要，事最多的是新生区，新生区又分eden区，s1区,s2区。简而言之，每个对象产生在eden区，一次gc，存活下来的对象放到s区（s1,s2），如果15次gc还存活的对象，放到养老区。如果养老区满了就会Full gc（full gc代价很高，full gc时其他程序和运行的资源必须全部停下来，等full gc结束才继续进行，俗称stop the world）
+ 类，方法，常量，类引用的真实的内容。。。。
