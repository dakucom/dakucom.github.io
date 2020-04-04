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
## 什么是 npm

    NPM的全称是Node Package Manager，是一个NodeJS包管理和分发工具，已经成为了非官方的发布
    Node模块（包）的标准。就好比maven，所有东西只要到导入依赖即可，npm 也是如此，npm
install，好比Linux 的 yum 安装！
## 配置淘宝镜像
```bash
npm config set registry https://registry.npm.taobao.org/
```
## 查看npm的配置信息
```bash
npm config list  
```
![npm](https://tvax1.sinaimg.cn/large/005DJQmOgy1gdhujtxfgmj30qi098t8t.jpg)
## 下载依赖包
1. npm install vue 安装指定依赖，默认是最新版本
2. npm install vue@x.x.x 指定版本安装！
3. package.json 中管理了所有依赖版本控制，就如同 pom.xml
4. 指定只在开发的时候使用 `npm install --save-dev (等价-D) eslint`
![npm](https://tva4.sinaimg.cn/large/005DJQmOgy1gdhvh5fzg4j30le0k8t99.jpg)
5. 全局安装环境安装！ -g `npm install -g webpack`,默认安装在npm的根目录中
![npm](https://tvax1.sinaimg.cn/large/005DJQmOgy1gdhvkan8a7j30uu05gwek.jpg)
6. 其他命令
```bash
npm update jquery  # 更新包
npm uninstall jquery  # 卸载包！
```
# Babel
Babel 是一个广泛的转码器！可以将 ES6代码转换为 ES5的代码！ 语法会自动转换！
## 安装 Babel
```bash
npm install -g babel-cli # 安装babel-cli
babel --version # 版本测试
6.26.0 (babel-core 6.26.3)
```
![babel](https://tvax4.sinaimg.cn/large/005DJQmOgy1gdhuu9ka8xj30fp04qq2q.jpg)
## 如何使用
1. 在 src 在编写js源代码
2. 编写.babelrc 配置文件
```js
{
 "presets": [
  "es2015"
],
 "plugins": []
}
```
3. 安装babel依赖
```bash
npm install -D babel-preset-es2015
```
4. 输出测试(自动从es6降到es5)
+ 手动输出
![babel](https://tva4.sinaimg.cn/large/005DJQmOgy1gdhwajoldbj311a0j5jsy.jpg)
![babel](https://tva1.sinaimg.cn/large/005DJQmOgy1gdhwdkd7q0j30nn0ao3yp.jpg)
+ 脚本输出（scripts）
![图片](https://tvax3.sinaimg.cn/large/005DJQmOgy1gdhwnymx2hj30rg0dxwf6.jpg)
# VUE开发时使用***ES6语法***
其实就是一个规范而已！ JavaScript的下一代标准！ES6 = ES2015 = ECMAScript6！
1. let 声明变量！
    + var与let的区别
        + 与var不同，var声明变量是能够全局使用的，而let声明的变量为**私有变量**，是**局部**的;
        ![let有作用域](https://tva2.sinaimg.cn/large/005DJQmOgy1gdggvi5e5uj30kz0i9jru.jpg)
        + var可以声明多次，但let 变量**不能重复声明**，不然会报错。
        ![let变量不能重复声明](https://tva3.sinaimg.cn/large/005DJQmOgy1gdgh3038pyj30ik0dxt92.jpg)
        + var声明的对象会提升对象的作用域，而let声明的对象不会。
        ![let声明的对象不会提升作用域](https://tva2.sinaimg.cn/large/005DJQmOgy1gdgh8bg19qj30ha0eowev.jpg)
2. 常量变化
一旦使用const声明了常量，这个常量就不允许再改变了，且声明时必须同时赋值。
![const](https://tvax2.sinaimg.cn/large/005DJQmOgy1gdhs0sq1zuj30kg0h074o.jpg)
![const](https://tvax4.sinaimg.cn/large/005DJQmOgy1gdhs3e92rlj30nt0k5gm5.jpg)
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
![const](https://tvax2.sinaimg.cn/large/005DJQmOgy1gdhsovbx0bj30j30fjq3p.jpg)
4. 模板字符串
```js
let name = 'dakuzai'
let age = 18
// 拼接字符串
// 传统的，大家的习惯！ 
let message = 'name:' + name + 'age:' + age; 
console.log(message)
//模板字符串拼接  ${}
// es6模板字符串拼接,字符串引号需要改为: ` `
let es6message = `name: ${name} age:${age}` 
console.log(es6message)
```
![const](https://tva2.sinaimg.cn/large/005DJQmOgy1gdhsr2msv7j30e70faweu.jpg)
+ 对象声明简写(const)
```js
//传统对象声明
let name1 = 'dakuzai'
let age1 = 18
let person = { name: name1, age: age1 }
console.log(person)

//es6简写(语法糖) 对象属性名会被定义成与变量名相同
let name = 'dakuzai'
let age = 18
let user = { name, age }
console.log(user)
```
![const](https://tvax4.sinaimg.cn/large/005DJQmOgy1gdhst0lbj7j30gt0f074p.jpg)
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
![const](https://tva4.sinaimg.cn/large/005DJQmOgy1gdht1up4jmj30mi0fdgm3.jpg)
+ 对象拓展运算符
```js
let person = { name: 'dakzuai', age: 18 }
//复制引用
let personCopyReference = person
//修改名称
personCopyReference.name = 'peng'
console.log('复制引用后的新对象', personCopyReference.name)

//对象深度拷贝  ...是拓展运算符
let user = { name: 'dakzuai', age: 18 }
let userCopyProperty = { ...user }
//修改名称
userCopyProperty.name = '666'
console.log('原对象', user.name)
console.log('深度拷贝后的新对象', userCopyProperty.name)
```
![const](https://tva1.sinaimg.cn/large/005DJQmOgy1gdhtdkdwpcj30ie0h0jrz.jpg)
+ 默认的参数
```js
function showInfo(name, age = 18) {
 console.log(name + ',' + age)
}
// 测试
showInfo('dakuzai', 18)
showInfo('dakuzai')//走默认
showInfo('dakuzai', undefined)//走默认
showInfo('dakuzai', null)
```
![const](https://tva3.sinaimg.cn/large/005DJQmOgy1gdhteqkrupj30lm0e8mxf.jpg)
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
![cosnt](https://tva1.sinaimg.cn/large/005DJQmOgy1gdhtflrjf2j30ma0dymxh.jpg)
+ 小结：
未来，前端代码的底层大量可以看见这些代码，尤其是对接后端接口api。es6是一个非常人性化的语法，非常优雅，和后端开发接近。
# 模块化（import）
面向对象
## 模块化规范：
1. CommonJS 规范
    + 新建一个js文件
        ```js
        const sum = function (a, b) {
         return a + b
        }
        const sub = function (a, b) {
             return a - b
        }
        const mul = function (a, b) {
             return a * b
        }
        const di = function (a, b) {
             return a / b
        }
            // 导出这些方法供他人使用！
            // module.exports = {
            //  sum: sum,
            //  sub: sub,
            //  mul: mul,
            //  di: di,
            // }
            // 如果名称相同，可以简写
        module.exports = {
             sum,
             sub,
             mul,
             di
        }
        ```
    + 新建一个js文件，测试导入
        ```js
        const m = require('./xxx.js')
        console.log(m)
        // 测试方法，正常输出
        const r1 = m.sum(1, 2)
        const r2 = m.sub(1, 2)
        console.log(r1)
        console.log(r2)
        ```
2. ES6模块化规范
+ 第一种写法
    + 新建一个userApi.js文件
        ```js
        export function getList() {
         console.log('获取用户列表')
        }
        export function save() {
         console.log('保存用户信息')
        }
        ```
    + 新建一个测试的js文件
        ```js
        // import node不支持 需要用babel转义
        import { getList, save } from './userApi.js'
        getList()
        save()
        ```
+ 第二种写法
    + 新建一个js文件
        ```js
        export default {
         getList() {
          console.log("获取数据列表")
            },
         save() {
          console.log("保存用户")
            }
        }
        ```
    + 新建一个测试的js文件
        ```js
        import user from './userApi2.js'
        user.getList()
        user.save()
        ```
### 小结
记住一个点，node 不支持 es6 模块化语法，需要babel转义！具体操作可以看babel的讲解。
# Webpack
## 什么是 Webpack
    Webpack 是一个前端的资源、打包工具！
## webpack 安装
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
+ 手动命令行
    ```bash
    webpack --mode=development
    ```
+ 写脚本（scripts）
在package.json中的scripts中配置脚本，npm run xxxx
+ 例子，来源自网路
```js
module.exports = {
  // 提供 mode 配置选项，告知 webpack 使用相应模式的内置优化
  mode: 'production',
  // 基础目录，绝对路径，用于配置中解析入口起点（entry point）和 loader 默认使用当前目录，但是推荐在配置中传递一个值
  context: 'C:\\project\\vueTest',
  // 此选项控制是否生成，以及如何生成 source map 使用 SourceMapDevToolPlugin 进行更细粒度的配置。查看 source-map-loader 来处理已有的 source map
  devtool: false,
  // 此选项可以配置是否polyfill或mock某些Node.js全局变量和模块。这可以使最初为Node.js环境编写的代码。在其他环境中允许
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
     net: 'empty',
    tls: 'empty',
    child_process: 'empty'
 },
  // 默认为 ./src
  // 这里应用程序开始执行
  // webpack 开始打包
  output: {
    // path webpack 如何输出结果的相关选项
    path: 'C:\\project\\vueTest\\dist', // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用node.js的path模块）
    filename: 'js/[name].[contenthash:8].js',
    // 入口分块(entry chunk) 的文件名称模板
    publicPath: '/',
    // 此选项决定了非入口(non-entry) chunk 文件的名称。有关可取的值的详细信息，请查看
output.filename 选项。
    chunkFilename: 'js/[name].[contenthash:8].js'
 },
  //解析 配置模块如何解析，例如，挡在ES2015中调用import "loadsh",resolve选项能够对webpack查找“loadsh”的方式取做修改
  resolve: {
    // 创建import或require的别名，来确保模块引入变得简单、例如，一些位于 src/ 文件夹下
的常用模块：
    alias: {
      '@': 'C:\\project\\vueTest\\src',
      vue$: 'vue/dist/vue.runtime.esm.js'
   },
    // 自动解析确定的扩展。默认值为['.wasm', '.mjs', '.js', '.json']
    // 能够使用户在引入模块时不带扩展： 如import File from '../path/to/file';
    extensions: [
      '.js',
      '.jsx',
      '.vue',
      '.json'
   ],
    // 告诉webpack 解析模块时应该搜索的目录，
    // 绝对路径和相对路径都能使用，但是要知道它们之间有一点差异
    // 通过查看当前目录以及祖先路径，相对路径将类似于Node查找‘node_modules’
    modules: [
      // 模块别名列表
      'node_modules',
      'C:\\project\\vueTest\\node_modules',
      'C:\\project\\vueTest\\node_modules\\@vue\\cli-
service\\node_modules'
   ]
 },
  // 这组选项与上面的resolve对象的属性集合相同，但是仅用于来解析webpack的loader包。
  resolveLoader: {
    modules: [
      'C:\\project\\vueTest\\node_modules\\@vue\\cli-plugin-
eslint\\node_modules',
      'C:\\project\\vueTest\\node_modules\\@vue\\cli-plugin-
babel\\node_modules',
      'node_modules',
      'C:\\project\\vueTest\\node_modules',
      'C:\\project\\vueTest\\node_modules\\@vue\\cli-
service\\node_modules'
    ]
 },
  // 模块 module 决定了 如何处理项目中的不同类型的模块
  module: {
    // 防止webpakc解析哪些任何与给定正则表达式匹配的文件。忽略的文件中不应该含有important,require,define的调用，或任何其他导入机制忽略大型的libaray可以提高构建性能
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    // 模块规格 （匹配loader，解析器等选项）
    // loaders webpack可以使用loader来预处理文件。这允许你打包除javascript之外的任何静态资源,你可以使用node.js来更简单的编写自己的loader
    rules: [
      /* config.module.rule('vue') */
     {
        test: /\.vue$/,
        use: [
         {
            // 有一些性能开销较大的loader之前添加此loader,可以将结果缓存到磁盘里
            loader: 'cache-loader',
            options: {
              cacheDirectory:
'C:\\project\\vueTest\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: 'c12e2af6'
           }
         },
         {
            // 以及 `.vue` 文件中的 `<script>` 块
            loader: 'vue-loader',
            options: {
              // 模板编译器的选项。当使用默认的 vue-template-compiler 的时候，你可以使用这个选项来添加自定义编译器指令、模块或通过 { preserveWhitespace: false } 放弃模板标签之间的空格。
              compilerOptions: {
                preserveWhitespace: false
             },
              // 模板编译器的选项。当使用默认的 vue-template-compiler 的时候，你可以使用这个选项来添加自定义编译器指令、模块或通过 { preserveWhitespace: false } 放弃模板标签之间的空格。
              cacheDirectory:
'C:\\project\\vueTest\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: 'c12e2af6'
           }
         }
       ]
     },
      /* config.module.rule('images') */
     {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
         { 
            // npm install --save-dev url-loader
            // npm install --save-dev file-loader
            // 用法" class="icon-link" href="#用法">
            // 加载文件为base64编码的URL
            // 以字节为单位
            // 当文件大于限制(以字节为单位)时，为文件指定加载器
            loader: 'url-loader',
            options: {
               limit: 10240, // 以字节为单位
              fallback: { // 当文件大于限制(以字节为单位)时，为文件指定加
载器
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
               }
             }
           }
         }
       ]
     },
      /* config.module.rule('svg') */
     {
        test: /\.(svg)(\?.*)?$/,
        use: [
         {
            // npm install --save-dev file-loader
            // 默认情况下，生成的文件的文件名就是文件内容的MD5哈希值并保留所引
用资源的原始扩展名
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
           }
            // 生成文件 file.png，输出到输出目录并返回 public URL。
            // "/public/path/0dcbbaa7013869e351f.png"
         }
       ]
     },
      /* config.module.rule('media') */
     {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
         {
            // npm install --save-dev url-loader
            // npm install --save-dev file-loader
            // 用法" class="icon-link" href="#用法">
            // 加载文件为base64编码的URL
            // 以字节为单位
            // 当文件大于限制(以字节为单位)时，为文件指定加载器
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
               }
             }
           }
         }
       ]
     },
      /* config.module.rule('fonts') */
     {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
         {
             // npm install --save-dev url-loader
            // npm install --save-dev file-loader
            // 用法" class="icon-link" href="#用法">
            // 加载文件为base64编码的URL
            // 以字节为单位
            // 当文件大于限制(以字节为单位)时，为文件指定加载器
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
               }
             }
           }
         }
       ]
     },
      // 一个简单地将pug模板编译成HTML的加载器
      /* config.module.rule('pug') */
     {
        test: /\.pug$/,
        use: [
         {
            loader: 'pug-plain-loader'
         }
       ]
     },
      /* config.module.rule('css') */
     {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
         {
            resourceQuery: /module/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                // 加载.css文件
                loader: 'css-loader',
                options: {
                  sourceMap: false, // 启用/禁用 CSS 模块
                  importLoaders: 2, // 在 css-loader 前应用的loader 的数量
                  modules: true, // 启用/禁用 CSS 模块
                  localIdentName:
'[name]_[local]_[hash:base64:5]'
               }
             },
             {
                // 加载器webpack来处理CSS与PostCSS
                 loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         },
          /* config.module.rule('css').oneOf('vue') */
         {
            resourceQuery: /\?vue/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2 // 在 css-loader 前应用的
loader 的数量
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         },
          /* config.module.rule('css').oneOf('normal-modules') */
         {
            test: /\.module\.\w+$/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                // 解释（interpret） @import 和 url(). 会import/require()后再解析它们
                // 引用合适的loader是file-loader和url-loader
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName:
'[name]_[local]_[hash:base64:5]'
               }
             },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         },
          /* config.module.rule('css').oneOf('normal') */
         {
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         }
       ]
     },
      /* config.module.rule('postcss') */
     {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
         {
            resourceQuery: /module/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName:
'[name]_[local]_[hash:base64:5]'
                }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         },
          /* config.module.rule('postcss').oneOf('vue') */
         {
            resourceQuery: /\?vue/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         },
          /* config.module.rule('postcss').oneOf('normal-modules') */
         {
            test: /\.module\.\w+$/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName:
'[name]_[local]_[hash:base64:5]'
               }
             },
             {
                 loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         },
          /* config.module.rule('postcss').oneOf('normal') */
         {
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         }
       ]
     },
      // 加载一个SASS/SCSS文件并将其编译为CSS。
      /* config.module.rule('scss') */
     {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
         {
            resourceQuery: /module/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                // 加载css
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                   localIdentName:
'[name]_[local]_[hash:base64:5]'
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         },
         
          /* config.module.rule('scss').oneOf('vue') */
         {
            resourceQuery: /\?vue/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                // 加载一个SASS/SCSS文件并将其编译为CSS。
                loader: 'sass-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         },
          /* config.module.rule('scss').oneOf('normal-modules') */
         {
            test: /\.module\.\w+$/,
            use: [
             {
                 loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName:
'[name]_[local]_[hash:base64:5]'
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                // 加载一个SASS/SCSS文件并将其编译为CSS。
                loader: 'sass-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         },
          /* config.module.rule('scss').oneOf('normal') */
         {
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                // 加载一个SASS/SCSS文件并将其编译为CSS。
                loader: 'sass-loader',
                options: {
                   sourceMap: false
               }
             }
           ]
         }
       ]
     },
      /* config.module.rule('sass') */
     {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
         {
            resourceQuery: /module/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName:
'[name]_[local]_[hash:base64:5]'
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                // 加载一个SASS/SCSS文件并将其编译为CSS。
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
               }
             }
           ]
         },
          /* config.module.rule('sass').oneOf('vue') */
         {
            resourceQuery: /\?vue/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
              },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                // 加载一个SASS/SCSS文件并将其编译为CSS。
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
               }
             }
           ]
         },
          /* config.module.rule('sass').oneOf('normal-modules') */
         {
            test: /\.module\.\w+$/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName:
'[name]_[local]_[hash:base64:5]'
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
               }
             }
            ]
         },
          /* config.module.rule('sass').oneOf('normal') */
         {
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
               }
             }
           ]
         }
       ]
     },
      /* config.module.rule('less') */
     {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
         {
            resourceQuery: /module/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                   localIdentName:
'[name]_[local]_[hash:base64:5]'
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                loader: 'less-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         },
          /* config.module.rule('less').oneOf('vue') */
         {
            resourceQuery: /\?vue/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                loader: 'less-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         },
          /* config.module.rule('less').oneOf('normal-modules') */
         {
            test: /\.module\.\w+$/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                   publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName:
'[name]_[local]_[hash:base64:5]'
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                loader: 'less-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         },
          /* config.module.rule('less').oneOf('normal') */
         {
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                loader: 'less-loader',
                options: {
                  sourceMap: false
               }
             }
           ]
         }
        ]
     },
      /* config.module.rule('stylus') */
     {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
         {
            resourceQuery: /module/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName:
'[name]_[local]_[hash:base64:5]'
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
               }
             }
           ]
         },
          /* config.module.rule('stylus').oneOf('vue') */
         {
            resourceQuery: /\?vue/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
               }
             }
           ]
         },
          /* config.module.rule('stylus').oneOf('normal-modules') */
         {
            test: /\.module\.\w+$/,
            use: [
             {
                loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName:
'[name]_[local]_[hash:base64:5]'
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
               }
             }
           ]
         },
          /* config.module.rule('stylus').oneOf('normal') */
         {
            use: [
             {
                 loader:
'C:\\project\\vueTest\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
               }
             },
             {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
               }
             },
             {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
               }
             },
             {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
               }
             }
           ]
         }
       ]
     },
      /* config.module.rule('js') */
     {
        test: /\.jsx?$/,
        exclude: [
          filepath => {
            // always transpile js in vue files
            if (/\.vue\.jsx?$/.test(filepath)) {
              return false
           }
            // exclude dynamic entries from cli-service
            if (filepath.startsWith(cliServicePath)) {
              return true
           }
            // check if this is something the user explicitly wants
to transpile
            if (options.transpileDependencies.some(dep => {
              if (typeof dep === 'string') {
                return filepath.includes(path.normalize(dep))
             } else {
                return filepath.match(dep)
             }
           })) {
              return false
           }
            // Don't transpile node_modules
            return /node_modules/.test(filepath)
         }
       ],
         use: [
         {  // 在一些性能开销较大的 loader 之前添加此 loader，以将结果缓存到磁盘里。
            loader: 'cache-loader',
            options: {
              cacheDirectory:
'C:\\project\\vueTest\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '1218c33d'
           }
         },
         {
            // 把这个 loader 放置在其他 loader 之前， 放置在这个 loader 之后的 loader 就会在一个单独的 worker 池(worker pool)中运行
            // 每个 worker 都是一个单独的有 600ms 限制的 node.js 进程。同时跨进程的数据交换也会被限制。
            loader: 'thread-loader'
         },
         {  // 这个包允许使用Babel和webpack传输JavaScript文件。
            loader: 'babel-loader'
         }
       ]
     },
      /* config.module.rule('eslint') */
     {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          'C:\\project\\vueTest\\node_modules\\@vue\\cli-service\\lib'
       ],
        use: [
         {
            loader: 'eslint-loader',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
             ],
              cache: true,
              cacheIdentifier: 'c384f39c',
              emitWarning: true,
              emitError: false,
              formatter: function (results) {
                let errors = 0;
                let warnings = 0;
                let fixableErrors = 0;
                let fixableWarnings = 0;
                const resultsWithMessages =
results.filter(result => result.messages.length > 0);
                let output =
resultsWithMessages.reduce((resultsOutput, result) => {
                  const messages = result.messages.map(message
=> `${formatMessage(message, result)}\n\n`);
                  errors += result.errorCount;
                   warnings += result.warningCount;
                  fixableErrors += result.fixableErrorCount;
                  fixableWarnings +=
result.fixableWarningCount;
                  return resultsOutput.concat(messages);
               }, []).join("\n");
                output += "\n";
                output += formatSummary(errors, warnings,
fixableErrors, fixableWarnings);
                return (errors + warnings) > 0 ? output : "";
             }
           }
         }
       ]
     }
   ]
 },
  // 优化
  optimization: {
    minimizer: [
     {
        options: {
          test: /\.js(\?.*)?$/i,
          warningsFilter: function () {
            return true;
         },
          extractComments: false,
          sourceMap: false,
          cache: true,
          cacheKeys: function (defaultCacheKeys) {
            return defaultCacheKeys;
         },
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          uglifyOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
               if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
           },
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/
           },
            mangle: {
              safari10: true
           }
         }
       }
     }
   ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
       },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
       }
     }
   }
 },
  // webpack插件列表
  plugins: [
    /* config.plugin('vue-loader') */
    // 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    // DefinePlugin 中 process.env 键的简写方式。
    new DefinePlugin(
     {
        'process.env': {
          NODE_ENV: '"production"',
          VUE_APP_CLI_UI_URL: '""',
          BASE_URL: '"/"'
       }
     }
   ),
    /* config.plugin('case-sensitive-paths') */
    // 这个Webpack插件强制所有必需模块的完整路径与磁盘上实际路径的精确情况匹配。使用这个插件可以帮助缓解在OSX上工作的开发人员与其他开发人员发生冲突，或者构建运行其他操作系统的机器，这些操作系统需要正确使用大小写的路径。
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
     // 识别某些类的webpack错误并清理、聚合和优先化它们，以提供更好的开发人员体验。
    new FriendlyErrorsWebpackPlugin(
     {
        additionalTransformers: [
          error => {
            if (error.webpackError) {
              const message = typeof error.webpackError ===
'string'
                ? error.webpackError
               : error.webpackError.message || ''
              for (const { re, msg, type } of rules) {
                const match = message.match(re)
                if (match) {
                  return Object.assign({}, error, {
                    // type is necessary to avoid being
printed as defualt error
                    // by friendly-error-webpack-plugin
                    type,
                    shortMessage: msg(error, match)
                 })
               }
             }
              // no match, unknown webpack error without a
message.
              // friendly-error-webpack-plugin fails to handle
this.
              if (!error.message) {
                return Object.assign({}, error, {
                  type: 'unknown-webpack-error',
                  shortMessage: message
               })
             }
           }
            return error
         }
       ],
        additionalFormatters: [
          errors => {
            errors = errors.filter(e => e.shortMessage)
            if (errors.length) {
              return errors.map(e => e.shortMessage)
           }
         }
       ]
     }
   ),
    // 为每个引入 CSS 的 JS 文件创建一个 CSS 文件 提取css到一个css文件中
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
     {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
     }
   ),
    /* config.plugin('optimize-css') */
    // 优化css
    new OptimizeCssnanoPlugin(
     {
         sourceMap: false,
        cssnanoOptions: {
          preset: [
            'default',
           {
              mergeLonghand: false,
              cssDeclarationSorter: false
           }
         ]
       }
     }
   ),
    // 该插件会根据模块的相对路径生成一个四位数的hash作为模块id, 建议用于生产环境。
    /* config.plugin('hash-module-ids') */
    new HashedModuleIdsPlugin(
     {
        hashDigest: 'hex'
     }
   ),
    /* config.plugin('named-chunks') */
    new NamedChunksPlugin(
      chunk => {
        if (chunk.name) {
          return chunk.name
       }
        const hash = require('hash-sum')
        const joinedHash = hash(
          Array.from(chunk.modulesIterable, m => m.id).join('_')
       )
        return `chunk-` + joinedHash
     }
   ),
    // 简单创建 HTML 文件，用于服务器访问
    //
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
     {
        templateParameters: (compilation, assets, pluginOptions) => {
          // enhance html-webpack-plugin's built in template params
          let stats
          return Object.assign({
            // make stats lazy as it is expensive
            get webpack() {
              return stats || (stats =
compilation.getStats().toJson())
           },
            compilation: compilation,
            webpackConfig: compilation.options,
            htmlWebpackPlugin: {
              files: assets,
              options: pluginOptions
           }
         }, resolveClientEnv(options, true /* raw */))
       },
        minify: {
          removeComments: true,
           collapseWhitespace: true,
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true
       },
        template: 'C:\\project\\vueTest\\public\\index.html'
     }
   ),
    /* config.plugin('pwa') */
    new HtmlPwaPlugin(
     {
        name: 'vueTest'
     }
   ),
    /* config.plugin('preload') */
    new PreloadPlugin(
     {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
       ]
     }
   ),
    /* config.plugin('prefetch') */
    // 预取出普通的模块请求(module request)，可以让这些模块在他们被 import 或者是require 之前就解析并且编译。使用这个预取插件可以提升性能。可以多试试在编译前记录时间(profile)来决定最佳的预取的节点。
    new PreloadPlugin(
     {
        rel: 'prefetch',
        include: 'asyncChunks'
     }
   ),
    // 将单个文件或整个目录复制到构建目录。
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
     [
       {
          from: 'C:\\project\\vueTest\\public',
          to: 'C:\\project\\vueTest\\dist',
          toType: 'dir',
          ignore: [
            'index.html',
            '.DS_Store'
         ]
       }
     ]
   ),
    /* config.plugin('workbox') */
    new GenerateSW(
     {
        exclude: [
          /\.map$/,
          /img\/icons\//,
          /favicon\.ico$/,
          /manifest\.json$/
       ],
        cacheId: 'vueTest'
     }
   )
 ],
  entry: {
    app: [
      './src/main.js'
   ]
 }
}
```
## 小结
webpack 打包，可以让我们的代码不是那么繁琐，可以实现复用！
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
