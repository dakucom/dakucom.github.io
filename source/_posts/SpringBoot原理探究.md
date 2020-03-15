---
title: SpringBoot原理探究
date: 2020-03-15 11:58:07
tags: 
    - SpringBoot
    - Spring
categories: SpringBoot
cover: https://tvax4.sinaimg.cn/large/005DJQmOgy1gcunne462aj30p00f93z3.jpg
---
# 诞生的原因
谈起SprigBoot，就一句话：真香！为什么这么说呢，那就要从Spring的发展史说起了。[SpringBoot官网](https://spring.io/projects/spring-boot/)
### 1. 发展史
+ Spring的创始人是Rod Johnson，他是一个音乐界的跨界大佬，故此，Spring框架整体显得十分优雅。
+ Spring是一个***开源框架***，为了解决企业应用开发的复杂性而创建的。故它是一个轻量级的控制反转(IOC)和面向切面编程（AOP）的容器框架。
    + 从大小与开销两方面而言Spring都是轻量级的；
    + 通过控制反转(IoC)的技术达到松耦合的目的。控制反转的思想就是***我们所有的对象都去容器中get即可***；
    + 提供了面向切面编程的丰富支持，允许通过分离应用的业务逻辑与系统级服务进行内聚性的开发；
    + 包含并管理应用对象(Bean)的配置和生命周期，这个意义上是一个容器；
    + 将简单的组件配置、组合成为复杂的应用，这个意义上是一个框架。
+ Spring框架是一个***分层架构***，由 7 个定义良好的模块组成。Spring 模块构建在核心容器之上，核心容器定义了创建、配置和管理 bean 的方式，如图
![Spring](https://tvax2.sinaimg.cn/large/005DJQmOgy1gcuoowk8lqj30qi0dxwey.jpg)
组成Spring框架的每个模块（或组件）都可以单独存在，或者与其他一个或多个模块联合实现。每个模块的功能如下：
1. **核心容器**：核心容器提供 Spring框架的基本功能。核心容器的主要组件是 BeanFactory，它是工厂模式的实现。BeanFactory 使用控制反转 （IOC） 模式将应用程序的配置和依赖性规范与实际的应用程序代码分开。
2. **Spring 上下文**：Spring上下文是一个配置文件，向 Spring 框架提供上下文信息。Spring 上下文包括企业服务，例如 JNDI、EJB、电子邮件、国际化、校验和调度功能。
3. **Spring AOP**：通过配置管理特性，Spring AOP模块直接将面向方面的编程功能集成到了 Spring框架中。所以，可以很容易地使Spring框架管理的任何对象支持AOP。Spring AOP模块为基于Spring的应用程序中的对象提供了事务管理服务。通过使用Spring AOP,不用依赖EJB组件，就可以将声明性事务管理集成到应用程序中。
4. **Spring DAO**：JDBC DAO 抽象层提供了有意义的异常层次结构，可用该结构来管理异常处理和不同数据库供应商抛出的错误消息。异常层次结构简化了错误处理，并且极大地降低了需要编写的异常代码数量（例如打开和关闭连接）。Spring DAO的面向JDBC的异常遵从通用的 DAO 异常层次结构。
5. **Spring ORM**：Spring框架插入了若干个ORM框架，从而提供了ORM的对象关系工具，其中包括JDO、Hibernate和iBatis SQL Map。所有这些都遵从 Spring的通用事务和DAO异常层次结构。
6. **Spring Web 模块**：Web上下文模块建立在应用程序上下文模块之上，为基于Web的应用程序提供了上下文。所以，Spring框架支持与Jakarta Struts的集成。Web 模块还简化了处理多部分请求以及将请求参数绑定到域对象的工作。
7. **Spring MVC 框架**：MVC框架是一个全功能的构建 Web 应用程序的MVC实现。通过策略接口，MVC框架变成为高度可配置的，MVC容纳了大量视图技术，其中包括 JSP、Velocity、Tiles、iText 和 POI。

上文大部分絮叨了Spring的基础知识，但是促使SpringBoot诞生的原因肯定不是这些啦，当然是因为开发效率啦（毕竟为了“懒惰”是促进人类发展的捷径嘛），传统的开发框架（SSH、SSM）为了简化一些固有的开发，会使用大量的配置文件，但是在开发过程中，管理这些配置文件会占用很多开发时间，所以，若是“自动配置能实现就好啦”这个想法就产生了。在Java世界——天上飞的，总有落地实现的一天。这个时候SpringBoot应运而生。
# SpringBoot的基本思想
+ 自动配置；
+ Spring的增强版本；
+ 约定大于配置（maven）；
+ 集成了市面上所有的常用的依赖（而且帮你自动管理版本依赖）
+ 内置web容器
# 欢迎进入SpringBoot的殿堂
## **1.pom.xml**
分析思路：只要是Maven项目都先分析 pom.xml
+ 1、进去就有一个父依赖
```java
<parent>    
    <groupId>org.springframework.boot</groupId>   
    <artifactId>spring-boot-starter-parent</artifactId>    
    <version>2.2.5.RELEASE</version>    
    <relativePath/> <!-- lookup parent from repository --> 
</parent>
```
+ 2、父依赖作用分析：资源过滤。插件管理
```java
<!--发现未知文件 yml-->
 <includes>    
     <include>**/application*.yml</include>   
     <include>**/application*.yaml</include>   
     <include>**/application*.properties</include> 
 </includes>

```
+ 3、我们发现它还有一个父依赖
```java
<!--父依赖spring-boot-dependencies SpringBoot 版本依赖控制-->
 <parent>    
    <groupId>org.springframework.boot</groupId>   <artifactId>spring-boot-dependencies</artifactId>   
    <version>2.2.5.RELEASE</version>   
    <relativePath>../../spring-boot-dependencies</relativePath>
</parent>
```
这才是真正的版本控制中心！以后我们导入的依赖几乎都不用编写版本号，如果自动依赖配置中不存在，我们才需要手动导入版本！ 如果存在就不管了
+ 4、启动器
```java
<!-           
spring-boot-starter : SpringBoot 启动器            
作用：                
1、导入所有的依赖                
2、spring-boot-starter-xxx 后面的xxx就是对应的场景依赖；                
3、存在哪些 spring-boot-starter https://docs.spring.io/springboot/docs/2.2.5.RELEASE/reference/html/using-spring-boot.html#using-boot-starter    
--> 
<dependency>    
<groupId>org.springframework.boot</groupId>   <artifactId>spring-boot-starter-web</artifactId>
</dependency> 
<!-- 
```
spring-boot-starter-xxx ： 对应不同的场景启动器 

spring-boot-starter-web： 导入了web模块运行所需要的全部场景依赖！
+ 5、插件
```java
<!-- 插件 --> 
<build>    
    <plugins>       
        <!--打包插件，可以将项目打成jar 或者 war包-->      
        <plugin>            
            <groupId>org.springframework.boot</groupId>           <artifactId>spring-boot-maven-plugin</artifactId>        
        </plugin>   
    </plugins> 
</build>
```
## **2.启动类**
```java
@SpringBootApplication // 一个注解 
public class Springboot01HelloworldApplication {
    public static void main(String[] args) {       
      // 一个方法        
     SpringApplication.run(Springboot01HelloworldApplication.class, args);   
    }
}
```
+ **重要的注解解释**
![重要的注解](https://tvax2.sinaimg.cn/large/005DJQmOgy1gcuskk93qxj30me0h0t9a.jpg)
    + @SpringBootApplication
    作用：标注了这个注解，就代表这个类使我们的一个启动类，SpringBoot 应用！
    点进源码我们会发现
    ```java
    @SpringBootConfiguration 
    @EnableAutoConfiguration 
    @ComponentScan() // 对应xml 中的 ComponentScan 标签；
    public @interface SpringBootApplication {     

    }
    ```
    + @ComponentScan:这个注解就是扫描包，将扫描的包中bean 注入到Spring中！
    + @SpringBootConﬁguration:
    ```java
    @Configuration // 这就是个配置类 
    public @interface SpringBootConfiguration {   

      }
    @Component // 这是一个组件
    ```
    作用：
    1. 主启动类也是Spring中的一个组件 
    2. 也是一个配置类
    + @EnableAutoConﬁguration 重点
        + @EnableAutoConﬁguration  ： 开启自动配置功能  
        + @AutoConﬁgurationPackage : 自动配置包，注册包的
        ```java
        static class Registrar implements ImportBeanDefinitionRegistrar, DeterminableImports {
            @Override    
            public void registerBeanDefinitions(AnnotationMetadata metadata, BeanDefinitionRegistry registry) {        
                register(registry, new PackageImport(metadata).getPackageName());   
            } }
        ```
        >AutoConﬁgurationImportSelector:自动配置导入选择器
        ![Snipaste_2020-03-15_18-02-38](https://tvax1.sinaimg.cn/large/005DJQmOgy1gcurq6dnpyj30vt0kzjt5.jpg)

        >在加载的时候读取配置，返回具体的结果，但是有没有生效，我们并不知道！
        ![Snipaste_2020-03-15_18-33-22](https://tva3.sinaimg.cn/large/005DJQmOgy1gcusm3mgv7j30jn0ezweq.jpg)
+ **SpringApplication**
```java
public SpringApplication(ResourceLoader resourceLoader, Class<?>...
primarySources) {
// 1、推断当前引用的类型，是否是Web应用
  this.webApplicationType = WebApplicationType.deduceFromClasspath();
  // 2、加载初始化器
  setInitializers((Collection)
getSpringFactoriesInstances(ApplicationContextInitializer.class));
  // 3、设置监听器
  setListeners((Collection)
getSpringFactoriesInstances(ApplicationListener.class));
  // 4、推断 mian方法
  this.mainApplicationClass = deduceMainApplicationClass();
}
```
作用：
1. 推断当前引用的类型，是否为web应用
2. 加载初始化器
3. 设置监听器
4. 推断 mian方法
+ Run方法
```java
public ConfigurableApplicationContext run(String... args) {
  StopWatch stopWatch = new StopWatch();
  stopWatch.start();
  ConfigurableApplicationContext context = null;
  Collection<SpringBootExceptionReporter> exceptionReporters = new ArrayList<>
();
  configureHeadlessProperty();
  // 1、监听器启动
  SpringApplicationRunListeners listeners = getRunListeners(args);
  listeners.starting();
  try {
    ApplicationArguments applicationArguments = new
DefaultApplicationArguments(args);
    // 初始化环境配置
    ConfigurableEnvironment environment = prepareEnvironment(listeners,
applicationArguments);
    configureIgnoreBeanInfo(environment);
    // 打印 Banner
    Banner printedBanner = printBanner(environment);
    // 创建上下文
    context = createApplicationContext();
    exceptionReporters =
getSpringFactoriesInstances(SpringBootExceptionReporter.class,
                            new Class[] {
ConfigurableApplicationContext.class }, context);
    prepareContext(context, environment, listeners, applicationArguments,
printedBanner);
    refreshContext(context);
    afterRefresh(context, applicationArguments);
    stopWatch.stop();
    if (this.logStartupInfo) {
      new
StartupInfoLogger(this.mainApplicationClass).logStarted(getApplicationLog(),
stopWatch);
   }
    listeners.started(context);
    callRunners(context, applicationArguments);
 }
  catch (Throwable ex) {
    handleRunFailure(context, ex, exceptionReporters, listeners);
    throw new IllegalStateException(ex);
 }
  try {
    listeners.running(context);
 }
  catch (Throwable ex) {
    handleRunFailure(context, ex, exceptionReporters, null);
    throw new IllegalStateException(ex);
 }
  return context;
}
```
Run方法思维参考图（特别感谢“狂神说”公众号）：
![run方法思维参考图](https://tva1.sinaimg.cn/large/005DJQmOgy1gcutwrd2juj30ls0k60xv.jpg)
+ 注入配置文件(@ConfigurationProperties)
    ```java
    /**
    * @ConfigurationProperties
    * 作用：
    * 1、绑定配置文件中的对象
    * 2、将对象的属性值和配置文件的值一一对应，然后注入
    * 3、这是一种批量注入的方式，更加快捷和方便，推荐使用
    *
    * 思想：
    * 我们编写的配置文件如果存在值，就使用配置文件中的值
    * 如果不存在，就是默认值或者null
    */
    ```
    + 自动配置原理
    [官方文档](https://docs.spring.io/spring-boot/docs/2.1.9.RELEASE/reference/htmlsingle/#common-application-properties)
        + @ConditionalOnXX 条件判断注解，通过条件来判断这个类是否生效！
        ![ConditionalOnXX](https://tva1.sinaimg.cn/large/005DJQmOgy1gcuu6y2b9tj30w20jw7bl.jpg)
        + 
        ```java
        // Configuration 表示这是一个配置类，和以前编写的配置文件一样！
        @Configuration(proxyBeanMethods = false)
        // 指定配置文件，HttpProperties 对应我们编写的配置文件，假设配置文件中有就有配置文件的，没有
        就用默认值
        @EnableConfigurationProperties(HttpProperties.class)
        // @ConditionalOnXX Spring底层注解；
        @ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
        // 如果 CharacterEncodingFilter 这个类，这个配置类才生效！
        @ConditionalOnClass(CharacterEncodingFilter.class)
        @ConditionalOnProperty(prefix = "spring.http.encoding", value = "enabled",
        matchIfMissing = true)
        public class HttpEncodingAutoConfiguration {
            // 注入绑定 HttpProperties 配置文件
            private final HttpProperties.Encoding properties;
            public HttpEncodingAutoConfiguration(HttpProperties properties) {
                this.properties = properties.getEncoding();
        }
        // 注入对应的bean
        // 如果自己配置了配置文件，就会注入到SpringBoot自动帮我们配置的bean中！
        // 注册bean的时候，SpringBoot自动帮我们关联了 HttpProperties
        // 我们编写的配置就可以直接生效！
        @Bean
        @ConditionalOnMissingBean
        public CharacterEncodingFilter characterEncodingFilter() {
        CharacterEncodingFilter filter = new OrderedCharacterEncodingFilter();
        filter.setEncoding(this.properties.getCharset().name());
            filter.setForceRequestEncoding(this.properties.shouldForce(Type.REQUEST));
            filter.setForceResponseEncoding(this.properties.shouldForce(Type.RESPONSE));
            return filter;
        }
        @Bean
        public LocaleCharsetMappingsCustomizer localeCharsetMappingsCustomizer() {
            return new LocaleCharsetMappingsCustomizer(this.properties);
        }
        private static class LocaleCharsetMappingsCustomizer
        implements
        WebServerFactoryCustomizer<ConfigurableServletWebServerFactory>, Ordered {
        private final HttpProperties.Encoding properties;
        LocaleCharsetMappingsCustomizer(HttpProperties.Encoding properties) {
            this.properties = properties;
        }
        @Override
        public void customize(ConfigurableServletWebServerFactory factory) {
        if (this.properties.getMapping() != null) {
                factory.setLocaleCharsetMappings(this.properties.getMapping());
            }
        }
        @Override
        public int getOrder() {
                    return 0;
                }
            }
        }
        ```
        > 小结：
        1. SpringBoot启动会加载大量的自动配置类！spring.factories
        2. 我们就需要判断我们的类是否存在在这里面，如果不存在我们需要手动导入，如果存在导入启动器即可！
        3. 我们的配置文件之所以可以自动配置生效：xxxxAutoConfiguation ： 自动配置类，根据条件 @ConditionalOnXX 判断是否生效；如果生效则成功注入bean；
        xxxxProperties：封装配置文件中的相关属性；
        4. 给容器中自动配置类配置属性的时候，会通过 xxxxProperties 类来获取某用户配置文件中的属性，如果没有则使用默认的，如果有则使用 自动配置的！