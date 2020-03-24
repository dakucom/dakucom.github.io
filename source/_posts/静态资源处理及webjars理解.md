---
title: 静态资源处理及webjars理解
date: 2020-03-23 21:08:22
tags: 
    - spring
    - springMvc
    - web
categories: 
    - springBoot
cover: https://tvax1.sinaimg.cn/large/005DJQmOgy1gd4651zg6gj30b406eq2t.jpg
---
# 疑问
SpringBoot默认是没有 webapp 目录的，那我们资源应该放在哪里呢？
# 分析源码
SpringMVC 整个 SSM 都是基于它的，所以我们第一步应该去研究 SpringBoot 关于Mvc的自动配置！
1. 所有mvc相关的配置都在 WebMvcAutoConfiguration （视图解析器、静态资源过滤！）
2. addResourceHandlers 静态资源处理方法
```java
@Override
public void addResourceHandlers(ResourceHandlerRegistry registry) {
  // 禁用默认规则的一个配置，如果你手动的添加了资源映射路径的配置,那么这些自动配置就会直接失
效！
  if (!this.resourceProperties.isAddMappings()) {
    logger.debug("Default resource handling disabled");
    return;
 }
  // 缓存控制
  Duration cachePeriod = this.resourceProperties.getCache().getPeriod();
  CacheControl cacheControl =
this.resourceProperties.getCache().getCachecontrol().toHttpCacheControl();
  // 分析源代码，需要掌握看对象的方法调用！
 
  if (!registry.hasMappingForPattern("/webjars/**")) {
  
 customizeResourceHandlerRegistration(registry.addResourceHandler("/webjars/**")
                     
.addResourceLocations("classpath:/META-INF/resources/webjars/")
                     
.setCachePeriod(getSeconds(cachePeriod)).setCacheControl(cacheControl));
 }
 
  // 获取静态资源路径！
  String staticPathPattern = this.mvcProperties.getStaticPathPattern();
  // localhost:8080/
  // 如果访问映射的路径是 staticPathPattern = "/**";
  // this.resourceProperties.getStaticLocations())
  if (!registry.hasMappingForPattern(staticPathPattern)) {
    customizeResourceHandlerRegistration(registry.addResourceHandler("/**")
                     
.addResourceLocations(getResourceLocations(this.resourceProperties.getStaticLoca
tions()))
                     
.setCachePeriod(getSeconds(cachePeriod)).setCacheControl(cacheControl));
 }
}
```
# 什么是 webjars
[官方网址](https://www.webjars.org/)
![webjars](https://tvax3.sinaimg.cn/large/005DJQmOgy1gd46hqdafdj310z0jt75p.jpg)
***简单的说就是使用maven，用jar包的方式引入前端静态资源。***
```xml
<dependency>
    <groupId>org.webjars</groupId>
    <artifactId>jquery</artifactId>
    <version>3.4.1</version>
</dependency>
```
+ 根据源码分析：
    + 当我们访问localhost:8080/webjars/jquery.js时
    + 判断是否存在一个映射路径 /webjars/**，
    + addResourceHandler 处理逻辑 /webjars/a.js
    + addResourceLocations 处理资源的地址 classpath:/META-INF/resources/webjars/a.js
![webjars-jquery](https://tvax1.sinaimg.cn/large/005DJQmOgy1gd46xble4fj311g0bb7h2.jpg)
+ 网址访问一下，发现是可以访问成功了，那么现在回过头看源码就显得清晰多了
![sucess-webjars](https://tva2.sinaimg.cn/large/005DJQmOgy1gd47b0ujhoj30n30k8q3b.jpg)
# 静态资源映射基本规则
```java
  // localhost:8080/
  // 如果访问映射的路径是 staticPathPattern = "/**";
  // this.resourceProperties.getStaticLocations())
  if (!registry.hasMappingForPattern(staticPathPattern)) {
    customizeResourceHandlerRegistration(registry.addResourceHandler("/**")
                     
.addResourceLocations(getResourceLocations(this.resourceProperties.getStaticLoca
tions()))
                     
.setCachePeriod(getSeconds(cachePeriod)).setCacheControl(cacheControl));
 }
```
如图尝试点源码的步骤，
![addResourceHandlers2](https://tvax1.sinaimg.cn/large/005DJQmOgy1gd480u3541j30r709jwmj.jpg)
![addResourceHandler3](https://tvax1.sinaimg.cn/large/005DJQmOgy1gd481ax2vbj30no0b0n4s.jpg)
![addResourceHandler4](https://tvax4.sinaimg.cn/large/005DJQmOgy1gd481o5ylpj30oh09w100.jpg)
![addResourceHandlers5](https://tvax3.sinaimg.cn/large/005DJQmOgy1gd481yatt2j30v208bwlk.jpg)
得到一个结论
```java
private static final String[] CLASSPATH_RESOURCE_LOCATIONS =
{
"classpath:/META-INF/resources/", // 在 starter 中使用！ SWAGGER-UI
"classpath:/resources/",  // 文件资源
"classpath:/static/",   // 静态资源
"classpath:/public/"    // 公共的，图标......
};
```
# 总结
+ 我们如果配置了自己的资源映射目录，一切原来的配置就是失效！
+ 一旦自己定义了静态文件夹的路径！就使用自己的即可！