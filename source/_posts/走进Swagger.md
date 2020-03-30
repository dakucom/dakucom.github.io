---
title: 走进Swagger
date: 2020-03-30 16:21:10
tags: 
    - swagger
    - SpringBoot
categories: Swagger
cover: https://tvax1.sinaimg.cn/large/005DJQmOgy1gdc1bynqpkj30t009vjs1.jpg
---
# 前提
+ 前后端分离：
    + 前端 --> 前端的控制层，视图层. （专业的前端团队开发）
    + 后端 --> 后端控制层、服务层、数据访问层.（专业的后端团队开发）
    + 前后端的交互是通过 API 来进行的？关于API的约定该怎么处理呢？
+ 早期：后端编写文档（协同文档），前端根据文档解析接口然后渲染视图！
+ 问题：前后端集成，前端或者后端无法做到：及时协商！最终可能导致问题集中爆发或者项目延时！
+ 现在得开源项目中，都有集成Swagger！
# 什么是Swagger
1. 导入依赖
[官网](https://swagger.io/)
![Swagger官网页面](https://tvax1.sinaimg.cn/large/005DJQmOgy1gdc1ddn0brj317u0j3djp.jpg)
+ 号称世界上最流行的API框架！
+ Restful api 自动生成文档 ，和代码对应的
+ 直接运行测试接口，不用下载 postman
+ 支持多种语言：（Java、Php等）
# 集成Swagger
```xml
<!--导入依赖-->
<!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger2 -->
<dependency>
  <groupId>io.springfox</groupId>
  <artifactId>springfox-swagger2</artifactId>
  <version>2.9.2</version>
</dependency>
<!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui -->
<dependency>
  <groupId>io.springfox</groupId>
  <artifactId>springfox-swagger-ui</artifactId>
  <version>2.9.2</version>
</dependency>
```
2. 编写配置
```java
@Configuration
public class SwaggerConfig {
  // 注册bean Docket
  @Bean
  public Docket docket(){
    return new Docket(DocumentationType.SWAGGER_2);
 }
}
// 主启动类开启配置！
@SpringBootApplication
// 使Swagger生效，默认是不开启！@EnableSwagger2
@EnableSwagger2
public class SpringbootPlusApplication {
  public static void main(String[] args) {
    SpringApplication.run(SpringbootPlusApplication.class, args);
 }
}
```
3. 启动测试 : http://localhost:8080/swagger-ui.html
![启动测试](https://tvax4.sinaimg.cn/large/005DJQmOgy1gdc1lb53f1j315w0k2aaz.jpg)
4. 注意点：
写Controller的之后一定要精确到方法！
![ResutFul风格](https://tvax4.sinaimg.cn/large/005DJQmOgy1gdc1nwho1kj315g0fi0t5.jpg)
# 配置Swagger
1. 配置文档信息
```java
@Bean
public Docket docket(){
  return
    new Docket(DocumentationType.SWAGGER_2)
   .apiInfo(apiInfo()); // 配置文档信息！
}
// 配置文档信息 apiInfo
private ApiInfo apiInfo(){
  Contact contact = new
Contact("coding","https://www.icodingedu.com/course/52","24736743@qq.com");
  return new ApiInfo(
    "SpringBoot-Plus 接口文档信息",
    "所有的测试请求地址",
    "v1.0",
    "https://www.icodingedu.com/course/52", //组织连接
    contact,
    "Apache 2.0",
    "http://www.apache.org/licenses/LICENSE-2.0",
    new ArrayList<>());
}
```
2. 配置接口扫描，需要哪些被扫描到文档中
```java
@Bean
public Docket docket(){
  return
    new Docket(DocumentationType.SWAGGER_2)
   .apiInfo(apiInfo())
   .select()
   .apis(RequestHandlerSelectors.basePackage("com.coding.controller"))
   .build();
}
```
 + 如图：
    ![测试图片](https://tva4.sinaimg.cn/large/005DJQmOgy1gdc1qo8n1nj315j0e3jrw.jpg)
+ 其与的几个方法说明：
    ```java
    any()  # 扫描所有，项目的所有接口都会被扫描的
    none()  # 不扫描接口
    basePackage()  # 根据包路径扫描
    withMethodAnnotation(GetmMapping.class) # 通过方法注解扫描！ 比如 GetMapper.class
    withClassAnnotation(Controller.class) # 通过类上的注解扫描！
    ```
3. 设置哪些接口不被扫描！
![图片](https://tva2.sinaimg.cn/large/005DJQmOgy1gdc1xc24acj315q03t74q.jpg)
```java
@Bean
public Docket docket(){
  return
    new Docket(DocumentationType.SWAGGER_2)
   .apiInfo(apiInfo()) // 配置文档信息！
   .select()
   .apis(RequestHandlerSelectors.basePackage("com.coding.controller"))
    // 配置path过滤请求！只扫描以 /kuang 开头的请求！
   .paths(PathSelectors.ant("/kuang/**"))
   .build();
}
```
# 配置Swagger的开关
test、dev 环境下才可以显示 swagger-ui , prod 不显示！
```java
@Bean
public Docket docket(){
  return
    new Docket(DocumentationType.SWAGGER_2)
   .apiInfo(apiInfo())
   .enable(false) // 如果是false就无法在浏览器中访问！
   .select()
   .apis(RequestHandlerSelectors.basePackage("com.coding.controller"))
  
   .paths(PathSelectors.ant("/kuang/**"))
   .build();
}
```
测试，如图
![测试结果](https://tva3.sinaimg.cn/large/005DJQmOgy1gdc1yfpb0wj30q703et8q.jpg)
**提示：**
这里的 false 应该是一个变量：技巧点！通过Profiles类来获取限定咋们的开发环境！
```java
@Bean
public Docket docket(Environment environment){
  // 设置要显示的swagger环境
  Profiles of = Profiles.of("dev", "test");
  // 判断是否处于该环境！
  boolean b = environment.acceptsProfiles(of);
  return
    new Docket(DocumentationType.SWAGGER_2)
   .apiInfo(apiInfo()) // 配置文档信息！
   .enable(b) // 如果是false就无法在浏览器中访问！
   .select()
   .apis(RequestHandlerSelectors.basePackage("com.coding.controller"))
   .paths(PathSelectors.ant("/kuang/**"))
   .build();
}
```
# 配置API分组
这个大家现在过个眼熟即可，能掌握最好，后面我们使用MP一键生成！
![Swagger](https://tvax4.sinaimg.cn/large/005DJQmOgy1gdc20kaacej316b0glt9m.jpg)
```java
@Bean
public Docket docket1(){
  return new Docket(DocumentationType.SWAGGER_2).groupName("group1");
}
@Bean
public Docket docket2(){
  return new Docket(DocumentationType.SWAGGER_2).groupName("group2");
}
@Bean
public Docket docket3(){
  return new Docket(DocumentationType.SWAGGER_2).groupName("group3");
}
```
# 实体配置
1. 新建一个实体类
```java
// 和注释差不多，但是会被Swagger识别
@ApiModel("用户实体")
public class User {
  @ApiModelProperty("用户名")
  private String username;
  @ApiModelProperty("密码")
  private String password;
}
```
2. 请求的接口配置！如果能够看到实体类配置！如果这个实体类在请求的返回值或者泛型中，那么就会
被映射！
```java
// 只有返回值用到才会显示
@GetMapping("/getUser")
public User getUser(){
  return new User();
}
```
测试一下，如图：
![测试](https://tvax2.sinaimg.cn/large/005DJQmOgy1gdc22ubdyvj314m05lt8j.jpg)
3. 接口配置
```java
@Api(tags="AAAAA测试")
@RestController
public class HelloController {
  // 后面我们自己开发项目的时候，名主要是写 方法注释和参数注释！
  @ApiOperation("coding的接口")
  @PostMapping("/coding")
  public String coding(@ApiParam("这个名字会被返回！") String username){
    return username;
 }
  @GetMapping("/kuang/hello")
  public String hello(){
    return "hello,Swagger";
 }
  // 只有返回值用到才会显示
  @GetMapping("/getUser")
  public User getUser(){
    return new User();
 }
```
# 扩展：皮肤包！
1. 默认的 http://localhost:8081/swagger-ui.html
```xml
<!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui -->
<dependency>
  <groupId>io.springfox</groupId>
  <artifactId>springfox-swagger-ui</artifactId>
  <version>2.9.2</version>
</dependency>
```
![swagger-ui](https://tva3.sinaimg.cn/large/005DJQmOgy1gdc28nh2ocj315g0h2dgd.jpg)
2. BootStrap-ui http://localhost:8080/doc.html
```xml
<!-- https://mvnrepository.com/artifact/com.github.xiaoymin/swagger-bootstrap-ui
-->
<dependency>
  <groupId>com.github.xiaoymin</groupId>
  <artifactId>swagger-bootstrap-ui</artifactId>
  <version>1.9.6</version>
</dependency>
```
![BootStrap-ui](https://tva3.sinaimg.cn/large/005DJQmOgy1gdc29srzncj31720o2js6.jpg)
3. Layui的框架 http://localhost:8080/docs.html
```xml
<!-- https://mvnrepository.com/artifact/com.github.caspar-chen/swagger-ui-layer -->
<dependency>
  <groupId>com.github.caspar-chen</groupId>
  <artifactId>swagger-ui-layer</artifactId>
  <version>1.1.3</version>
</dependency>
```
![Layui](https://tva3.sinaimg.cn/large/005DJQmOgy1gdc2b8wamxj316y0j0wf9.jpg)
4. mg-ui http://localhost:8080/document.html
![mg-ui](https://tvax3.sinaimg.cn/large/005DJQmOgy1gdc2bwy26tj31710d7gmd.jpg)