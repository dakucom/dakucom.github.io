---
title: 走进 VUE
date: 2020-03-31 22:45:42
tags: 
    - VUE
    - SpringBoot
categories: VUE
cover: https://tvax1.sinaimg.cn/large/005DJQmOgy1gdee3ujgytj30et08cguc.jpg
---
# 前言
当前最火的前端框架，至于它为什么这么火，这就需要我们慢慢的去理解它了，走你！
# 开发环境
+ VsCode（我自己使用的方式）
+ IDEA插件集成
+ python
+ Node
    + node
    + npm
# VsCode
1. [官网下载软件]( https://code.visualstudio。com/)
2. 按照提示next安装即可
3. 默认是英文，不适应的话可以安装中文插件，安装后记得重启，如图：
![安装中文插件](https://tvax2.sinaimg.cn/large/005DJQmOgy1gdeeit8h26j30k30hrwg9.jpg)
4. 下载需要的基本插件，如图： 
![基本插件](https://tvax1.sinaimg.cn/large/005DJQmOgy1gdeelxzhdnj30oq0jcwft.jpg)
# Nodejs
+ [官网下载](http://nodejs.cn/)
+ 什么是Node.js(前端运行时环境)：
    是一个基于 Chrome V8 引擎的 JavaScript 运行环境,说白了就是运行在服务端的JavaScript;可以这么说，NodeJS 带来了全栈时代。
+ 需要安装python环境（最好安装python2，因为python2和python3有很大区别）
# NPM包管理
+ 我们安装nodejs的时候，就有了 npm 的环境！
    > C:\Users\Administrator>npm -v 6.13.4
+ 什么是 npm

    NPM的全称是Node Package Manager，是一个NodeJS包管理和分发工具，已经成为了非官方的发布
    Node模块（包）的标准。就好比maven，所有东西只要到导入依赖即可，npm 也是如此，npm
install，好比Linux 的 yum 安装！
# VUE开发时使用ES6语法
其实就是一个规范而已！ JavaScript的下一代标准！ES6 = ES2015 = ECMAScript6！
1. let 声明变量！
    + var与let的区别
        + 与var不同，var声明变量是能够全局使用的，而let声明的变量为**私有变量**，是**局部**的;
        + var可以声明多次，但let 变量**不能重复声明**，不然会报错。
        + var声明的对象会提升对象的作用域，而let声明的对象不会。
2. 常量变化
一旦使用const声明了常量，这个常量就不允许再改变了，且声明时必须同时赋值。
3. 解构赋值，ES6更加优雅的赋值方式
```js
//传统赋值
let a = 1, b = 2, c = 3
console.log('传统赋值：', a, b, c)
//解构赋值
let [x, y, z] = [1, 2, 3]
console.log('解构赋值：',x, y, z)

//定义用户对象
let user = { name: 'dakuzai', age: 18 }

//传统对象赋值
let name1 = user.name
let age1 = user.age
console.log('传统对象赋值：', name1, age1)

//解构对象赋值,变量必须与对象属性同名
let { name, age } = user
console.log('解构对象赋值：', name, age)
```
4. 模板字符串
```js
let name = 'dakuzai'
let age = 18
// 传统的，大家的习惯！  ${}
let message = 'name:' + name + 'age:' + age; 
// 拼接字符串
// es6模板字符串拼接,字符串引号需要改为 ``
let es6message = `name: ${name} age:${age}` 
console.log(es6message)
```
+ 对象声明简写
```js
//传统对象声明
let name1 = 'hth1'
let age1 = 18
let user1 = { name: name1, age: age1 }
console.log(user1)

//es6简写 对象属性名会被定义成与变量名相同
let name = 'hth'
let age = 18
let user = { name, age }
console.log(user)
```
+ 定义方法简写
```js
const person = {
 // 传统方法
 sayHi: function () {
  console.log("这是传统方法定义")
}
}
person.sayHi();
// ES6方法
const ES6person = {
 sayHi() {
  console.log('这是ES6方法简写')
}
}
ES6person.sayHi();
```
+ 对象拓展运算符
```js
let person = { name: 'dakzuai', age: 18 }
//复制引用
let personCopyReference = person
//修改名称
personCopyReference.name = 'peng'
console.log('原对象', user.name)
console.log('复制引用后的新对象', personCopyReference.name)

//对象深度拷贝
let user = { name: 'dakzuai', age: 18 }
let userCopyProperty = { ...user }
//修改名称
userCopyProperty.name = '666'
console.log('原对象', user.name)
console.log('深度拷贝后的新对象', userCopyProperty.name)
```
+ 默认的参数
```js
function showInfo(name, age = 18) {
 console.log(name + ',' + age)
}
// 测试
showInfo('dakuzai', 18)
showInfo('dakuzai')
showInfo('dakuzai', undefined)
showInfo('dakuzai', null)
```
+ 箭头函数(参数 => 函数体),类似Lombda表达式
```js
const f1 = function () {
    console.log('传统匿名函数')
}
f1()

const f2 = () => {
    console.log('es6箭头函数')
}
const f3 = (str) => console.log(str)
f2()
f3('如果只有一行代码，可省略{}')
```
+ 小结：
未来，前端代码的底层大量可以看见这些代码，尤其是对接后端接口api
# Webpack
+ 什么是 Webpack

    Webpack 是一个前端的资源、打包工具！
+ webpack 安装
    1. 安装
    ```bash
    npm install -g webpack webpack-cli
    ```
    2. 查看版本信息
    ```bash
    webpack -v
    ```
    ![安装图片](https://tvax3.sinaimg.cn/large/005DJQmOgy1gdeiorss9aj30qm098jri.jpg)
    3. 初始化项目
    
# MVVM模式
+ 什么是MVVM模式呢？
    + MVVM(Model-View-ViewModel)是一种软件架构设计模式，由微软 WPF(用于替代 WinForm，以 前就是用这个技术开发桌面应用程序的)和 Silverlight(类似于 Java Applet，简单点说就是在浏览器上 运行的 WPF) 的架构师 Ken Cooper 和 Ted Peters 开发，是一种简化用户界面的事件驱动编程方式。 由 John Gossman(同样也是 WPF 和 Silverlight 的架构师)于 2005 年在他的博客上发表。
    + MVVM 源自于经典的 MVC(Model-View-Controller)模式。MVVM 的核心是 ViewModel 层，负责转 换 Model 中的数据对象来让数据变得更容易管理和使用，其作用如下:
        + 该层向上与视图层进行双向数据绑定
        + 向下与 Model 层通过接口请求进行数据交互
    + MVVM 已经相当成熟了，当下流行的 MVVM 框架有 Vue.js ， AngularJS 等。
+ 为什么要用MVVM模式？
![MVVM模式](https://tva2.sinaimg.cn/large/005DJQmOgy1gdeez499g5j30cu0h6jrh.jpg)
    从上图可以看出若不是为了**解耦**，那又啥意思呢。它和MVC 模式一样，主要目的是分离视图(View)和模型(Model)。
    + **低耦合**: 视图(View)可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的 View 上，当 View 变化的时候 Model 可以不变，当 Model 变化的时候 View 也可以不变。
    + **可复用**: 你可以把一些视图逻辑放在一个 ViewModel 里面，让很多 View 重用这段视图逻辑。
    + **独立开发**: 开发人员可以专注于业务逻辑和数据的开发(ViewModel)，设计人员可以专注于页面设计。
    + **可测试**: 界面素来是比较难于测试的，而现在测试可以针对 ViewModel 来写。
+ 小结：

    在Vue的理念中，主要工作重点专注在V层和VM层。
# Vue 基本语法
1. 数据绑定
    + 单向绑定 v-bind（主要用于视图获取vm中的值）
    ```html
    <div id="app">
    <input type="text" v-bind:value="message">
    </div>
    ```
    + 双向绑定 v-model(主要用于视图与vm中的值的同步，修改其中一个地方另外一个地方都会同步)
    ```html
    <div id="app">
    <input type="text" v-model:value="message">
    <input type="text" v-bind:value="message">
    </div>
    ```
    + 事件绑定 v-on(可简化成@:xxx)
    ```html
    <div id="app">
    <!-- 进行事件绑定-->
    <button v-on:click="sayHi"> 按钮</button>
    <button @click="sayHi">我是缩写</button>
    </div>
    ```
2. 流程控制
    + v-if 判断
    ```html
    <div id="app">
    <!-- 如果成立true则显示这个标签，否则隐藏！ -->
    <h2 v-if="type === 'A'"> 测试A </h2>
    <h2 v-else-if="type === 'B'"> 测试B </h2>
    <h2 v-else-if="type === 'C'"> 测试C </h2>
    <h2 v-else=""> Other </h2>
    </div>
    ```
    + v-for 循环
    ```html
    <div id="app">
    <!-- 遍历items,每一个节点为 item-->
    <li v-for="item in items">
        {{item.msg}}
    </li>
    </div>
   ```
3. 模板创建使用(可以将一些模块进行封装)
    + 用Vue.component 先注册一个模板组件
    + 在视图层直接使用
    ```html
    <div id="app">
    <!--组件：自定义标签, 内容就是template，将item 中的值传递给组件中的com_item-->
    <component-hello v-for="item in items" v-bind:com_item="item">
    </component-hello>
    </div>
    ```
    ```html
    ```javascript
    // 先注册一个模板组件
    Vue.component('component-hello',{
        props:['com_item'],
        template: "<li>Hello {{com_item}}</li>"
    });
    <!-- 创建一个vm层   -->
    var vm = new Vue({
            el: '#app',
            data: {
                items: ['张三','李四','王五']
            }
        }
    )
    ```
# VUE
[官网](https://cn.vuejs.org/)
# VUE 的生命周期
![VUE生命周期](https://tvax4.sinaimg.cn/large/005DJQmOgy1gdehr00lyqj30xc2cftaj.jpg)
1. 生命周期钩子函数:钩子函数就是在做某些事件的时候去调用的函数
2. 最重要的是“created”和“mounted”
# 网络通信 axios
vue官方建议使用axios模块，其主要是在mounted事件时进行，通过该模块获取到后端业务数据，同步到vm层，进而在View层进行数据展示
+ axios与ajax一样是一个网络通讯框架，支持链式编程，调用非常方便简洁！
+ axios提供了所有别名方法如：get()、post()、delete()、put()、patch()…
+ 安装,并且引入js
```bash
npm install axios
```
+ 调用API
```java
@RestController
@RequestMapping("articles")
public class ArticleController {
    @Autowired
    private IArticleService articleService;

    @GetMapping("list")
    public List<ArticleBO> list(@RequestParam("id") Long id) {
        ArticlePageVO vo = new ArticlePageVO();
        IPage page = vo.generatePage();
        return articleService.page(page, vo);
    }
}
```
+ vue代码
```javascript
let vue = new Vue({
        el: '#app',
        data: {
            list: null
        },
        mounted() {
            axios.get('http://localhost:8080/articles/list', {
                params: {
                    id: 12
                }
            }).then((response) => {
                this.list = response.data
            })
        }
    })
```

# Vue 路由定义(vue-router)
路由主要是用于控制页面中的内容跳转，通常套路为：
+ 定义路由组件
+ 定义路由（核心），即定义路径的跳转关系
+ 创建路由实例
1. 安装
```bash
npm install vue-cli -g
```
2. 代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<!-- 在Html页面中的固定模板！-->
<div id="app">
  <!-- 页面 路由就是a链接-->
  <p>
    <router-link to="/">首页</router-link>
    <router-link to="/student">学员</router-link>
    <router-link to="/teacher">老师</router-link>
  </p>
  <!-- 页面的视图是如何渲染的呢 -->
  <router-view></router-view>
</div>
<script src="../lib/vue.js"></script>
<script src="../lib/vue-router.js"></script>
<script>
  // 1、 定义路由组件
  const Welcome = {template:'<div>欢迎</div>'}
  const Student = {template:'<div>Student</div>'}
  const Teacher = {template:'<div>Teacher</div>'}
  // 2、定义路由（核心）
  const routes = [
    // 请求这个路由，会跳转到对应的视图当中！
   {path: '/',redirect: '/welcome'}, // 重定向到请求
   {path: '/welcome',component: Welcome}, // 组件直接对应上面定义的组件即可！
   {path: '/student',component: Student},
   {path: '/teacher',component: Teacher}
 ];
  // 3、创建 router 实例
  const router = new VueRouter({
    // routes: routes (缩写如果，同名的话)
    routes
 });
  var vm = new Vue({
    el: '#app',
    router
 })
</script>
</body>
</html>
```
3. 安装成功后，检测
![检测](https://tvax3.sinaimg.cn/large/005DJQmOgy1gdem985rm4j30os07sdfu.jpg)
