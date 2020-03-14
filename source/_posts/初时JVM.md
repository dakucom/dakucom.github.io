---
title: 初时JVM
date: 2020-03-11 17:55:45
tags: JVM
categories: JVM
cover: https://tvax4.sinaimg.cn/large/005DJQmOgy1gctdum0y4yj30jd0f3mxf.jpg
---
# 位置
Java是跨平台的，JVM是运行在操作系统之上的。
![JVM位置](https://tva2.sinaimg.cn/large/005DJQmOgy1gcteke2gmij30o60h0gm4.jpg)

***架构基本思想：程序虽不能开平台，但加一层就可以实现跨平台***

# JVM体系架构图
![JVM体系架构图](https://tva3.sinaimg.cn/large/005DJQmOgy1gctdum0y4yj30jd0f3mxf.jpg)
***所谓的JVM调优，99%都是在调堆，栈一定不会存在垃圾***
# 类加载器ClassLoader
先看一下图
![类加载器](https://tva1.sinaimg.cn/large/005DJQmOgy1gctmytmy8uj30h20c874x.jpg)
上图所展示的就是一个类的加载，连接和初始化，接下来我会依依为大家解释它们的含义：
+ 加载：查找并加载类的二进制数据
+ 连接：
    + 验证：保证被加载的类的正确性
    + 准备：给类静态变量分配内存空间，赋值一个默认的初始值（原子性操作）
    + 解析：把类中的符号引用转换为直接引用
        + 在把 .java 文件 编译为 .class 文件的时候，虚拟机并不知道所引用的地址； 助记符，符号引用；
        + 转为真正的直接引用，找到对应的直接地址！
+ 初始化：给类的静态变量赋值正确的值
# 类加载器 分类
1. java虚拟机自带的加载器
   + BootStrap 根加载器 （加载系统的包，JDK 核心库中的类 rt.jar）
   + Ext 扩展类加载器 （加载一些扩展jar包中的类）
   + Sys/App 系统（应用类）加载器 （我们自己编写的类）
2. 用户自己定义的加载器
    + ClassLoader，只需要继承这个抽象类即可，自定义自己的类加载器
```java
package com.dakuzai.demo.classloaderDemo;
 
public class classLoaderTest2 {
    public static void main(String[] args) {
        Object o = new Object(); // jdk 自带的,类的鼻祖
        Car car = new Car();  // 实例化一个自己定义的对象
 
        // null 在这里并不代表没有，只是Java触及不到！
        System.out.println(o.getClass().getClassLoader()); // null
        System.out.println(demo.getClass().getClassLoader()); // AppClassLoader
        System.out.println(demo.getClass().getClassLoader().getParent()); // ExtClassLoader
        System.out.println(demo.getClass().getClassLoader().getParent().getParent()); // null
        
        // jvm 中有机制可以保护自己的安全；
        // 双亲委派机制 ： 一层一层的让父类去加载，如果顶层的加载器不能加载，然后再向下类推
        // ClassLoader         04
        // AppClassLoader      03
        // ExtClassLoader      02
        // BootStrap (最顶层)   01  java.lang.String  rt.jar
 
        // 双亲委派机制 可以保护java的核心类不会被自己定义的类所替代
    }
}
class Car{
 
}
````
+ ***双亲委派机制：***
    + 可以保护java的核心类不会被自己定义的类所替代
    + 一层一层的让父类去加载，如果顶层的加载器不能加载，然后再向下类推

# 程序计数器（每个线程都有一个私有的程序计数器）
+ 每个线程都有一个程序计数器，是线程私有的。
+ 程序计数器就是一块十分小的内存空间；几乎可以不计
+ 作用： 看做当前字节码执行的行号指示器


