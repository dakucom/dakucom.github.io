---
title: SpringBoot操作数据库
date: 2020-03-18 08:14:46
tags:
    - SpringBoot
    - SpringData
    - Spring
    - Druid
categories: 
    - SpringBoot
    - SpringData
cover: https://tvax4.sinaimg.cn/large/005DJQmOgy1gcunne462aj30p00f93z3.jpg
---
# SpringData简介
Spring 的一个子项目。用于简化数据库访问。其主要目标是使数据库的访问变得方便快捷。对于数据访问层，无论是 SQL ，NoSQL，在SpringBoot 底层都是采用 SpringData 来进行封装的！

[官方网址](https://spring.io/projects/spring-data)
![SpringData](https://tva4.sinaimg.cn/large/005DJQmOgy1gcxrtcyky9j313p0ehdhe.jpg)
# IDEA选择SpringData
![IDEA-SpringData](https://tva3.sinaimg.cn/large/005DJQmOgy1gcxs9vflgyj316l0gqwfo.jpg)
+ Spring JDBC和SpringData JDBC对比
![Spring-JDBC](https://tva4.sinaimg.cn/large/005DJQmOgy1gcxtcphusxj30tk0a0115.jpg)
![SpringData-JDBC](https://tvax2.sinaimg.cn/large/005DJQmOgy1gcxtcymlegj30rb08x45g.jpg)
+ ***IDEA连接数据库时会报一个serverTimezone的错误：原因就是MySQL驱动版本：8.x需要配置时区，5.x不需要*** 
    + 方案一：每次新建连接数据库都要设置
    ![IDEA连接Mysql](https://tvax1.sinaimg.cn/large/005DJQmOgy1gcxu5kuvr4j30j70k8wmw.jpg)
    ![errro-serverTimezone](https://tvax2.sinaimg.cn/large/005DJQmOgy1gcxu60ctv2j30ku0g7q3w.jpg)
    ![serverTimezone](https://tva3.sinaimg.cn/large/005DJQmOgy1gcxu6ab0cwj30li0c9js7.jpg)
    ![success-serverTimezone](https://tvax3.sinaimg.cn/large/005DJQmOgy1gcxu6jmnw3j30m80j6wg2.jpg)
    + 方案二：win+r 登录MySQL
    1. 查询当前时区
    SELECT @@global.time_zone;
    ```java
    mysql> SELECT @@global.time_zone;
    +--------------------+
    | @@global.time_zone |
    +--------------------+
    | SYSTEM |
    +--------------------+
    ##显示 SYSTEM 说明当前使用的是操作系统时区，

    mysql> SELECT @@global.system_time_zone;
    +---------------------------+
    | @@global.system_time_zone |
    +---------------------------+
    | UTC                       |
    +---------------------------+
    ##显示 UTC 说明当前使用的是utc时间
    ```
    2.设置为东八区时区
    ```java
    set global time_zone = '+8:00';
    flush privileges; 
    ```
    3. 重新查询当前时区
    ```java
    mysql> SELECT @@global.time_zone;
    +--------------------+
    | @@global.time_zone |
    +--------------------+
    | +08:00             |
    +--------------------+
    1 row in set (0.00 sec)
    ```
    4. exit 退出当前MySQL
+ 自动配置核心类
    + DataSourceConfiguration 自动配置的数据源；
    + DataSourceAutoConfiguration 自动配置类；
    + DataSourceProperties 配置文件绑定！
+ 测试
![HikariDataSource](https://tva4.sinaimg.cn/large/005DJQmOgy1gcxvlwgj2ej30vf0hj7lh.jpg)
+ **CRUD：JdbcTemplate**
使用xxxTemplate引擎模板，真香！
![CRUD](https://tvax2.sinaimg.cn/large/005DJQmOgy1gcxwy6uqknj30sx0ibto8.jpg)
+ HikariDataSource和Druid的区别

    HikariDataSource 号称当前 Java Web速度最快的数据源，和 Druid相比，效率会更高一点！
    不同的数据源拥有不同的配置；
# 集成Druid
+ **简介**
Java程序很大的一部分都是要操作数据库的，为了提高操作数据库的性能，所以一般会使用连接池！
    + Druid 是阿里巴巴的开源组件之一，结合了C3P0，DBCP的优点，并且自带日志监控！
    + Druid 可以天然的监控 SQL 和 数据库连接池的状况！
    + 配置参数
    [Github网址](https://github.com/alibaba/druid/wiki/DruidDataSource%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8)
    > 任何池化技术，道理都是想通的，配置参数达到更高的性能，思考的时候对比我们之前学习的线程池！
+ **导入依赖**
```java
<dependency>
  <groupId>com.alibaba</groupId>
  <artifactId>druid</artifactId>
  <version>1.1.16</version>
</dependency>
<dependency>
  <groupId>log4j</groupId>
  <artifactId>log4j</artifactId>
  <version>1.2.17</version>
</dependency>
```
+ **配置数据源**
```java
spring:
  datasource:
    username: root
    password: 123456
    #?serverTimezone=UTC解决时区的报错
    url: jdbc:mysql://localhost:3306/springboot?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8
    driver-class-name: com.mysql.cj.jdbc.Driver
    type: com.alibaba.druid.pool.DruidDataSource
    #Spring Boot 默认是不注入这些属性值的，需要自己绑定
    #druid 数据源专有配置
    initialSize: 5
    minIdle: 5
    maxActive: 20
    maxWait: 60000
    timeBetweenEvictionRunsMillis: 60000
    minEvictableIdleTimeMillis: 300000
    validationQuery: SELECT 1 FROM DUAL
    testWhileIdle: true
    testOnBorrow: false
    testOnReturn: false
    poolPreparedStatements: true
    #配置监控统计拦截的filters，stat:监控统计、log4j：日志记录、wall：防御sql注入
    #如果允许时报错 java.lang.ClassNotFoundException: org.apache.log4j.Priority
    #则导入 log4j 依赖即可，Maven 地址：https://mvnrepository.com/artifact/log4j/log4j
    filters: stat,wall,log4j
    maxPoolPreparedStatementPerConnectionSize: 20
    useGlobalDataSourceStat: true
    connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500
```
+ **配置数据日志监控！**
```java
import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import javax.sql.DataSource;
import java.util.Arrays;
import java.util.HashMap;
// 自己定义的 DruidConfig
@Configuration
public class DruidConfig {
  // .... @Bean
  // 绑定配置的bean
  @ConfigurationProperties(prefix = "spring.datasource")
  @Bean
  public DataSource druidDateSource(){
    return new DruidDataSource();
 }
  // 注册后台监控页面。SpringBoot 如何注册Servlet
  // 没有web.xml 的情况配置 Servlet 的方法 ： ServletRegistrationBean
  // 测试访问 /druid
  @Bean
  public ServletRegistrationBean statViewServlet(){
    // StatViewServlet 配置后台监控
    ServletRegistrationBean bean = new ServletRegistrationBean(new
StatViewServlet(),"/druid/*");
    HashMap<String, String> map = new HashMap<>();
    //后台的登录用户名和密码
    map.put("loginUsername","admin");
    map.put("loginPassword","root");
    // 访问权限
    // map.put("allow","localhost"); //只允许本机访问
    map.put("allow",""); // 所有人都可以访问
    // deny拒绝访问
    // map.put("deny","192.168.1146.137"); // ip会被拒绝访问
    bean.setInitParameters(map); //设置servlet的初始化参数
    return bean;
 }
  // 过滤器的配置，看看哪些请求需要被过滤
  // 没有web.xml 的情况配置 Filter 的方法！ FilterRegistrationBean
  @Bean
  public FilterRegistrationBean webStatFilter(){
    FilterRegistrationBean bean = new FilterRegistrationBean();
    bean.setFilter(new WebStatFilter());
    // 配置内容
    // 配置哪些请求可以被过滤！
    HashMap<String, String> map = new HashMap<>();
    map.put("exclusions","*.js,*.css,/druid/*");
    bean.setInitParameters(map);
    bean.setUrlPatterns(Arrays.asList("/*"));
    return bean;
 }
}
```
+ **测试**
![druid-login](https://tvax2.sinaimg.cn/large/005DJQmOgy1gcxzwc5nq8j30yb0f3glw.jpg)
![success-druid](https://tvax4.sinaimg.cn/large/005DJQmOgy1gcxzx00milj30wu0ljwfv.jpg)
# 总结
+ 使用第三方数据源的思想
    1. 导入依赖
    2. 看源码配置
    3. 看官方解释
    4. 测试使用！