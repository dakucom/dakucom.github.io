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
+ 简单来说栈就是管理程序运行的
> 延申 栈和队列都是基本的数据结构；队列：FIFO（First Input First OutPut）
+ 存储一些基本类型的值，对象的引用，方法等…
+ 栈的优势：存取速度比堆快！仅次于寄存器，栈的数据是不可以共享的；
> StackOverFlow
```java
public class StackOverFlowTest {
    public static void main(String[] args) {
        a();
    }
    // main  a  a  a   a a  a a a  a a  a  满
    // Exception in thread "main" java.lang.StackOverflowError
    private static void a() {
        a();
    }
}
```
因此，栈里面是一定不会存在垃圾回收的问题的，只要线程一旦结束，该栈就Over了。生命周期和线程一致；
# 何为堆？堆中存哪些东西？
+ 堆是JVM调优的主要地方，也是GC主要工作的地方。堆的大小可以通过参数调整
+ 数据结构：堆分三部分：新生区，养老区，永久代（jdk1.8后改成元空间）
    + Java7之前：
        + 堆内存在逻辑上分为三个部分：新生、养老、永久
        + 新生代 ( Young )又被划分为：Eden、From Survivor和To Survivor三个区域
    + Java8之后：
        + 永久化为元空间!
> ***物理上只有 新生、养老；元空间在本地内存中，不在JVM中！***
+ 存放：类，方法，常量，类引用的真实的内容。。。。
> GC 垃圾回收主要是在 新生区和养老区，又分为 普通的GC 和 Full GC，如果堆满了，就会爆出 OutOfMemory；
# 新生、养老、永久区
+ 内存占比
    1. 新生代( Young ) + 老年代( Old )，其可以通过参数 –Xms、-Xmx 来指定：–Xms用于设置初始分配大小，默认为物理内存的1/64；-Xmx用于设置最大分配内存，默认为物理内存的1/4。默认情况下，新生代 ( Young ) 与老年代 ( Old ) 的比例的值为 1:2 ( 该值可以通过参数 –XX:NewRatio 来指定 )，即：新生代 ( Young ) = 1/3 的堆空间大小，老年代 ( Old ) = 2/3 的堆空间大小
    2. 年轻代又分为Eden和Survivor区。Survivor区由FromSpace和ToSpace组成。Eden区占大容量，Survivor两个区占小容量，默认比例是8:1:1。
+ 新生代：新生区 就是一个类诞生、成长、消亡的地方！
    1. Eden区为Java对象分配堆内存，当 Eden 区没有足够空间分配时，JVM发起一次Minor GC，将Eden区仍然存活的对象放入Survivor from区，并清空 Eden 区；
    2. Eden区被清空后，继续为新的Java对象分配堆内存；
    3. 当Eden区再次没有足够空间分配时，JVM对Eden区和Survivor from区同时发起一次 Minor GC，把存活对象放入Survivor to区，同时清空Eden 区和Survivor from区；
    4. Eden区继续为新的Java对象分配堆内存，并重复上述过程：Eden区没有足够空间分配时，把Eden区和某个Survivor区的存活对象放到另一个Survivor区；

