---
title: Lock锁
date: 2020-03-12 11:21:00
tags:
    - Lock
categories: 锁
cover: https://tvax2.sinaimg.cn/large/005DJQmOgy1gcr0zqk5j0j31hc0u0wlw.jpg
---

# 前言
在开发中，我们的架构都是高内聚，低耦合的，线程是实现高内聚，低耦合的一种方式。但是，在并发下，为了达到线程的安全，我们需要给线程加锁。

***小套路：线程操纵资源类***

# Sychonized方法和Sychonized块
+ 笔记：
+ 代码实现：
```java
/**
 * @program: demo
 * @description: sychonized 锁创建卖票简单程序
 * @author: dakuzai
 * @create: 2020-03-12 10:56
 */
public class SychonizedTest {
    public static void main(String[] args) {
        //新建资源类
        Ticket ticket = new Ticket();
        //操作资源类
        new Thread(() -> {
            for (int i = 1; i <= 40; i++) {
                ticket.SaleTicket();
            }
        }, "A").start();
        new Thread(() -> {
            for (int i = 1; i <= 40; i++) {
                ticket.SaleTicket();
            }
        }, "B").start();
        new Thread(() -> {
            for (int i = 1; i <= 40; i++) {
                ticket.SaleTicket();
            }
        }, "C").start();
    }
}
//资源类:属性，方法
class Ticket {
    //属性
    private int num = 30;
    public synchronized void SaleTicket() {
        if (num > 0) {
            System.out.println(Thread.currentThread().getName() + "卖出了" + (num--) + "张票，还剩" + num + "张票");
        }
    }
}
```
# Lock锁
+ 笔记：
+ 代码：
```java
/**
 * @program: demo
 * @description: Lock 锁实现卖票
 * @author: dakuzai
 * @create: 2020-03-12 11:34
 */
public class LockTest {
    public static void main(String[] args) {
        //新建资源类
        Ticket ticket = new Ticket();
        //操作资源类
        new Thread(() -> {
            for (int i = 1; i <= 40; i++) {
                ticket.SaleTicket();
            }
        }, "A").start();
        new Thread(() -> {
            for (int i = 1; i <= 40; i++) {
                ticket.SaleTicket();
            }
        }, "B").start();
        new Thread(() -> {
            for (int i = 1; i <= 40; i++) {
                ticket.SaleTicket();
            }
        }, "C").start();
    }
}

class Ticket {
    /**
     * ReentrantLock：可重入锁（非公平锁）
     */
    private Lock lock = new ReentrantLock();
    private int num = 30;
    public void SaleTicket() {
        lock.lock();//加锁
        try {
            if (num > 0) {
                System.out.println(Thread.currentThread().getName() + "卖出了" + (num--) + "张票，还剩" + num + "张票");
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            lock.unlock();//解锁
        }
    }
}
```
***小提示：***
+ ***非公平锁***
顾名思义就是不公平，☞线程可插队
+ ***公平锁***
顾名思义就是公平，☞线程不可插队

# Sychonized和lock的区别
1. Sychonized是一个关键字，Lock是一个对象；
2. Sychonized无法尝试获取锁（A线程获得锁后如果阻塞，B线程就会一直等待），Lock锁可以尝试
获取锁（tryLock方法）；
![tryLock方法](https://tva4.sinaimg.cn/large/005DJQmOgy1gcr0pxtukpj30ia036gmg.jpg)

3. Sychonized会自动释放锁（A线程结束，B线程如果异常了，也会释放锁），lock锁必须手动释放锁（unlock），否则就会死锁！
4. Sychonized可重复锁，一定是非公平的，但是Lock锁可以通过参数设置为公平锁；
![](https://tva2.sinaimg.cn/large/005DJQmOgy1gcr0uxvfogj30n1072gq5.jpg)
5. Sychonized适合在代码量比较少的同步问题，Lock适合在代码量特别大的时候，可以做到精准控制。

