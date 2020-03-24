---
title: MVC自动配置
date: 2020-03-24 19:06:15
tags:
---
# 理解方式
+ 源码
+ 官方文档
# 官方文档
[官方文档](https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/htmlsingle/#boot-feat%20ures-spring-mvc-auto-con%EF%AC%81guration)
![SpringMVC-Auto-configuration](https://tvax2.sinaimg.cn/large/005DJQmOgy1gd58auudqdj30zh0fktbq.jpg)
(已经加注释，可自己去源码对号入座理解)
```java
// Spring MVC 自动配置
Spring MVC Auto-configuration 
// SpringBoot为SpringMVC 提供提供了自动配置，他可以很多好的工作于大多数的应用！
Spring Boot provides auto-configuration for Spring MVC that works well with most applications.
 // 自动配置在Spring默认配置的基础上添加了以下功能： 
 The auto-configuration adds the following features on top of Spring’s defaults: 
 // 包含视图解析器 
 Inclusion of ContentNegotiatingViewResolver and BeanNameViewResolver beans. 
 // 支持静态资源文件的路径吗，包含webjar的支持 
 Support for serving static resources, including support for WebJars (covered later in this document)). 
 // 自动注册了转换器      
 // 转换器 网页提交的前端对象，到后台自动封装为具体的对象；"1" 自动转换为 数字 1； 
 // 格式化器Formatter 【2020-03-18 后台可以自动封装为Date】
Automatic registration of Converter, GenericConverter, and Formatter beans. 
// 支持消息转换 
// request、response，对象自动转换为 json对象 
Support for HttpMessageConverters (covered later in this document). 
// 定错代码生成规则 
Automatic registration of MessageCodesResolver (covered later in this document). 
// 支持首页定制 
Static index.html support. 
// 支持自定义图标 
Custom Favicon support (covered later in this document). 
//配置web数据绑定 
Automatic use of a ConfigurableWebBindingInitializer bean (covered later in this document).
```
# 源码
![WebMvcAutoConfiguration](https://tva1.sinaimg.cn/large/005DJQmOgy1gd59686hzsj30tw0iuqjj.jpg)
+ ContentNegotiatingViewResolver 内容协商视图解析器
```java
@Bean
@ConditionalOnBean(ViewResolver.class)
@ConditionalOnMissingBean(name = "viewResolver", value = ContentNegotiatingViewResolver.class)
public ContentNegotiatingViewResolver viewResolver(BeanFactory beanFactory) {
ContentNegotiatingViewResolver resolver = new ContentNegotiatingViewResolver();
resolver.setContentNegotiationManager(beanFactory.getBean(ContentNegotiationManager.class));
// ContentNegotiatingViewResolver uses all the other view resolvers to locate
// a view so it should have a high precedence
// ContentNegotiatingViewResolver 使用其他所有的视图解析器定位视图，因此它应该具有一 个高的优先级
resolver.setOrder(Ordered.HIGHEST_PRECEDENCE);
return resolver;
}
```
+ 解析视图名字
```java
@Override 
@Nullable // 参数可以为空 
public View resolveViewName(String viewName, Locale locale) throws Exception {    
    RequestAttributes attrs = RequestContextHolder.getRequestAttributes();   
    Assert.state(attrs instanceof ServletRequestAttributes, "No current ServletRequestAttributes");    
    List<MediaType> requestedMediaTypes = getMediaTypes(((ServletRequestAttributes) attrs).getRequest());    if (requestedMediaTypes != null) {        
        // 获取所有候选的视图！        
        List<View> candidateViews = getCandidateViews(viewName, locale, requestedMediaTypes);        
        // 获取最好的视图        
        View bestView = getBestView(candidateViews, requestedMediaTypes, attrs);        
        // 返回最好的视图        
        if (bestView != null) {            
            return bestView;        
        }    
    }
    String mediaTypeInfo = logger.isDebugEnabled() && requestedMediaTypes != null ?        " given " + requestedMediaTypes.toString() : "";
    if (this.useNotAcceptableStatusCode) {        
     if (logger.isDebugEnabled()) {            
         logger.debug("Using 406 NOT_ACCEPTABLE" + mediaTypeInfo);        
         }        
         return NOT_ACCEPTABLE_VIEW;    
         }    
         else {        
             logger.debug("View remains unresolved" + mediaTypeInfo);        return null;    
        } 
    }
 ```
 # 猜想
 既然他是从容器中加载所有的视图解析器，那么我们可以猜想，我们自己写一个视图解析器，也可以被 扫描并加载！

# 测试
```java
// 自己写一个 bean 
@Bean 
public ViewResolver myViewResolver(){
        return new MyViewResolver(); 
     }
private static class MyViewResolver implements ViewResolver{    
    @Override    
    public View resolveViewName(String viewName, Locale locale) throws Exception {
                return null;    
         } 
    }
```
 # 总结
在SpringBoot中，如果我们想要使用自己定制化的东西，只需要给容器中添加这个组件就 好了！剩下的事情SpringBoot就会办公我们自动去做了！ 
