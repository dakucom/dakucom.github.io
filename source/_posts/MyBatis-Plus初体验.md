---
title: MyBatis-Plus初体验
date: 2020-04-05 12:45:13
tags: MyBatis-Plus
categories: MyBatis-Plus
cover: https://tva2.sinaimg.cn/large/005DJQmOgy1gdt772r16kj307s07s74f.jpg
---
# 前言
## [官网](https://mp.baomidou.com/)
## MyBatis-Plus（简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。
# 愿景
我们的愿景是成为 MyBatis 最好的搭档，就像 魂斗罗 中的 1P、2P，基友搭配，效率翻倍。
![MyBatis-Plus](https://tva1.sinaimg.cn/large/005DJQmOgy1gdt7mrgvpij30sg0a1n0a.jpg)
# 特性
1. **无侵入**：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑
2. **损耗小**：启动即会`自动注入基本 CURD，性能基本无损耗`，直接面向对象操作
3. **强大的 CRUD 操作**：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求
4. **支持 Lambda 形式调用**：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错
5. **支持主键自动生成**：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题
6. **支持 ActiveRecord 模式**：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作
7. **支持自定义全局通用操作**：支持全局通用方法注入（ Write once, use anywhere ）
8. **`内置代码生成器（pojo、dao、xml、service、.....）`**：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用
9. **内置分页插件**：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询
10. **分页插件支持多种数据库**：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、Postgre、SQLServer 等多种数据库
11. **`内置性能分析插件`**：可输出 Sql 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询
12. **内置全局拦截插件**：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作
# 支持数据库
+ mysql 、 mariadb 、 oracle 、 db2 、 h2 、 hsql 、 sqlite 、 postgresql 、 sqlserver
+ 达梦数据库 、 虚谷数据库 、 人大金仓数据库
# 框架结构
![MyBatis-Plus](https://tva2.sinaimg.cn/large/005DJQmOgy1gdt84iidw4j310y0no7j6.jpg)
# 初体验
## 建立数据库，导入数据(可以自己建立，我这里参考官网)
```bash
DROP TABLE IF EXISTS user;

CREATE TABLE user
(
	id BIGINT(20) NOT NULL COMMENT '主键ID',
	name VARCHAR(30) NULL DEFAULT NULL COMMENT '姓名',
	age INT(11) NULL DEFAULT NULL COMMENT '年龄',
	email VARCHAR(50) NULL DEFAULT NULL COMMENT '邮箱',
	PRIMARY KEY (id)
);
```
```bash
DELETE FROM user;

INSERT INTO user (id, name, age, email) VALUES
(1, 'Jone', 18, 'test1@baomidou.com'),
(2, 'Jack', 20, 'test2@baomidou.com'),
(3, 'Tom', 28, 'test3@baomidou.com'),
(4, 'Sandy', 21, 'test4@baomidou.com'),
(5, 'Billie', 24, 'test5@baomidou.com');
```
## 导入对应的依赖
```xml
    <dependencies>
        <!--mp依赖   就不需要导入mybatis-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.0.5</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <!--spring2.x 默认MySQL8驱动配置  8.0以上需要配置时区-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-configuration-processor</artifactId>
            <optional>true</optional>
        </dependency>
        <!--IDEA中安装Lombok插件-->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
    </dependencies>
```
## 编写项目
+ 配置数据库连接
```xml
# DataSource Config
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/mybatis_plus?useSSL=false&useUnicode=true&characterEncoding=utf8&serverTimezone=GMT%2B8
    username: root
    password: 123456
```
+ 编写实体类
```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable{
    private Long id;
    private String name;
    private Integer age;
    private String email;
}
```
+ 编写接口继承BaseMapper 即可！至此所有的CRUD 都已经完成了！
```java
@Repository
public interface UserMapper extends BaseMapper<User> {
}
```
> 所有的操作，BaseMapper 都已经帮我们封装好了，我们拿来即用！
![BaseMapper源码](https://tvax3.sinaimg.cn/large/005DJQmOgy1gdt8evodwnj30xw0jbawx.jpg)
## 测试使用即可！
### 主启动类添加MapperScan
![主启动类添加MapperScan](https://tva4.sinaimg.cn/large/005DJQmOgy1gdt8h0ch0vj30s408vqac.jpg)
### 测试
+ 基本测试
![测试](https://tva1.sinaimg.cn/large/005DJQmOgy1gdt8jlp2zsj30vu0ij4ju.jpg)
+ 查看MP怎么帮我们自动生成SQL，即开启日志功能
    ```xml
    # 配置日志！
    mybatis-plus:
    configuration:
        log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
    ```
![测试](https://tva1.sinaimg.cn/large/005DJQmOgy1gdt8mkcupxj30w80c54cr.jpg)
# 小结
## 简单时，MyBatis-Plus帮我们自动生成
+ 基本的增删改查
+ 乐观锁
+ 逻辑删除
+ 自动填充
+ 分析性能
+ 主键策略生成
## 复杂时，编写Wapper条件构造器即可！
## 所以说，70%以上的业务都可以自动实现，抛开了底层dao层，可以让我们更加专心的写controller层的逻辑。
## MP是让我们可以通过面向对象的方式编写SQL