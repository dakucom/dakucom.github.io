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
```java
// Test01
AppClassLoader       03 （自己写的所有类）
ExtClassLoader       02  （扩展加载器）
BootStrap (最顶层)    01  java.lang.String  rt.jar
```
# Native方法
## 思考
java 真的可以开启线程吗？如果不能，那么java是怎么做到的呢？

```java
public class Test {
    public static void main(String[] args) {
        new Thread().start();
    }
}
```
分析Thread()的源码会发现一个native
```java
private native void start0();//源码
```
native : 只要是带了这个关键字的，说明 java的作用范围达不到，只能去调用底层 C 语言的库！

**JNI ： Java Native Interface （Java 本地方法接口）**

## 为什么会有 Native 这个东西？
    1995年，java 必须可以去调用 c、c++的库，所以说Java就在内存中专门开辟了一块区域标记为 native 方法
# 程序计数器（每个线程都有一个私有的程序计数器）
分支、循环、跳转、异常处理！都需要依赖于程序计数器来完成！
+ 每个线程都有一个程序计数器，是线程私有的。
+ 程序计数器就是一块十分小的内存空间；几乎可以不计
+ 作用： 看做当前字节码执行的行号指示器
+ 例子
![图片](https://tvax2.sinaimg.cn/large/005DJQmOgy1gdfoe7u852j30ll0ak3zr.jpg)

    + `bipush`  将 int、float、String、常量值推送值栈顶；

    + `istore` 将一个数值从操作数栈存储到局部变量表；

    + `iadd `  加

    + `imul` 乘
# 方法区（元空间）
Method Area 方法区 是 Java虚拟机规范中定义的运行是数据区域之一，和堆（heap）一样可以在线程之间共享！
## **JDK1.7之前**
永久代：用于存储一些虚拟机加载类信息，常量，字符串、静态变量等等。。。。这些东西都会放到永久代中；

永久代大小空间是有限的：如果满了 `OutOfMemoryError：PermGen `

## **JDK1.8之后**

彻底将永久代移除  HotSpot jvm ，Java Heap 中或者 Metaspcace（Native Heap）元空间；

元空间就是方法区在   HotSpot jvm  的实现；

方法区重要就是来存：类信息，常量，字符串、静态变量、符号引用、方法代码。。。。。。

元空间和永久代，都是对JVM规范中方法区的实现。

### 元空间和永久代最大的区别：
**元空间并不在Java虚拟机中，使用的是本地内存！**

